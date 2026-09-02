# Iscape Limited — Project Documentation

## Overview

A marketing website for **Iscape Limited**, a landscaping company based in
Wellington, New Zealand. The site introduces the business, showcases past
work, and gives potential customers an easy way to get in touch for a quote.

## Pages

| Page | Purpose |
|---|---|
| **Home** | Hero introduction, quick overview of services, call-to-action to contact or view portfolio. |
| **Services** | What Iscape Limited offers (e.g. garden design, planting, retaining walls, lawns, maintenance — confirm exact list with the client). |
| **Portfolio** | Gallery of completed landscaping projects with photos, pulling from `assets/`. |
| **About** | Company story, values, and the people behind Iscape Limited. |
| **Contact** | Contact details plus a button that opens a **form modal** (name, email, phone, message) rather than navigating to a separate page. |

## Tech Stack

- **Next.js + React** — component-based, server-rendered for good SEO,
  straightforward deploy to Vercel.
- **Tailwind CSS** — used for modern layout, hover effects, and form styling.
- Contact form submission handling — handled by a Next.js API route at `/api/contact`.
  This can send email via SMTP if environment variables are configured.

## Environment variables

Create a `.env.local` file with the following values before running locally:

```env
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-smtp-user
SMTP_PASS=your-smtp-password
CONTACT_RECIPIENT_EMAIL=hello@iscape.co.nz
```

If SMTP is not configured, the contact API still accepts submissions but will
return a message noting that email delivery is not configured.

## Folder Structure

```
iscape-limited/
├── README.md          — this file
├── assets/            — source images and photos (logo, hero shots,
│                        portfolio photos) before they're optimized and
│                        moved into the Next.js app's public/ folder
└── (site code added once the Next.js project is scaffolded)
```

## Build Workflow

See the step-by-step plan discussed with Claude before implementation
begins. Each step is done one at a time, checked before moving to the next.
