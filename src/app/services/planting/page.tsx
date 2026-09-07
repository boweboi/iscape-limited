import type { Metadata } from "next";
import Image from "next/image";
import SiteShell from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Planting & Garden Beds in Wellington",
  description:
    "Planting in Wellington built around hardy native species and grasses suited to local wind, salt and shade, with prepared beds, drainage and a plan tailored to each site.",
  alternates: { canonical: "/services/planting" },
};

export default function PlantingPage() {
  return (
    <SiteShell>
      <section className="space-y-6 pb-10">
        <div className="rounded-[32px] border border-slate-200 bg-slate-50 px-8 py-10 shadow-lg">
          <p className="inline-block rounded-full bg-white px-4 py-1 text-sm font-semibold uppercase tracking-[0.28em] text-slate-700">
            Planting
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Wellington planting services for beautiful, resilient gardens.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            We provide planting solutions using the right species for Wellington’s climate, soil conditions and landscape design goals.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">Plant selection</h2>
            <p className="mt-4 text-slate-700 leading-8">
              We select plants for durability, low maintenance, and aesthetic impact, prioritising species that thrive in Wellington’s wind, salt, and shade conditions. Native plants and grasses form the backbone of most of our planting schemes, they’re naturally suited to the local climate and require far less upkeep once established. For coastal and exposed sites, we lean on hardy species that can handle salt spray and strong winds without losing their shape or health. Every planting plan is tailored to the specific site, taking into account sun exposure, soil type, and how sheltered or exposed the location is, so the result looks good now and holds up for years to come.
            </p>
            <p className="mt-4 text-slate-700 leading-8">
              Our planting is quoted as a complete garden bed build rather than plant supply alone. Pricing is based on a 300mm dig out, backfilling with a quality soil mix, laying weed mat, spreading a mulch layer, installing garden edging, and planting at a density of four plants per square metre. Preparing the bed to this depth and standard is what keeps ongoing maintenance low and gives every plant a strong root run from the outset.
            </p>
            <p className="mt-4 text-slate-700 leading-8">
              The soil mix and 300mm depth give roots room to establish before they reach the existing ground, the weed mat and mulch keep competition down while the plants settle in, and the edging holds everything in place so mulch and soil stay in the bed rather than washing onto paths and lawn. At four plants per square metre the bed reads as planted straight away and closes over within a season or two as everything grows in.
            </p>
            <p className="mt-4 text-slate-700 leading-8">
              Autumn and early spring are the best windows for planting in Wellington, giving roots time to establish before summer dries the soil out or the winter winds set in. With the right species and a little extra watering through the establishment period, we can plant successfully across most of the year.
            </p>
          </article>

          <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm">
            <Image
              src="/images/services/native-grass-planting-bark-mulch-border-wellington.jpg"
              alt="Native ornamental grasses in a bark-mulch border with timber sleeper edging in Wellington"
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
              <li>Choose plants suited to your site’s exposure and water availability.</li>
              <li>Use quality soil amendments, mulch and irrigation planning.</li>
              <li>Position plants for long-term growth and landscape balance.</li>
            </ul>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-950">Construction methods</h3>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li>Prepare planting beds with clean soil and root-friendly amendments.</li>
              <li>Install drainage where water might pond near root zones.</li>
              <li>Mulch and stake plants as needed for establishment and moisture retention.</li>
            </ul>
          </article>
        </section>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Landscape integration</h2>
          <p className="mt-4 text-slate-700 leading-8">
            Our planting work is tied into the broader garden layout, coordinating with paths, decks, lawns and hardscape to create a cohesive, easy-care environment.
          </p>
        </div>

        <section className="grid gap-10 lg:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">Plant care and seasonal maintenance</h2>
            <p className="mt-4 text-slate-700 leading-8">
              Plants need the right start and ongoing care to thrive. We recommend soil testing, regular mulch refresh, seasonal pruning, and timely irrigation adjustments for Wellington’s variable seasons.</p>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li>Water deeply in summer and reduce irrigation in wet winter months.</li>
              <li>Refresh mulch to conserve moisture and suppress weeds.</li>
              <li>Inspect plants for pests, disease and salt damage after coastal winds.</li>
            </ul>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">Council guidance and planting standards</h2>
            <p className="mt-4 text-slate-700 leading-8">
              Planting near stormwater, retaining walls or slopes may be reviewed by Wellington council to ensure erosion control and site stability. Our planting plans are sensitive to council standards and local environmental conditions.</p>
            <p className="mt-4 text-slate-700 leading-8">
              Native and coastal-tolerant species are often preferable, reducing maintenance and supporting landscape resilience.</p>
          </article>
        </section>
      </section>
    </SiteShell>
  );
}