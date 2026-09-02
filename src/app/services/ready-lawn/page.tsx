import type { Metadata } from "next";
import Image from "next/image";
import SiteShell from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Ready Lawn | iScape Limited Wellington landscaping",
  description:
    "Ready lawn installation in Wellington with engineered terraces, drainage, and Council-ready landscaping details.",
};

export default function ReadyLawnPage() {
  return (
    <SiteShell>
      <section className="space-y-6 pb-10">
        <div className="rounded-[32px] border border-slate-200 bg-slate-50 px-8 py-10 shadow-lg">
          <p className="inline-block rounded-full bg-white px-4 py-1 text-sm font-semibold uppercase tracking-[0.28em] text-slate-700">
            Ready lawn
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Wellington ready lawn installation for terraces and functional outdoor living.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            We install ready lawn with engineered retaining edges, quality soil preparation and integrated drainage to ensure a healthy, even finish in Wellington's variable climate.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">Project overview</h2>
            <p className="mt-4 text-slate-700 leading-8">
              Ready lawn works require precise grading, weed-free rootzone, and coordination with retaining structures. We build lawns that connect seamlessly to paths, planting areas and outdoor entertaining spaces.
            </p>
          </article>

          <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm">
            <Image
              src="/images/services/ready-lawn-turf-roll-installation-wellington.jpg"
              alt="Ready lawn turf roll on prepared ground beside freshly laid lawn"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <section className="grid gap-10 lg:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-950">Wellington council regulations</h3>
            <p className="mt-4 text-slate-700 leading-8">
              Lawn areas on sloping sites often form part of landscape consent applications. We document surface water control, retaining edge detail and erosion mitigation to satisfy Wellington City Council requirements.
            </p>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-950">Best practices</h3>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li>Prepare a free-draining rootzone with compaction control.</li>
              <li>Install edging and retaining edges before turf delivery.</li>
              <li>Match turf species to local shade, wind and maintenance needs.</li>
            </ul>
          </article>
        </section>

        <section className="grid gap-10 lg:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-950">Construction methods</h3>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li>Excavate and level the prepared surface using falls to drainage outlets.</li>
              <li>Lay a compacted base of free-draining sand or soil blend.</li>
              <li>Roll and finish the turf to avoid gaps and ensure good contact.</li>
            </ul>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-950">Maintenance guidance</h3>
            <p className="mt-4 text-slate-700 leading-8">
              New turf needs regular watering and careful first cuts. We provide handover advice so your ready lawn establishes strongly and remains resilient to Wellington’s wind and rain cycles.
            </p>
          </article>
        </section>

        <section className="grid gap-10 lg:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">Lawn care and maintenance</h2>
            <p className="mt-4 text-slate-700 leading-8">
              Keep your ready lawn healthy with regular watering, mowing and fertiliser. In Wellington’s climate, water deeply but infrequently, mow to 50-60mm, and apply a slow-release feed in spring and autumn.
            </p>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li>Water new turf daily for the first 2–3 weeks, then adjust according to rainfall and soil moisture.</li>
              <li>Cut no more than one-third of the grass height at each mow and sharpen blades regularly.</li>
              <li>Treat weeds early and patch bare areas with a suitable turf mix to keep the lawn dense and even.</li>
            </ul>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">Wellington regulations and performance</h2>
            <p className="mt-4 text-slate-700 leading-8">
              Lawn installations on sloping sections often form part of landscape and earthworks consent applications. We ensure your turf work supports surface water control and erosion mitigation for local council expectations.
            </p>
            <p className="mt-4 text-slate-700 leading-8">
              Good performance depends on drainage, soil structure and grading—especially in Wellington’s wind, salt spray and heavy rainfall environment.
            </p>
          </article>
        </section>
      </section>
    </SiteShell>
  );
}