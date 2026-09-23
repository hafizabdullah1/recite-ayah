# Project Scope: Recite Ayah Website

## 1. Project Overview
The objective is to build a modern, lead-generation, and educational marketing platform for an online Quran academy (tentatively named "Recite Ayah"). The primary goal is to facilitate course discovery, build trust through social proof, and capture student leads for one-on-one live classes via a frictionless "Free Trial" booking funnel.

### 1.1 Design Philosophy & Aesthetics
Based on the provided reference, the website must diverge from traditional, cluttered designs and adopt a **minimalistic, premium, and soothing aesthetic**.
*   **Vibe**: Calm, trustworthy, soft, and easy on the eyes.
*   **Color Palette**: Earthy and warm tones. 
    *   *Backgrounds*: Soft cream / off-white (`#F9F6F0` or similar).
    *   *Accents*: Deep forest green for primary buttons/elements, soft rust/terracotta for highlights.
*   **Typography**: 
    *   *Headings*: Elegant, high-contrast Serif fonts (e.g., Playfair Display, Lora, or a modern serif).
    *   *Body*: Clean, readable Sans-serif (e.g., Inter, Figtree).
*   **UI Elements**: Soft rounded corners, subtle shadows, ample whitespace (breathing room), and gentle micro-animations (fade-ins, smooth scrolling).

---

## 2. Sitemap & Page Structure

### Main Pages
1.  **Home**: Hero section with clear CTA, introductory message, learning benefits, course highlights, trust metrics (stats), step-by-step enrollment guide, testimonials, and a lead capture form.
2.  **About Us**: Academy's mission, background, teaching approach, and tutor qualifications (emphasizing verified, certified tutors and female teachers).
3.  **Courses (Catalog)**: Overview of all programs.
    *   *Individual Course Pages*: Quran Reading Basics, Quran for Kids, Quran Memorization, Quran Tafsir, Islamic Studies. (Includes overview, intended students, learning outcomes, and a trial button).
4.  **Pricing / Fee Rates**: Clear plan comparisons (Days per week vs. Duration), multi-currency display (USD, GBP), and enrollment links directing to the trial form.
5.  **Locations**: SEO-targeted pages tailored for specific markets (USA, UK, Canada, UAE) with localized info and time zones.
6.  **Contact / Free Trial**: Dedicated page for the trial request form, phone numbers (US/UK), email, WhatsApp links, and general inquiries.
7.  **Legal**: Privacy Policy, Terms & Conditions, Refund Policy.

---

## 3. Core Functional Requirements & User Flows

### 3.1 User Flows
*   **Public Visitor (Parent/Student)**: Lands on Home/Course page → Explores curriculum and pricing → Clicks "Book Free Trial" → Fills out the form → Receives automated confirmation email/SMS.
*   **Admin/Staff**: Receives lead notification → Contacts student via WhatsApp/Email to schedule → Arranges Zoom/Teams class.

### 3.2 Lead Generation & Booking Engine
*   **Free Trial Form**: Fields include Name, Email, Phone Number, Course Selection (Dropdown), Preferred Timezone, and Country.
*   **Validation**: Client-side and server-side validation to ensure accurate data (especially phone numbers).
*   **Automated Routing**: Upon submission, trigger a confirmation email to the user and a notification to the admin dashboard/CRM.

### 3.3 Static Data Architecture
*   **Static Courses**: Courses, pricing, and testimonials will be hardcoded using static data arrays within the Next.js application for maximum speed and simplicity.

---

## 4. Technical Architecture (Proposed Tech Stack)

To achieve top-tier performance, SEO, and the premium feel requested, the following modern stack is recommended:

*   **Frontend**: 
    *   **Next.js (React)**: For Server-Side Rendering (SSR) and Static Site Generation (SSG), ensuring lightning-fast load times and excellent SEO.
    *   **Styling**: Tailwind CSS, strictly adhering to the bespoke design system.
    *   **Animations**: Framer Motion for smooth, premium micro-interactions.
*   **Integrations**:
    *   **Forms & Lead Capture**: React Hook Form + Zod (Validation).
    *   **Email Automation**: Resend for transactional emails (Trial confirmations).
    *   **Notifications**: WhatsApp Business API for instant staff alerts and student follow-ups.
    *   **Analytics**: Google Analytics 4 & Facebook Pixel for tracking conversions.

---

## 5. Development Roadmap & Phases

The project will be executed in sequential phases to ensure quality and alignment with the vision.

### Phase 1: UI/UX Design & Prototyping (Weeks 1-2)
*   Finalize brand colors, typography, and visual assets.
*   Develop high-fidelity wireframes and Figma designs for the Home, Course, and Contact pages based on the minimalist, soft aesthetic.
*   *Milestone: Client approval of the visual design.*

### Phase 2: Frontend Development & Core Architecture (Weeks 3-4)
*   Setup Next.js project and global design tokens (CSS variables for the soft cream/green theme).
*   Develop static pages: Home, About, Legal.
*   Build reusable UI components (Buttons, Cards, Forms, Testimonial sliders).
*   Implement responsive design (Mobile, Tablet, Desktop) and micro-animations.

### Phase 3: Static Content & US-Targeted Pages (Weeks 5-6)
*   Model static data structures (`data/courses.ts`, `data/testimonials.ts`) based on the reference website content.
*   Develop the static Course catalog and individual Course detail pages.
*   Develop dedicated US-targeted landing page(s) (e.g., `/usa/online-quran-classes`) with localized copy, US phone numbers, and timezones to dominate local SEO.

### Phase 4: Forms, Integrations & Backend Logic (Week 7)
*   Build and wire up the "Free Trial" and "Contact" forms.
*   Implement form validation and security (anti-spam/reCAPTCHA).
*   Set up third-party integrations (Email triggers via Resend, CRM/Webhook routing for leads).

### Phase 5: QA, SEO Optimization & Launch (Week 8)
*   **Testing**: Cross-browser testing, mobile responsiveness checks, and form submission tests.
*   **SEO**: Implement meta tags, Open Graph images, semantic HTML, and generate a dynamic sitemap.
*   **Performance**: Audit Web Vitals (Lighthouse) to ensure fast load times and image optimization.
*   **Deployment**: Deploy the frontend on Vercel and go live.

---

## 6. Future Enhancements (Post-Launch)
*   **Student Portal**: A logged-in dashboard for students to view schedules, access Zoom links, and download learning materials.
*   **Automated Scheduling**: Integration with Calendly or a custom booking system to allow users to pick a time slot directly on the site.
*   **Payment Gateway**: Stripe integration for automated recurring monthly subscriptions after the trial period.
