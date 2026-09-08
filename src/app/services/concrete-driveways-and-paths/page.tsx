import type { Metadata } from "next";
import Image from "next/image";
import SiteShell from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Concrete Driveways & Paths | Wellington & Porirua",
  description:
    "Concrete driveway and path installation across Wellington, Porirua and the Hutt Valley, with compacted GAP bases, steel mesh, control joints, proper falls and broom or exposed-aggregate finishes.",
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
            We install concrete driveways and paths with engineered bases, controlled falls and durable finishes, for homes across Wellington, Porirua and the Hutt Valley.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Design and planning</h2>
          <p className="mt-4 text-slate-700 leading-8">
            Driveways and paths require accurate grading, good sub-base construction, and consideration for surface water flow. We design the layout to match access, vehicle loads and Wellington council requirements.
          </p>
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
              <li>Excavate to the correct depth and lay a compacted GAP 40 or GAP 65 aggregate base, roughly 100–150mm deep.</li>
              <li>Lay SE62 grade 500E steel mesh over the base for crack control before pouring.</li>
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

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl font-semibold text-slate-950">Broom finish</h2>
              <p className="mt-4 text-slate-700 leading-8">
                Best suited to driveways, footpaths, and outdoor areas. It&apos;s a simple, slip resistant, and cost effective option. The textured surface is created by dragging a stiff bristled broom across the concrete before it sets, leaving a fine, linear texture that grips well underfoot even when wet, which is why it&apos;s such a popular choice across New Zealand for everyday driveways and footpaths.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <Image
                src="/images/services/broom-finish-concrete-driveway-wellington.jpg"
                alt="Broom-finished concrete slab showing the fine linear brushed texture and a control joint, in Wellington"
                width={1200}
                height={900}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl font-semibold text-slate-950">Exposed aggregate</h2>
              <p className="mt-4 text-slate-700 leading-8">
                Best suited to driveways, patios, entranceways, and pool surrounds. It&apos;s decorative, textured, and highly durable. It&apos;s created by removing the top layer of cement paste to reveal the natural stone and pebbles within the concrete mix, giving a unique texture and visual interest that suits high traffic areas and modern landscaping. Custom aggregates and oxide colours can also be used to enhance the look.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <Image
                src="/images/services/exposed-aggregate-concrete-driveway-wellington.jpg"
                alt="Exposed aggregate concrete surface with natural stone and pebbles revealed, on a Wellington driveway"
                width={1200}
                height={900}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
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
              Proper base compaction, steel mesh reinforcement and edge detail are essential for a long-lasting finish.</p>
          </article>
        </section>
      </section>
    </SiteShell>
  );
}
