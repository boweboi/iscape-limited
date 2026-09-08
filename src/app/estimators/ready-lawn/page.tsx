import type { Metadata } from "next";
import SiteShell from "@/components/site-shell";
import SimpleAreaEstimator from "@/components/simple-area-estimator";

export const metadata: Metadata = {
  title: "Wellington Ready Lawn Cost Estimate",
  description:
    "Estimate the cost of your Wellington ready lawn project by square metres before requesting a detailed quote from iScape Limited.",
  alternates: { canonical: "/estimators/ready-lawn" },
};

export default function ReadyLawnEstimatorPage() {
  return (
    <SiteShell>
      <section className="space-y-6 pb-10">
        <div className="rounded-[32px] border border-slate-200 bg-slate-50 px-8 py-10 shadow-lg">
          <p className="inline-block rounded-full bg-white px-4 py-1 text-sm font-semibold uppercase tracking-[0.28em] text-slate-700">
            Ready lawn estimate
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Estimate your ready lawn project.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            Includes prep, dig out, replace topsoil, and lay new ready lawn.
            Enter the area of your lawn in square metres for a rough
            starting estimate.
          </p>
        </div>

        <SimpleAreaEstimator
          lowRate={75}
          highRate={105}
          fieldLabel="Lawn area"
          sliderMax={400}
        />
      </section>
    </SiteShell>
  );
}
