import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Services | iScape Limited - Wellington retaining walls & ready lawn",
  description:
    "Explore iScape Limited's retaining wall and ready lawn services in Wellington, including Wellington Council compliance, NZS 3604 timber wall guidance, drainage design, and earthquake resilience.",
};

const services = [
  {
    href: "/services/timber-retaining-walls",
    title: "Retaining Walls",
  },
  {
    href: "/services/residential-fencing",
    title: "Fencing",
  },
  {
    href: "/services/decks",
    title: "Decking",
  },
  {
    href: "/services/ready-lawn",
    title: "Ready Lawn",
  },
  {
    href: "/services/planting",
    title: "Planting",
  },
  {
    href: "/services/concrete-driveways-and-paths",
    title: "Concrete Works",
  },
];

export default function Services() {
  return (
    <SiteShell>
      <section className="space-y-4 pb-10 text-center">
        <p className="inline-block rounded-full bg-slate-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.28em] text-slate-700">
          What We Do
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          Our services.
        </h1>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <Link
            key={service.href}
            href={service.href}
            className="group rounded-3xl border border-slate-200 bg-white p-4 transition duration-300 hover:-translate-y-1 hover:border-slate-300"
          >
            <div className="flex h-44 w-full items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-sm text-slate-400">
              Photo coming soon
            </div>
            <div className="pt-6 pb-2 text-center">
              <h2 className="text-xl font-semibold text-slate-950">
                {service.title}
              </h2>
            </div>
          </Link>
        ))}
      </section>
    </SiteShell>
  );
}
