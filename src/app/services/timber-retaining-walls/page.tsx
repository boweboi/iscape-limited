import type { Metadata } from "next";
import Image from "next/image";
import SiteShell from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Timber Retaining Walls | iScape Limited Wellington",
  description:
    "Timber retaining wall design in Wellington with NZS 3604 standards, soil retention, drainage and structural best practice.",
};

export default function TimberRetainingWallsPage() {
  return (
    <SiteShell>
      <section className="space-y-6 pb-10">
        <div className="rounded-[32px] border border-slate-200 bg-slate-50 px-8 py-10 shadow-lg">
          <p className="inline-block rounded-full bg-white px-4 py-1 text-sm font-semibold uppercase tracking-[0.28em] text-slate-700">
            Timber retaining walls
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Timber retaining walls engineered for Wellington slopes and NZS 3604 compliance.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            We design timber retaining systems with treated timber, structural foundations, and drainage so your wall performs reliably in local soil and seismic conditions.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">Construction methods</h2>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li>Excavate to the correct depth and compact the base before post installation.</li>
              <li>Set posts in concrete or gravel piers with accurate alignment.</li>
              <li>Backfill in layers and install drainage pipes to reduce hydrostatic pressure.</li>
            </ul>
          </article>

          <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm">
            <Image
              src="/images/services/timber-retaining-wall-construction-drainage-wellington.jpg"
              alt="Timber retaining wall project in Wellington"
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
              <li>Use treated posts and durable hardwood or engineered timber boards.</li>
              <li>Include gravel backfill and geotextile wrap to manage water pressure.</li>
              <li>Design the wall to accommodate soil movement and seasonal moisture changes.</li>
            </ul>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-950">NZS 3604 standards</h3>
            <p className="mt-4 text-slate-700 leading-8">
              Timber walls rely on NZS 3604 principles for member sizing, footing depth, and lateral load resistance. We apply these standards alongside engineering checks for higher walls and steeper sites.
            </p>
          </article>
        </section>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Design considerations</h2>
          <p className="mt-4 text-slate-700 leading-8">
            We assess the slope, soil type and load across the retained area to choose the right timber wall layout. The wall is integrated with landscaping, planting and adjacent hardscape for a cohesive finish.
          </p>
        </div>

        <section className="grid gap-10 lg:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">Maintenance and long-term care</h2>
            <p className="mt-4 text-slate-700 leading-8">
              Timber retaining walls need regular inspection to catch water damage, timber decay and bulging before they become serious. Keep drainage outlets clear and repair split boards promptly.
            </p>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li>Check the gravel backfill and drainage pipe every season, especially after heavy rain.</li>
              <li>Trim plants away from the wall face to reduce moisture retention and pest access.</li>
              <li>Refresh timber preservative coatings as needed to extend the wall’s service life.</li>
            </ul>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">Wellington council and NZS 3604 detail</h2>
            <p className="mt-4 text-slate-700 leading-8">
              Walls over 1.5 metres typically require council approval and a qualified engineer’s design. We build to NZS 3604 where applicable, including member sizing, footing depth, bracing and ground contact protection.
            </p>
            <p className="mt-4 text-slate-700 leading-8">
              Our documented detail includes drainage, geotextile wrap, compacted backfill and watertable management to meet local stability and consent standards.
            </p>
          </article>
        </section>
      </section>
    </SiteShell>
  );
}
