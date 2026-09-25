# Recite Ayah: US SEO audit and action plan

Reviewed September 25, 2026. This is a source-code audit, supported by current Google documentation. Production hosting, HTTP responses, Search Console, backlinks, keyword volumes, rankings, and real-user performance have not been verified. Proposed keywords below are hypotheses to validate, not measured demand. Application changes have not been implemented as part of this documentation task.

The site has a useful foundation: readable routes, server-rendered page components, generated course paths, a sitemap, robots output, descriptive headings, social images, USD pricing, and a dedicated US landing page. The first priorities are consistent business information, reliable indexing signals, and stronger evidence that the service meets US families' needs.

## 1. Fix these issues first

| Priority | Finding and source evidence | Recommended action |
| --- | --- | --- |
| P0 | `src/app/layout.tsx` defaults to `reciteayah.vercel.app`; `sitemap.ts` and `robots.ts` default to `www.reciteayah.com`. Open Graph has a hardcoded production URL. | Choose the actual production origin, centralize it, and use it consistently. Configure permanent redirects for alternate public hosts. Check hosting settings separately; no redirects are defined in `next.config.ts`. |
| P0 | No `alternates.canonical` appears in the source. | Add an absolute, self-referencing canonical for each distinct indexable page. Do not put a homepage canonical in a shared layout that unintentionally applies to every route. Keep redirects, internal URLs, canonicals, and sitemap URLs aligned. |
| P0 | `/courses`, all four course detail pages, and `/contact` lack route-specific metadata and inherit the generic root title/description. | Add a unique title and description to each. Use `generateMetadata` for course slugs. Keep the interactive contact form in a client component with a server page or layout supplying metadata. Add page-specific social metadata as a sharing improvement. |
| P0 | `src/app/page.tsx` advertises $50 for two days/week in both the visible FAQ and JSON-LD; `pricing/page.tsx` lists $35. | Confirm the actual offer and use shared pricing data for all visible and structured content. |
| P0 | `contact/page.tsx` displays `+1 (555) 123-4567`. The US page advertises Stripe, but the repository has no payment integration. | Replace the placeholder with a working contact method. Describe how payment actually happens; verify an external Stripe workflow before retaining the claim. |
| P1 | The US page says “1000+” US families; about/home content claims thousands of students and specific qualifications without supporting profiles in the repository. | Verify or revise claims. Add real tutor biographies, qualifications, teaching languages, sample lessons, and permissioned parent feedback. Source code cannot establish whether these claims are true. |
| P1 | No source link points to `/usa/online-quran-classes`; it appears in the sitemap only. | Link to it from the homepage, relevant course sections, and footer with natural wording such as “Online Quran classes in the USA.” Link back to relevant courses and pricing from that page. |
| P1 | Course detail pages contain a short description and four benefits, without detailed curriculum or a sample lesson. | Add prerequisites, age suitability, a teaching sequence, sample lesson, assessment approach, tutor details, and course-specific questions. Expand to answer real enrollment questions, without an arbitrary word-count target. |
| P1 | `public/images/hero-qari.jpg` is 712,892 bytes and is served through a plain `<img>` in `src/app/page.tsx`. | Generate responsive optimized image output, using the installed Next.js image guidance. Supply appropriate dimensions and `sizes`; prioritize the hero only if measurement confirms it is the LCP image. Measure before and after. |
| P2 | Every sitemap entry uses `new Date()` for `lastModified`. | Use actual substantive update dates or omit `lastModified`. Include only canonical URLs intended for indexing. Legal pages may be included, but their sitemap omission is not a major growth blocker. |
| P1 | No analytics instrumentation appears in the source; the form only emails the administrator. | Establish search and conversion measurement, then verify that a successful submission reaches staff. Add validation, HTML escaping, and abuse protection to the lead action to keep acquisition usable. These support conversion and reliability rather than directly boosting rankings. |

Google recommends consistent canonical signals and descriptive, page-specific titles. Canonicals are signals, not guarantees of Google's chosen URL. [Canonical URL guidance](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls), [title guidance](https://developers.google.com/search/docs/appearance/title-link).

Google ignores sitemap `priority` and `changefreq`; improving those values is not a ranking tactic. Accurate `lastmod` is more useful. [Sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).

## 2. Give each search intent a clear destination

Use these as an initial editorial map. Validate US demand and the type of pages ranking for each query before committing to new pages. Avoid making several near-identical pages compete for the same intent.

| Page | Suggested primary intent | Useful content |
| --- | --- | --- |
| `/` | Recite Ayah; online Quran academy | Clear academy introduction, teaching approach, evidence, links to courses and the US page |
| `/usa/online-quran-classes` | Online Quran classes in USA | US scheduling, USD fees, trial process, real US experiences, course comparison |
| `/courses/quran-reading-basics` | Online Noorani Qaida classes | Beginner prerequisites, alphabet-to-reading sequence, pronunciation examples |
| `/courses/quran-with-tajweed` | Online Tajweed classes | Rules covered, sample corrections, prerequisites, how progress is assessed |
| `/courses/quran-memorization` | Online Hifz classes | Memorization and revision routine, realistic workload, teacher feedback |
| `/courses/islamic-studies-for-kids` | Online Islamic studies for kids | Age bands, actual curriculum, parent involvement, sample activity |
| `/pricing` | Online Quran class fees | Explicit USD amounts, sessions/month, duration, cancellation and make-up terms |
| Proposed `/courses/quran-for-kids` | Online Quran classes for kids | A distinct Quran-reading curriculum for children; do not simply duplicate Islamic studies |

If female-tutor or adult-beginner demand merits separate pages, publish them only when the academy actually provides a distinct experience with enough useful information. Otherwise, cover those needs clearly within existing pages.

Suggested US page title: **Online Quran Classes in USA | Free Trial | Recite Ayah**.

Suggested description, after confirming the offer: **One-to-one online Quran lessons for kids and adults in the USA. Explore USD plans, US-friendly schedules, and a free 30-minute trial.**

Titles and descriptions should accurately represent each page. Google may rewrite their search presentation; character-count targets do not guarantee the displayed result.

## 3. Make the US page useful to US families

This is an online academy seeking national US organic visibility. A `/usa/` URL alone does not establish relevance or authority.

- Show actual available after-school, evening, and weekend slots. Use ET, CT, MT, and PT in general copy, and named time zones such as `America/New_York` when collecting bookings so daylight-saving changes are handled correctly. The current copy only mentions EST/CST/PST.
- Add a timezone selector to the trial form and carry the chosen course into the form from course-page CTAs. Explain when staff will respond and what happens during the trial.
- Put verified USD pricing, session length, tutor choice, required software, rescheduling terms, and parent progress reporting together on the page.
- Show real tutor introductions, English-language teaching examples, and consented US parent stories. Explain how parents can attend or supervise a child's trial.
- Preserve a clear distinction between where the academy is based and where its students live. Serving US families does not require claiming a US office.

Keep a stable primary domain. If equivalent regional or language versions are introduced later, evaluate reciprocal `hreflang` annotations for those equivalents; unrelated course pages are not alternate regional versions. The current English site does not need an invented set of regional duplicates. [Google's regional-site guidance](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites).

Do not mass-produce city pages by replacing “New York” with “Chicago” or “Houston.” Create a city page only when a distinct offering, real partnership, or other substantial local information justifies it. Google identifies doorway pages and scaled low-value content as spam practices. [Spam policies](https://developers.google.com/search/docs/essentials/spam-policies).

For an online-only academy, do not pursue Google Maps rankings through an invented location: online-only businesses are ineligible for a Google Business Profile. Reassess only if the business genuinely provides eligible in-person services. [Business Profile eligibility](https://support.google.com/business/answer/13763036?hl=en).

## 4. Build subject expertise and relevant visibility

Suggested first resources, informed by the current courses:

1. A parent's guide to a child's first online Quran lesson, with a real lesson example.
2. Noorani Qaida learning milestones and a printable practice checklist.
3. A beginner Tajweed lesson with teacher-recorded audio and a transcript.
4. A manageable Hifz revision routine around a US school schedule.
5. How to assess a Quran tutor's qualifications and teaching fit.

Have qualified teachers write or review educational material; identify the reviewer and show their credentials. Include original examples and link naturally to the matching course and trial process. This follows Google's emphasis on helpful, original content and demonstrable expertise. [People-first content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content).

For distribution, consider useful workshops or resources developed with US mosques, Islamic schools, Muslim parent communities, and student associations. Earn relevant mentions through real participation. Publish teacher-led videos that link to corresponding lessons. These are proposed opportunities, not verified partnerships or guaranteed ranking gains. Avoid purchased ranking links, bulk directory packages, and fabricated reviews; Google's spam policies address manipulative links. [Link spam guidance](https://developers.google.com/search/docs/essentials/spam-policies#link-spam).

## 5. Use structured data and performance work appropriately

The homepage already has FAQ JSON-LD. **Google stopped showing FAQ rich results starting May 7, 2026.** Keep useful visible FAQs, but do not prioritize more FAQ markup as a Google rich-result tactic. Correct the price mismatch regardless. [Google's May and June 2026 updates](https://developers.google.com/search/updates).

Consider accurate `Organization` data with the real name, canonical URL, logo, and verified contact/profile links. Do not invent addresses, ratings, or accreditation. This helps describe the organization; it is not a ranking guarantee. Add visible breadcrumbs to course pages and evaluate corresponding markup as a secondary improvement. [Organization guidance](https://developers.google.com/search/docs/appearance/structured-data/organization).

Measure the production homepage, US page, one course page, and contact form on mobile. Use PageSpeed Insights and Search Console field data where available. Aim for LCP at or below 2.5 seconds, INP at or below 200 milliseconds, and CLS at or below 0.1 at the 75th percentile. The image size above identifies a candidate improvement, not a measured Core Web Vitals failure. [Web Vitals definitions and thresholds](https://web.dev/articles/vitals).

## 6. Rollout and measurement

| Timing | Deliverable | Evidence of completion |
| --- | --- | --- |
| Days 1-7 | Resolve origin, canonicals, metadata, prices, payment copy, and contact information; add US internal links | Inspect deployed HTML, redirects, and sitemap; verify each indexed route's intended canonical and title |
| Days 8-14 | Expand the US page and top course pages; add verified teacher information; improve trial scheduling | Review all claims with the academy; complete a real device trial-flow check and verify staff receipt |
| Days 15-30 | Establish measurement, optimize the hero image, publish the first two teacher-reviewed resources | Record a baseline, compare mobile performance, and verify successful-submission events |
| Days 31-90 | Publish further useful resources and pursue relevant community relationships | Review US search queries and qualified trials monthly; revise pages based on observed demand |

Set up a Search Console domain property, submit the canonical sitemap, and inspect the homepage, US page, and representative courses. Indexing and sitemap submission do not guarantee rankings.

Track US impressions, clicks, click-through rate, and queries by landing page; separate branded searches from non-branded course searches. In analytics, record successful trial submissions only after the server confirms success. Track trial attendance and eventual enrollment separately so traffic growth can be evaluated against business results. Do not send names, email addresses, phone numbers, or free-text notes to analytics.

Use the first complete month as a baseline. Judge progress by qualified US inquiries and enrollment as well as search visibility. The 90-day plan is an implementation schedule, not a promise of first-page rankings.
