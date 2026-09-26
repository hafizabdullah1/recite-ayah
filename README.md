# Recite Ayah

Recite Ayah is a marketing and trial-request website for an online Quran academy. The repository is named `quran-expert`. Visitors can explore courses, compare monthly plans, and request a free 30-minute evaluation class. A dedicated US landing page supports the academy's US audience.

## Stack

- Next.js 16.3.6 with the App Router
- React 19.2.8 and TypeScript 5
- Tailwind CSS 4, Lucide icons, and a reusable Radix Slot-based button
- Nodemailer with Gmail SMTP for administrator lead notifications
- Aoboshi One and Outfit fonts through `next/font/google`

Content is maintained in source files. No database or CMS is required.

## Features and routes

| Route | Purpose |
| --- | --- |
| `/` | Academy introduction, course previews, trial calls to action, and FAQs |
| `/about` | Mission and teaching approach |
| `/courses` | Course catalog |
| `/courses/[slug]` | Individual course descriptions and learning outcomes |
| `/pricing` | Monthly plans currently displayed at $35, $50, and $75 |
| `/usa/online-quran-classes` | US-focused landing page |
| `/contact` | Trial-request form and contact information |
| `/privacy` and `/terms` | Policy pages |
| `/sitemap.xml` and `/robots.txt` | Generated crawler resources |

The four current course slugs are `quran-reading-basics`, `quran-with-tajweed`, `quran-memorization`, and `islamic-studies-for-kids`. Course routes use `generateStaticParams`; unknown courses call `notFound()`.

## Local setup

Use a supported Node.js release meeting Next.js's minimum of **20.9.0**, with npm installed.

```bash
npm ci
```

Create `.env.local` in the repository root with the following values:

```dotenv
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-google-app-password
```

| Variable | Usage |
| --- | --- |
| `GMAIL_USER` | Gmail account used to send notifications and receive trial requests. Server-only. |
| `GMAIL_APP_PASSWORD` | Google App Password used by Nodemailer. Server-only; do not use a regular account password. |

Follow [Google's App Password instructions](https://support.google.com/accounts/answer/185833). Never commit real credentials. The repository ignores `.env*`, including `.env.example`, so the setup above does not depend on an example file being present in a fresh clone.

Pages can be explored without Gmail credentials, but submitting the form will return a configuration error. Font downloads during a build may require network access.

```bash
npm run dev
```

Open [localhost:3000](http://localhost:3000).

On Windows, if PowerShell blocks `npm.ps1` because of its execution policy, use `npm.cmd` instead of `npm` in these commands.

## Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm start` | Serve an existing production build |
| `npm run lint` | Run ESLint |
| `npm test` | Run form validation and mocked email tests |
| `npx tsc --noEmit` | Check TypeScript without emitting JavaScript |

Run `npm test` for focused validation, spam-limit, and mocked email-notification tests. Tests do not send email.

## Project layout

```text
src/
  actions/submitLead.ts       Server Action that emails trial requests
  app/                       Routes, root layout, styles, and metadata assets
    courses/[slug]/page.tsx   Data-driven course detail page
    usa/online-quran-classes/ US landing page
    sitemap.ts               Sitemap generation
    robots.ts                Crawler rules
  components/layout/         Shared navigation and footer
  components/ui/Button.tsx    Reusable button component
  data/courses.ts             Course content and slug lookup
  data/pricing.ts             Shared USD pricing
  data/timezones.ts           Common scheduling time zones
  lib/site.ts                 Canonical domain
  lib/metadata.ts             Page metadata builder
  lib/lead-validation.ts      Server-side lead validation
  data/testimonials.ts        Testimonial content
  lib/utils.ts               Class-name utility
public/images/               Public image assets
docs/project_scope.md        Original proposal and roadmap
docs/seo-audit-us.md          Repository SEO audit and US growth priorities
design-tokens.json           Design reference tokens
```

## Editing content

- **Courses:** edit `src/data/courses.ts`. The catalog, course routes, form options, and sitemap consume this data. Preserve existing slugs where possible; redirect old URLs when changing them.
- **Prices:** edit `src/data/pricing.ts`. The pricing page, homepage FAQs and FAQ JSON-LD, and US page use this shared data.
- **Testimonials:** edit `src/data/testimonials.ts`; the US page filters entries whose role contains `USA`. Use verified, permissioned feedback.
- **Branding and styling:** edit `src/app/globals.css`, the root layout, and shared layout components. `design-tokens.json` is a reference, not an automatically applied theme.
- **Search and sharing:** review `src/app/layout.tsx`, individual page metadata, `sitemap.ts`, `robots.ts`, and the image metadata files under `src/app`.
- **Contact details:** edit `src/components/forms/ContactForm.tsx` and applicable policy pages. The placeholder phone number has been removed; confirm the public mailbox is active before launch.

## How trial requests work

1. The visitor provides their name, email, phone, country, course, time zone, and optional notes on `/contact`. Course-page links preselect the course.
2. The client calls `submitLeadAction` in `src/actions/submitLead.ts`.
3. The action validates field types, required values, lengths, email/phone format, the course slug, and time zone. It checks a honeypot and process-local rate limits, then sends escaped HTML and plain-text notifications to `GMAIL_USER` through Gmail.
4. The page displays success or an error. Staff arrange the session afterward.

Requests are not stored in a database. There is no student confirmation email, automatic booking calendar, CRM connection, payment processing, or WhatsApp API integration. The notification email includes a WhatsApp contact link. Country and time zone are required by both the form and server validation.

Rate limits allow three attempts per email in 15 minutes and 30 total per minute, per server process. They reset on restart and are not shared across serverless instances. Add host-level rate limiting or a shared store for stronger production abuse protection. Verify real email delivery separately before launch.

## Deployment

Deploy to a Next.js-compatible platform such as Vercel, or a Node.js host that supports Server Actions and outbound SMTP. A static-only export cannot run the current lead form.

1. Configure `GMAIL_USER` and `GMAIL_APP_PASSWORD` on the host. The canonical production origin is fixed at `https://reciteayah.com` in `src/lib/site.ts`; the old `NEXT_PUBLIC_BASE_URL` variable is no longer used.
2. Run `npm run lint`, `npm test`, and `npm run build`.
3. For a Node.js deployment, run `npm start` after the build.
4. Verify key pages, course URLs, `/robots.txt`, and `/sitemap.xml` on the deployed origin.
5. Submit an authorized test request and verify notification delivery before accepting public leads.

Add both `reciteayah.com` and `www.reciteayah.com` to your hosting project and configure the DNS records specified by the host. Provision HTTPS for both. `next.config.ts` permanently redirects requests for `www.reciteayah.com` to the apex domain, preserving paths and query strings. DNS and hosting configuration are separate from these code changes. Protect preview deployments from indexing using the hosting provider's deployment protection settings.

## Current limitations and SEO

The original [project scope](docs/project_scope.md) includes proposed integrations that are not implemented. It should be read as a planning document.

Implemented: centralized domain and prices, metadata and canonicals on all public pages, Organization and course breadcrumb JSON-LD, responsive hero image optimization, internal links to the expanded US page, and safer trial requests. The unsupported Stripe claim and numerical student-count claims have been removed. Homepage testimonials now use the existing data rather than repeating one testimonial three times.

Still needed from the owner: verify tutor credentials and testimonial permissions, confirm contact details, connect DNS/hosting, configure Search Console, and choose analytics accounts and measurement IDs. Analytics integration is not included.

See the [US SEO audit and action plan](docs/seo-audit-us.md) for evidence, suggested keyword-to-page mapping, and a prioritized rollout. The implementation update at the top distinguishes completed code changes from remaining operational work.

## Contributor guidance

Read `AGENTS.md` before changing application code. It requires checking the relevant version-specific documentation under `node_modules/next/dist/docs/` rather than relying on older Next.js conventions.
