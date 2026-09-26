export type Lead = {
  name: string;
  email: string;
  phone: string;
  country: string;
  course: string;
  timezone: string;
  message: string;
};

export function validateLead(form: FormData, courseSlugs: readonly string[]): { lead: Lead; error?: never } | { error: string; lead?: never } {
  const limits: Record<keyof Lead, number> = { name: 100, email: 254, phone: 40, country: 100, course: 100, timezone: 100, message: 2000 };
  const lead = {} as Lead;
  for (const key of Object.keys(limits) as (keyof Lead)[]) {
    const value = form.get(key);
    if (value !== null && typeof value !== "string") return { error: "Please enter text in the form fields." };
    lead[key] = (value ?? "").trim();
    if (lead[key].length > limits[key]) return { error: `Please shorten the ${key} field.` };
    if (key !== "message" && (!lead[key] || /[\r\n\x00]/.test(lead[key]))) return { error: "Please complete all required fields with valid values." };
  }
  if (!/^[^\s@<>"'(),;:\\]+@[^\s@<>"'(),;:\\]+\.[^\s@<>"'(),;:\\]+$/.test(lead.email)) return { error: "Please enter a valid email address." };
  const digits = lead.phone.replace(/\D/g, "");
  if (!/^\+[\d\s().-]+$/.test(lead.phone) || digits.length < 7 || digits.length > 15) return { error: "Enter a phone number with its country code, for example +1 202 555 0123." };
  if (!courseSlugs.includes(lead.course)) return { error: "Please select a course from the list." };
  try {
    new Intl.DateTimeFormat("en-US", { timeZone: lead.timezone });
  } catch {
    return { error: "Please select a valid time zone." };
  }
  lead.email = lead.email.toLowerCase();
  return { lead };
}

export function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]!);
}
