import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Project Cost Estimate Tool",
  description:
    "Get a rough cost estimate for your Wellington ready lawn, retaining wall, fencing, hardwood or softwood decking, or concrete work project before you request a full quote.",
  alternates: { canonical: "/estimators" },
};

const estimators = [
  {
    href: "/estimators/ready-lawn",
    title: "Ready Lawn",
    inputs: "Priced by square metres",
  },
  {
    href: "/estimators/retaining-walls",
    title: "Retaining Walls",
    inputs: "Priced by length and height",
  },
  {
    href: "/estimators/fencing",
    title: "Fencing",
    inputs: "Priced by linear metres",
  },
  {
    href: "/estimators/hardwood-decking",
    title: "Hardwood Decking",
    inputs: "Priced by square metres",
  },
  {
    href: "/estimators/concrete-work",
    title: "Concrete Work",
    inputs: "Priced by square metres",
  },
  {
    href: "/estimators/softwood-decking",
    title: "Softwood Decking",
    inputs: "Priced by square metres",
  },
];

export default function EstimatorsPage() {
  return (
    <SiteShell>
      <section className="space-y-4 pb-10 text-center">
        <p className="inline-block rounded-full bg-slate-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.28em] text-slate-700">
          Our Estimate Tool
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          Get a rough estimate for your project.
        </h1>
        <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-700">
          Pick the type of work you need and enter your measurements for a
          quick, no-obligation starting point.
        </p>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {estimators.map((estimator) => (
          <Link
            key={estimator.href}
            href={estimator.href}
            className="rounded-3xl border border-slate-200 bg-white p-8 text-center transition duration-300 hover:-translate-y-1 hover:border-slate-300"
          >
            <h2 className="text-xl font-semibold text-slate-950">
              {estimator.title}
            </h2>
            <p className="mt-3 text-sm text-slate-500">{estimator.inputs}</p>
          </Link>
        ))}
      </section>
    </SiteShell>
  );
}
