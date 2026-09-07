import type { Metadata } from "next";
import SiteShell from "@/components/site-shell";
import SimpleAreaEstimator from "@/components/simple-area-estimator";

export const metadata: Metadata = {
  title: "Planting Cost Estimate",
  description:
    "Estimate the cost of your Wellington garden planting by square metres before requesting a detailed quote from iScape Limited.",
  alternates: { canonical: "/estimators/planting" },
};

export default function PlantingEstimatorPage() {
  return (
    <SiteShell>
      <section className="space-y-6 pb-10">
        <div className="rounded-[32px] border border-slate-200 bg-slate-50 px-8 py-10 shadow-lg">
          <p className="inline-block rounded-full bg-white px-4 py-1 text-sm font-semibold uppercase tracking-[0.28em] text-slate-700">
            Planting estimate
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Estimate your planting project.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            Based on a 300mm garden bed dig out with soil mix, weed mat, mulch,
            garden edging, and four plants per square metre. Enter your planting
            area in square metres for a rough starting estimate.
          </p>
        </div>

        <SimpleAreaEstimator
          lowRate={161}
          highRate={249}
          fieldLabel="Planting area"
          sliderMax={100}
        />
      </section>
    </SiteShell>
  );
}
