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
NEXT_PUBLIC_BASE_URL=http://localhost:3000
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-google-app-password
```

| Variable | Usage |
| --- | --- |
| `NEXT_PUBLIC_BASE_URL` | Absolute site origin used by metadata, the sitemap, and robots output. Use the final HTTPS origin in production, without a trailing slash. This value is public. |
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
| `npx tsc --noEmit` | Check TypeScript without emitting JavaScript |

There is currently no automated test script.

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
  data/testimonials.ts        Testimonial content
  lib/utils.ts               Class-name utility
public/images/               Public image assets
docs/project_scope.md        Original proposal and roadmap
docs/seo-audit-us.md          Repository SEO audit and US growth priorities
design-tokens.json           Design reference tokens
```

## Editing content

- **Courses:** edit `src/data/courses.ts`. The catalog, course routes, form options, and sitemap consume this data. Preserve existing slugs where possible; redirect old URLs when changing them.
- **Prices:** edit `src/app/pricing/page.tsx` and reconcile matching copy in the homepage FAQs, FAQ JSON-LD, and US page. Pricing is not yet centralized.
- **Testimonials:** edit `src/data/testimonials.ts`; the US page filters entries whose role contains `USA`. Use verified, permissioned feedback.
- **Branding and styling:** edit `src/app/globals.css`, the root layout, and shared layout components. `design-tokens.json` is a reference, not an automatically applied theme.
- **Search and sharing:** review `src/app/layout.tsx`, individual page metadata, `sitemap.ts`, `robots.ts`, and the image metadata files under `src/app`.
- **Contact details:** edit `src/app/contact/page.tsx` and applicable policy pages. The visible phone number is currently a placeholder.

## How trial requests work

1. The visitor provides their name, email, phone, country, course, and optional notes on `/contact`.
2. The client calls `submitLeadAction` in `src/actions/submitLead.ts`.
3. The action checks that name, email, phone, and course are present, then sends an HTML notification to `GMAIL_USER` through Gmail.
4. The page displays success or an error. Staff arrange the session afterward.

Requests are not stored in a database. There is no student confirmation email, automatic booking calendar, CRM connection, payment processing, or WhatsApp API integration. The notification email includes a WhatsApp contact link. The country field is required in the browser but is not enforced by the server action.

Before a public launch, strengthen server-side validation, escape user input inserted into HTML emails, add spam/rate-limit controls, and test delivery to the configured inbox. These are outstanding improvements, not implemented features.

## Deployment

Deploy to a Next.js-compatible platform such as Vercel, or a Node.js host that supports Server Actions and outbound SMTP. A static-only export cannot run the current lead form.

1. Configure the three environment variables on the host. Set `NEXT_PUBLIC_BASE_URL` to the final production origin before building.
2. Run `npm run lint` and `npm run build`.
3. For a Node.js deployment, run `npm start` after the build.
4. Verify key pages, course URLs, `/robots.txt`, and `/sitemap.xml` on the deployed origin.
5. Submit an authorized test request and verify notification delivery before accepting public leads.

Domain configuration currently needs reconciliation: the layout falls back to `reciteayah.vercel.app`, robots and sitemap fall back to `www.reciteayah.com`, and `openGraph.url` is hardcoded to the latter. Setting the environment variable alone does not change that hardcoded Open Graph URL.

## Current limitations and SEO

The original [project scope](docs/project_scope.md) includes proposed integrations that are not implemented. It should be read as a planning document.

Current launch issues include inconsistent advertised prices ($50 in the homepage FAQ versus $35 for the entry plan), an unverified Stripe payment claim on the US page, missing metadata on several routes, no explicit canonical URLs, and no internal navigation link to the US landing page. Analytics integration is also absent from the source.

See the [US SEO audit and action plan](docs/seo-audit-us.md) for evidence, suggested keyword-to-page mapping, and a prioritized rollout. That audit describes recommendations; it does not indicate that the changes have been implemented.

## Contributor guidance

Read `AGENTS.md` before changing application code. It requires checking the relevant version-specific documentation under `node_modules/next/dist/docs/` rather than relying on older Next.js conventions.
