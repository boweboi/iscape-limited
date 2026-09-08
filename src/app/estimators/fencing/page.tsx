import type { Metadata } from "next";
import SiteShell from "@/components/site-shell";
import FencingEstimator from "@/components/fencing-estimator";

export const metadata: Metadata = {
  title: "Wellington Fencing Cost Estimate",
  description:
    "Estimate the cost of your Wellington fencing project by linear metres before requesting a detailed quote from iScape Limited.",
  alternates: { canonical: "/estimators/fencing" },
};

export default function FencingEstimatorPage() {
  return (
    <SiteShell>
      <section className="space-y-6 pb-10">
        <div className="rounded-[32px] border border-slate-200 bg-slate-50 px-8 py-10 shadow-lg">
          <p className="inline-block rounded-full bg-white px-4 py-1 text-sm font-semibold uppercase tracking-[0.28em] text-slate-700">
            Fencing estimate
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Estimate your fencing project.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            Enter the linear metres of fencing required and select your
            fence height for a rough starting estimate.
          </p>
        </div>

        <FencingEstimator />
      </section>
    </SiteShell>
  );
}
