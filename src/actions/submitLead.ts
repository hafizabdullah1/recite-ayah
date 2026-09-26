"use server";

import nodemailer from "nodemailer";
import { createHash } from "node:crypto";
import { courses, getCourseBySlug } from "@/data/courses";
import { escapeHtml, validateLead } from "@/lib/lead-validation";
import { createLeadRateLimiter } from "@/lib/lead-rate-limit";

const allowEmail = createLeadRateLimiter();
const allowVolume = createLeadRateLimiter(30, 60_000);

export async function submitLeadAction(formData: FormData) {
  if (formData.get("website")) return { success: false, error: "Unable to submit this request. Please try again." };
  const result = validateLead(formData, courses.map(course => course.slug));
  if (result.error || !result.lead) return { success: false, error: result.error };
  const lead = result.lead;
  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;
  if (!gmailUser || !gmailPass) {
    return { success: false, error: "Trial requests are temporarily unavailable. Please try again later." };
  }
  const key = createHash("sha256").update(lead.email).digest("hex");
  if (!allowEmail(key) || !allowVolume("all")) {
    return { success: false, error: "Too many requests. Please wait a few minutes before trying again." };
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: gmailUser, pass: gmailPass },
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 20_000,
    });
    const rows = [
      ["Name", lead.name], ["Email", lead.email], ["Phone / WhatsApp", lead.phone],
      ["Country", lead.country], ["Time zone", lead.timezone],
      ["Course", getCourseBySlug(lead.course)!.title], ["Notes", lead.message || "No additional notes."],
    ];
    const whatsappUrl = "https://wa.me/" + lead.phone.replace(/\D/g, "");
    await transporter.sendMail({
      from: { name: "Recite Ayah", address: gmailUser },
      to: gmailUser,
      replyTo: { name: lead.name, address: lead.email },
      subject: "New free trial request",
      text: rows.map(([label, value]) => label + ": " + value).join("\n") + "\nWhatsApp: " + whatsappUrl,
      html: '<h2>New free trial request</h2><table>' + rows.map(([label, value]) =>
        '<tr><th style="text-align:left;padding:8px">' + escapeHtml(label) + '</th><td style="padding:8px;white-space:pre-wrap">' + escapeHtml(value) + '</td></tr>'
      ).join("") + '</table><p><a href="' + whatsappUrl + '">Contact on WhatsApp</a></p>',
    });
    return { success: true };
  } catch {
    // Do not log the form payload or SMTP credentials.
    console.error("Trial notification delivery failed.");
    return { success: false, error: "We could not send your request. Please try again shortly." };
  }
}
