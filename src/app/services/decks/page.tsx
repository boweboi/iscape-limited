import type { Metadata } from "next";
import Image from "next/image";
import SiteShell from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Decks | iScape Limited Wellington",
  description:
    "Custom Wellington decks built with durable materials, structural foundations, and engineered timber solutions.",
};

export default function DecksPage() {
  return (
    <SiteShell>
      <section className="space-y-6 pb-10">
        <div className="rounded-[32px] border border-slate-200 bg-slate-50 px-8 py-10 shadow-lg">
          <p className="inline-block rounded-full bg-white px-4 py-1 text-sm font-semibold uppercase tracking-[0.28em] text-slate-700">
            Decks
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Wellington deck design and construction for seamless indoor-outdoor living.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            We deliver durable deck structures that suit your property, from coastal elevated platforms to compact courtyard decks with engineered timber framing.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">Design principles</h2>
            <p className="mt-4 text-slate-700 leading-8">
              A well-designed deck balances structural support with safe access. We consider fall protection, drainage, ventilation and how the deck integrates with planting, paths and retaining walls.
            </p>
          </article>

          <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm">
            <Image
              src="/images/services/decks.jpg"
              alt="Wellington deck construction with timber details"
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
              <li>Use durable, treated framing and corrosion-resistant fixings.</li>
              <li>Provide adequate airflow under the deck to prevent moisture build-up.</li>
              <li>Include drainage slopes and gutters if the deck is adjacent to buildings.</li>
            </ul>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-950">Construction methods</h3>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li>Set foundations or footings to engineered depths and align the structure accurately.</li>
              <li>Build framing with appropriate joist spacing for the chosen decking material.</li>
              <li>Install handrails, balustrades and steps to meet safe-use requirements.</li>
            </ul>
          </article>
        </section>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Coastal and seismic performance</h2>
          <p className="mt-4 text-slate-700 leading-8">
            Wellington decks should perform under wind, rain and seismic movement. We use robust connections, flexible fixings and thoughtful drainage to keep the structure stable and serviceable.
          </p>
        </div>

        <section className="grid gap-10 lg:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">Deck care and inspection</h2>
            <p className="mt-4 text-slate-700 leading-8">
              Regular care extends the life of your deck. Wash annually, check for loose fixings, and reseal or oil timber deck boards to protect them from moisture and UV damage.
            </p>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li>Clear debris from gaps and under the deck to maintain airflow and prevent rot.</li>
              <li>Perform a mid-season inspection of balustrades, handrails and steps.</li>
              <li>Repaint or reseal surfaces every 2–3 years depending on exposure.</li>
            </ul>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">Council rules and NZS 3604 framing</h2>
            <p className="mt-4 text-slate-700 leading-8">
              Decks over 1 metre high often require handrails, guardrails and council approval. We follow NZS 3604 for timber framing, joist spacing, fixings and connection details in Wellington conditions.
            </p>
            <p className="mt-4 text-slate-700 leading-8">
              Our documentation includes foundation depth, bracing and stormwater management for secure, compliant deck construction.</p>
          </article>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Typical construction detail</h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
            <div className="rounded-3xl border border-slate-300 bg-slate-950 p-6 text-slate-100">
              <div className="space-y-4 text-sm">
                <div className="rounded-2xl bg-slate-800 p-4">Deck joists on bearers</div>
                <div className="rounded-2xl bg-slate-800 p-4">Deck boards with spacing for drainage</div>
                <div className="rounded-2xl bg-slate-800 p-4">Handrail and balustrade fixings</div>
                <div className="rounded-2xl bg-slate-800 p-4">Bracing or posts to engineered detail</div>
                <div className="rounded-2xl bg-slate-800 p-4">Footings or piers set on stable, drained ground</div>
                <div className="rounded-2xl bg-slate-800 p-4">Compacted subgrade and drainage</div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-300 bg-white p-6 text-slate-700">
              <p className="text-lg font-semibold text-slate-950">How this detail works</p>
              <p className="mt-4 leading-8">
                The schematic shows key deck elements from boards and joists to footings and drainage. Proper spacing, airflow and solid support keep the deck stable and prevent moisture damage.
              </p>
              <ul className="mt-4 space-y-3">
                <li>Joists and bearers transfer loads to footings and ensure the deck is rigid.</li>
                <li>Well-spaced deck boards allow water to run off and air to circulate.</li>
                <li>Footings and piers are set in compacted fill with good drainage to handle Wellington’s wet conditions.</li>
              </ul>
              <p className="mt-4 leading-8">
                For raised decks and higher structures, we include engineered bracing, stormwater control and safe fall protection in the design.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Homeowner checklist</h2>
          <ul className="mt-6 space-y-3 text-slate-700">
            <li>Keep the space beneath the deck clear to maintain airflow and reduce moisture.</li>
            <li>Check fixings, balustrades and steps regularly for tightness and wear.</li>
            <li>Reapply sealant or stain on timber decking every few years in coastal Wellington conditions.</li>
          </ul>
        </section>
      </section>
    </SiteShell>
  );
}