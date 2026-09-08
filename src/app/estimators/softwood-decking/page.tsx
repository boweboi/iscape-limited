import type { Metadata } from "next";
import SiteShell from "@/components/site-shell";
import SimpleAreaEstimator from "@/components/simple-area-estimator";

export const metadata: Metadata = {
  title: "Wellington Softwood Decking Cost Estimate",
  description:
    "Estimate the cost of your Wellington softwood decking project by square metres before requesting a detailed quote from iScape Limited.",
  alternates: { canonical: "/estimators/softwood-decking" },
};

export default function SoftwoodDeckingEstimatorPage() {
  return (
    <SiteShell>
      <section className="space-y-6 pb-10">
        <div className="rounded-[32px] border border-slate-200 bg-slate-50 px-8 py-10 shadow-lg">
          <p className="inline-block rounded-full bg-white px-4 py-1 text-sm font-semibold uppercase tracking-[0.28em] text-slate-700">
            Softwood decking estimate
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Estimate your softwood decking project.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            Enter the area of your deck in square metres for a rough
            starting estimate.
          </p>
        </div>

        <SimpleAreaEstimator
          lowRate={382}
          highRate={446}
          fieldLabel="Deck area"
          sliderMax={120}
        />
      </section>
    </SiteShell>
  );
}
