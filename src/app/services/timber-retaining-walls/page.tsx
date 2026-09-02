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
            <h2 className="text-2xl font-semibold text-slate-950">Construction method</h2>
            <p className="mt-4 text-slate-700 leading-8">
              Construction begins with setting out and drilling post holes at regular centres along the wall line, each hole deep enough to bury the base of the post securely below ground, generally at least one third of the wall’s exposed height, more on steeper or looser ground. Posts are typically treated timber, sized according to the wall height and the loads behind it, and are concreted into their holes to lock them in place.
            </p>
            <p className="mt-4 text-slate-700 leading-8">
              Once the posts are set and the concrete has cured, a geotextile fabric is laid against the excavated bank behind the wall. This permeable membrane stops fine soil particles washing through into the drainage zone while still allowing water to pass freely, protecting the wall from long-term clogging and pressure buildup.
            </p>
            <p className="mt-4 text-slate-700 leading-8">
              Behind that goes a drainage layer, usually free-draining gravel or scoria, running the full height and length of the wall, along with a perforated drainage pipe laid at the base to carry collected water away to a safe outlet point. This drainage system is arguably the most important part of the whole structure, the majority of retaining wall failures in New Zealand come down to hydrostatic pressure building up behind a wall with inadequate drainage, not from the timber or fixings themselves giving way.
            </p>
            <p className="mt-4 text-slate-700 leading-8">
              With drainage in place, the facing boards or sleepers are fixed to the posts to form the visible wall face. Backfilling then proceeds in stages behind the drainage layer, compacted progressively to avoid excessive settlement later, with topsoil reserved for the final layer near the surface, ready for planting or lawn to go back in.
            </p>
            <p className="mt-4 text-slate-700 leading-8">
              The finished wall not only holds back the bank behind it but, done properly, will stay dry, stable, and structurally sound for decades, since it’s the unseen drainage work behind the timber that does most of the heavy lifting over the wall’s lifetime.
            </p>
          </article>

          <div className="flex flex-col justify-between gap-6">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <Image
                src="/images/services/timber-retaining-wall-excavation-trenching-wellington.jpg"
                alt="Excavation and trenching along the wall line for a timber pole retaining wall in Wellington"
                width={2000}
                height={900}
                className="aspect-[20/9] w-full object-cover object-center"
              />
            </div>
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <Image
                src="/images/services/timber-retaining-wall-drainage-gravel-trench-wellington.jpg"
                alt="Timber pole retaining wall under construction with a gravel drainage trench and geotextile-lined bank in Wellington"
                width={2000}
                height={900}
                className="aspect-[20/9] w-full object-cover object-center"
              />
            </div>
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <Image
                src="/images/services/timber-retaining-wall-completed-pole-sleeper-wellington.jpg"
                alt="Completed timber pole and sleeper retaining wall along a footpath in Wellington"
                width={2000}
                height={900}
                className="aspect-[20/9] w-full object-cover object-center"
              />
            </div>
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
