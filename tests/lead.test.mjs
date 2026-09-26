import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { createRequire } from "node:module";
const resolveModule = createRequire(import.meta.url);
import ts from "typescript";

// Compile these small modules in isolation; mail delivery is always mocked.
function load(file, dependencies = {}) {
  const output = ts.transpileModule(fs.readFileSync(new URL("../" + file, import.meta.url), "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true },
  });
  const compiled = { exports: {} };
  new Function("require", "module", "exports", output.outputText)(
    name => dependencies[name] ?? resolveModule(name), compiled, compiled.exports,
  );
  return compiled.exports;
}

const validation = load("src/lib/lead-validation.ts");
const rateLimit = load("src/lib/lead-rate-limit.ts");
const courseSlugs = ["quran-reading-basics"];
function form(overrides = {}) {
  const data = new FormData();
  for (const [key, value] of Object.entries({
    name: "Amina", email: "AMINA@example.com", phone: "+1 (202) 555-0123",
    country: "USA", course: courseSlugs[0], timezone: "America/New_York", message: "Evenings, please.", ...overrides,
  })) data.set(key, value);
  return data;
}

test("accepts international names and normalizes contact details", () => {
  const { lead, error } = validation.validateLead(form({ name: "  آمنة  " }), courseSlugs);
  assert.equal(error, undefined);
  assert.equal(lead.name, "آمنة");
  assert.equal(lead.email, "amina@example.com");
});

test("rejects missing fields, header injection, invalid courses/time zones and oversized input", () => {
  for (const invalid of [
    { name: " " }, { country: "" }, { timezone: "" }, { timezone: "Not/AZone" },
    { email: "x@example.com\r\nBcc: attacker@example.com" }, { email: "invalid" },
    { phone: "2025550123" }, { phone: "+123" }, { course: "invented-course" },
    { message: "x".repeat(2001) }, { name: new Blob(["not text"]) },
  ]) assert.ok(validation.validateLead(form(invalid), courseSlugs).error, JSON.stringify(invalid));
});

test("escapes untrusted email HTML", () => {
  assert.equal(validation.escapeHtml('<a href="x">&\'</a>'), "&lt;a href=&quot;x&quot;&gt;&amp;&#39;&lt;/a&gt;");
});

test("rate limit separates identities and resets after the window", () => {
  const allow = rateLimit.createLeadRateLimiter(2, 1000);
  assert.equal(allow("a", 0), true);
  assert.equal(allow("a", 100), true);
  assert.equal(allow("a", 200), false);
  assert.equal(allow("b", 200), true);
  assert.equal(allow("a", 1000), true);
});

test("lead action rejects spam and invalid data, and safely formats a successful notification", async () => {
  const previousUser = process.env.GMAIL_USER;
  const previousPassword = process.env.GMAIL_APP_PASSWORD;
  process.env.GMAIL_USER = "test@example.com";
  process.env.GMAIL_APP_PASSWORD = "test-only";
  const sent = [];
  const { submitLeadAction } = load("src/actions/submitLead.ts", {
    nodemailer: { createTransport: () => ({ sendMail: async message => { sent.push(message); } }) },
    "@/data/courses": { courses: [{ slug: courseSlugs[0] }], getCourseBySlug: () => ({ title: "Noorani Qaida" }) },
    "@/lib/lead-validation": validation,
    "@/lib/lead-rate-limit": rateLimit,
  });
  try {
    assert.equal((await submitLeadAction(form({ website: "spam" }))).success, false);
    assert.equal((await submitLeadAction(form({ course: "invalid" }))).success, false);
    assert.equal(sent.length, 0);
    assert.equal((await submitLeadAction(form({ message: '<img src=x onerror="alert(1)">' }))).success, true);
    assert.equal(sent.length, 1);
    assert.ok(sent[0].html.includes("&lt;img"));
    assert.ok(!sent[0].html.includes("<img"));
    assert.ok(sent[0].text.includes("America/New_York"));
    assert.equal(sent[0].replyTo.address, "amina@example.com");
  } finally {
    if (previousUser === undefined) delete process.env.GMAIL_USER; else process.env.GMAIL_USER = previousUser;
    if (previousPassword === undefined) delete process.env.GMAIL_APP_PASSWORD; else process.env.GMAIL_APP_PASSWORD = previousPassword;
  }
});
