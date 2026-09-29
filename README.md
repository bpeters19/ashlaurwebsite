# Ashlaur Construction

Marketing site for Ashlaur Construction, built with Next.js, TypeScript, and Tailwind CSS.

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Environment Variables

Create a `.env.local` file for the contact and careers forms.

```env
NEXT_PUBLIC_SITE_URL=https://ashlaurconstruction.com
COMPANY_EMAIL=renae@ashlaurconstruction.com
SMTP_HOST=smtp.your-provider.com
SMTP_PORT=587
SMTP_USER=your_smtp_username
SMTP_PASS=your_smtp_password
SMTP_FROM="Ashlaur Careers <no-reply@yourdomain.com>"
TURNSTILE_SECRET_KEY=your_turnstile_secret_key
```

Notes:

- `COMPANY_EMAIL` is the inbox used for form submissions.
- `SMTP_*` values come from your mail provider.
- `TURNSTILE_SECRET_KEY` enables server-side bot protection for the contact form.

## Project Notes

- Routes, metadata, and sitemap/robots handling live in the App Router.
- The site uses shared editorial styling in `app/globals.css` and `tailwind.config.ts`.
- Placeholder content is controlled by `NEXT_PUBLIC_SHOW_PLACEHOLDER_CONTENT`.
