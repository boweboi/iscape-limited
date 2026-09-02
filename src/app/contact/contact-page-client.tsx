"use client";

import SiteShell from "@/components/site-shell";
import ContactForm from "@/components/contact-form";

export default function ContactPageClient() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-2xl space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
        <h1 className="text-center text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Tell us about your project and we&apos;ll be in contact with you as
          soon as possible.
        </h1>
        <ContactForm />
      </section>
    </SiteShell>
  );
}
