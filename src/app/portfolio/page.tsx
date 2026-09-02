import type { Metadata } from "next";
import SiteShell from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Portfolio | iScape Limited - Wellington retaining wall projects",
  description:
    "Browse Wellington retaining wall and ready lawn projects from iScape Limited, showcasing engineered landscaping and site resilience.",
};

const categories = [
  { title: "Retaining Walls" },
  { title: "Fencing" },
  { title: "Decking" },
  { title: "Ready Lawn" },
  { title: "Planting" },
  { title: "Concrete Works" },
];

export default function Portfolio() {
  return (
    <SiteShell>
      <section className="space-y-4 pb-10 text-center">
        <p className="inline-block rounded-full bg-slate-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.28em] text-slate-700">
          Portfolio
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          Our work.
        </h1>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {categories.map((category) => (
          <div
            key={category.title}
            className="overflow-hidden rounded-3xl border border-slate-200 bg-white"
          >
            <div className="flex h-72 w-full items-center justify-center border-b border-slate-200 bg-slate-50 text-sm text-slate-400">
              Photo coming soon
            </div>
            <div className="p-6 text-center">
              <h2 className="text-xl font-semibold text-slate-950">
                {category.title}
              </h2>
            </div>
          </div>
        ))}
      </section>
    </SiteShell>
  );
}
