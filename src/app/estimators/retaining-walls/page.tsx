import type { Metadata } from "next";
import SiteShell from "@/components/site-shell";
import RetainingWallEstimator from "@/components/retaining-wall-estimator";

export const metadata: Metadata = {
  title: "Retaining Wall Estimate | iScape Limited Wellington landscaping",
  description:
    "Estimate the cost of your Wellington retaining wall project by length and height.",
};

export default function RetainingWallsEstimatorPage() {
  return (
    <SiteShell>
      <section className="space-y-6 pb-10">
        <div className="rounded-[32px] border border-slate-200 bg-slate-50 px-8 py-10 shadow-lg">
          <p className="inline-block rounded-full bg-white px-4 py-1 text-sm font-semibold uppercase tracking-[0.28em] text-slate-700">
            Retaining wall estimate
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Estimate your retaining wall project.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            Enter the length and height of your wall for a rough starting
            estimate. Walls over 1.5m high require council consent and
            engineer-dependent pricing.
          </p>
        </div>

        <RetainingWallEstimator />
      </section>
    </SiteShell>
  );
}
