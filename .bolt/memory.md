# Project memory

## Product intent & audience

- Website for **InternTra**, a career-services brand offering professional profile optimization for job seekers.
- Core offerings include profile/resume optimization services; service count expanded from 4 to 5 with the addition of **Naukri Profile Optimisation**.
- Audience: job seekers and professionals looking to improve their job-search profiles and visibility.

## Brand personality & voice

- Professional, service-oriented, and career-focused.
- Copy is consistent across pages; services referenced uniformly in navigation, cards, detailed content, forms, and footer.

## Visual design & UX direction

- Homepage hero uses a full-width **cover image as a softened background** with a high-contrast overlay to preserve text readability.
- Background image has a **mobile-specific crop** so branding stays visible on smaller screens.
- Layout is responsive across phone and large-screen breakpoints.
- **Centralized service list** drives all service UI (homepage cards, services page detail, contact form selector, footer links) to avoid duplication.
- Services page includes dedicated visuals/preview images per service.

## Decisions, constraints & rationale

- App source lives inside a **`project/` subdirectory**, not the workspace root — checks must be run against that directory.
- Dependencies must be installed (`npm install` using existing lockfile) before type-check, lint, or build can run.
- Production build, type-check, and lint all pass; **14 dependency audit warnings** exist but do not block the build.
- New service was integrated site-wide through the centralized service system rather than per-page manual edits.

## Open questions & assumptions

- Full roster of all 5 services not yet confirmed beyond Naukri Profile Optimisation.
- Tech stack details (framework, styling system) inferred but not explicitly stated — likely a Vite/React project given build/lint workflow.
- Supplied image is treated as a brand cover/banner; final asset quality/resolution improvements may need source file verification.