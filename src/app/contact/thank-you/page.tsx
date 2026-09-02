import Link from "next/link";
import SiteShell from "@/components/site-shell";

export default function ContactThankYou() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-4xl rounded-[40px] border border-slate-200 bg-slate-50 p-12 shadow-lg shadow-slate-200">
        <div className="space-y-6 text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-slate-700">Thank you</p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Your enquiry is on its way.
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-700">
            We have received your message and will contact you shortly with a tailored quote for your retaining wall or landscape project.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="inline-flex rounded-full bg-slate-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Back to home
            </Link>
            <Link
              href="/services"
              className="inline-flex rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:border-slate-600"
            >
              Explore our services
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
