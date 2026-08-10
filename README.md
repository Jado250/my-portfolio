# Jean de Dieu KWIZERA — Portfolio

A production-ready personal portfolio built with Next.js 16 (App Router), TypeScript,
and Tailwind CSS v4. Design direction: a network-topology / systems-engineer identity —
an animated node-and-link canvas in the hero, a terminal-style boot sequence on load,
and circuit-trace section dividers, all tying back to networking and IT.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — scroll reveals, layout transitions, page-load choreography
- **react-hook-form** — contact form validation
- **@emailjs/browser** — contact form delivery (no backend required)
- **lucide-react** — icon set
- **Self-hosted fonts** via `@fontsource` (Space Grotesk, Inter, JetBrains Mono) —
  no runtime dependency on Google Fonts

The hero background is a hand-built canvas animation (not Three.js) — it's lighter,
loads faster, and its node/link visual literally represents the tech-domain "network"
of the person it's about, which felt truer to the brief than a generic 3D particle field.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Contact form (EmailJS / SMTP)

The form works out of the box in **demo mode** — it validates input and simulates a
successful send, but doesn't deliver email until you connect EmailJS or SMTP.

### Option 1: EmailJS

1. Create a free account at https://www.emailjs.com
2. Add an email service and a template with variables: `from_name`, `from_email`,
   `subject`, `message`
3. Copy `.env.example` to `.env.local` and fill in your Service ID, Template ID,
   and Public Key
4. Restart the dev server

### Option 2: SMTP (server-side delivery)

1. Add a valid SMTP service account (Gmail SMTP, SendGrid, Mailgun, etc.)
2. Copy `.env.example` to `.env.local` and fill in:
   - `CONTACT_EMAIL`
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_USER`
   - `SMTP_PASS`
   - `SMTP_SECURE` (`true` for SSL/TLS, `false` for STARTTLS)
3. Restart the dev server

If SMTP is configured, the app sends the contact form email through your SMTP server,
and also sends a confirmation copy back to the submitter.

## Customizing

- **Content** lives in `src/data/` (skills, services, projects, experience) —
  edit these files rather than the components.
- **Colors, type, and tokens** live in `src/app/globals.css` under `:root` / `.light`
  and the `@theme inline` block.
- **CV file**: replace `public/Jean-de-Dieu-KWIZERA-CV.pdf` with your own (keep the
  same filename, or update the `href` in `src/components/Hero.tsx`).
- **Social links**: update the GitHub/LinkedIn URLs in `src/components/Footer.tsx`.
- **Metadata / domain**: update `SITE_URL` in `src/app/layout.tsx`, plus
  `src/app/robots.ts` and `src/app/sitemap.ts`.

## Accessibility & performance notes

- Respects `prefers-reduced-motion` (disables the canvas animation loop, typing
  effect, and counters' easing).
- Custom cursor is disabled automatically on touch devices and hidden for
  keyboard/assistive tech (decorative, `aria-hidden`).
- All interactive elements have visible focus states and proper `aria-*` labeling.
- Fonts are self-hosted and subset-loaded per weight to keep bundle size down.

## Deploying to Vercel

```bash
npm run build   # verify the production build locally
```

Then push to GitHub and import the repo in Vercel, or run `vercel` from this
directory. No environment variables are required to deploy — only to enable
live email delivery (see above).
