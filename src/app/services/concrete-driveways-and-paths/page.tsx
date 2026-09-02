import type { Metadata } from "next";
import Image from "next/image";
import SiteShell from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Concrete Driveways & Paths in Wellington",
  description:
    "Concrete driveway and path installation in Wellington with compacted crushed-rock bases, control joints, consistent falls to stormwater and broom or exposed-aggregate finishes.",
  alternates: { canonical: "/services/concrete-driveways-and-paths" },
};

export default function ConcreteDrivewaysAndPathsPage() {
  return (
    <SiteShell>
      <section className="space-y-6 pb-10">
        <div className="rounded-[32px] border border-slate-200 bg-slate-50 px-8 py-10 shadow-lg">
          <p className="inline-block rounded-full bg-white px-4 py-1 text-sm font-semibold uppercase tracking-[0.28em] text-slate-700">
            Concrete driveways & paths
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Wellington concrete driveways and paths built for strength, drainage and long-term use.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            We install concrete driveways and paths with engineered bases, controlled falls and durable finishes that perform well in Wellington’s changing weather conditions.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">Design and planning</h2>
            <p className="mt-4 text-slate-700 leading-8">
              Driveways and paths require accurate grading, good sub-base construction, and consideration for surface water flow. We design the layout to match access, vehicle loads and Wellington council requirements.
            </p>
          </article>

          <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm">
            <Image
              src="/images/services/concrete-driveways-and-paths.jpg"
              alt="Concrete driveway and path installation in Wellington"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <section className="grid gap-10 lg:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-950">Best practices</h3>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li>Use a compacted crushed rock base with good drainage properties.</li>
              <li>Install control joints to manage cracking and thermal movement.</li>
              <li>Provide a consistent fall to stormwater outlets and landscape drainage.</li>
            </ul>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-950">Construction methods</h3>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li>Excavate to correct depth and install a compacted base with geotextile separation.</li>
              <li>Set edge forms, pour concrete and finish to match the desired texture or pattern.</li>
              <li>Seal joints, apply curing, and finish with broom or exposed aggregate surfaces.</li>
            </ul>
          </article>
        </section>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Durability and maintenance</h2>
          <p className="mt-4 text-slate-700 leading-8">
            Concrete driveways and paths are built to last when the base is engineered correctly. We advise on sealing, joint maintenance, and how to keep surfaces looking clean and stable.
          </p>
        </div>

        <section className="grid gap-10 lg:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">Care and cleaning</h2>
            <p className="mt-4 text-slate-700 leading-8">
              Keep concrete clean by washing away oil, debris and organic matter. Repair joints and seal surfaces as needed to reduce water penetration and freeze-thaw damage.</p>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li>Clear leaves and soil from drains to prevent standing water on the slab.</li>
              <li>Inspect control joints annually and reseal if they begin to fail.</li>
              <li>Use gentle cleaning methods and avoid harsh chemicals that weaken the finish.</li>
            </ul>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">Construction and council requirements</h2>
            <p className="mt-4 text-slate-700 leading-8">
              Driveways and paths must manage runoff safely, especially in Wellington’s sloping terrain. We design the sub-base, falls and outlet details to meet council stormwater and site stability requirements.</p>
            <p className="mt-4 text-slate-700 leading-8">
              Proper base compaction, geotextile separation and edge detail are essential for a long-lasting finish.</p>
          </article>
        </section>
      </section>
    </SiteShell>
  );
}
