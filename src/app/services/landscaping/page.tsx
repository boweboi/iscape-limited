import type { Metadata } from "next";
import Image from "next/image";
import SiteShell from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Landscaping in Wellington",
  description:
    "Full landscaping for Wellington homes: earthworks and grading, drainage, retaining, planting and outdoor living spaces built for the local climate and seismic conditions.",
  alternates: { canonical: "/services/landscaping" },
};

export default function LandscapingPage() {
  return (
    <SiteShell>
      <section className="space-y-6 pb-10">
        <div className="rounded-[32px] border border-slate-200 bg-slate-50 px-8 py-10 shadow-lg">
          <p className="inline-block rounded-full bg-white px-4 py-1 text-sm font-semibold uppercase tracking-[0.28em] text-slate-700">
            Landscaping
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Wellington landscaping designed for performance, durability and beautiful outdoor living.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            We deliver landscaping projects that combine earthworks, drainage, planting and hardscape to suit Wellington’s terrain and lifestyle needs.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">Earthworks and grading</h2>
            <p className="mt-4 text-slate-700 leading-8">
              Proper earthworks and grading are vital in Wellington to control runoff and avoid surface water damage. We shape the site with stable grades and engineered fill.
            </p>
          </article>

          <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm">
            <Image
              src="/images/services/landscaping.jpg"
              alt="Landscaping project in Wellington with earthworks, grading and planting"
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
              <li>Stabilise slopes with retaining structures, terraces or planted batters.</li>
              <li>Match plant choices to exposure, moisture and Wellington coastal conditions.</li>
              <li>Plan for access, maintenance and long-term resilience from the start.</li>
            </ul>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-950">Construction methods</h3>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li>Use compacted engineered base layers and geotextile membranes where needed.</li>
              <li>Install drainage before final planting and surfacing work.</li>
              <li>Coordinate landscape construction with council consent and NZS 3604 guidelines for retaining and structure work.</li>
            </ul>
          </article>
        </section>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Earthquake resilience</h2>
          <p className="mt-4 text-slate-700 leading-8">
            Wellington landscaping needs to resist shifting soils and heavy rain. We use drainage, reinforcement and retaining details designed to reduce movement after tremors and extreme weather.
          </p>
        </div>

        <section className="grid gap-10 lg:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">Maintenance and care</h2>
            <p className="mt-4 text-slate-700 leading-8">
              Regular maintenance keeps landscape performance strong. Check drainage outlets, refresh mulch, prune plants and repair any erosion signs before they undermine your yard.
            </p>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li>Clear debris from swales, liners and stormwater outlets at least twice a year.</li>
              <li>Inspect retaining walls and terraces for settlement, cracks or bulging.</li>
              <li>Top up mulch and check planting health after wet winter months.</li>
            </ul>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">Council and NZS 3604 guidance</h2>
            <p className="mt-4 text-slate-700 leading-8">
              Landscape works with earthworks, retaining walls or built structures often need consent from Wellington council. We follow NZS 3604 for timber-supported elements and provide engineering details where required.</p>
            <p className="mt-4 text-slate-700 leading-8">
              That means planned drainage, geotechnical awareness and structural design based on local site classification and slope stability.</p>
          </article>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Homeowner checklist</h2>
          <ul className="mt-6 space-y-3 text-slate-700">
            <li>Inspect drains and surface water flow paths after heavy rain.</li>
            <li>Refresh mulch and planting to reduce erosion on sloping sections.</li>
            <li>Check retaining walls and terraces for settlement or cracks each season.</li>
          </ul>
        </section>
      </section>
    </SiteShell>
  );
}