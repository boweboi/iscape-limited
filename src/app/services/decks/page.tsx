import type { Metadata } from "next";
import Image from "next/image";
import SiteShell from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Deck Builders in Wellington",
  description:
    "Custom deck design and construction in Wellington, from elevated coastal platforms to courtyard decks, with NZS 3604 timber framing, engineered footings and safe fall protection.",
  alternates: { canonical: "/services/decks" },
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
              A well-designed deck balances structural support with safe access.
            </p>
            <p className="mt-4 text-slate-700 leading-8">
              When we design a deck, we plan the height and levels around your existing door thresholds and access points, so the deck sits flush with your doorways for smooth, level access straight off the house rather than an awkward step up or down.
            </p>
            <p className="mt-4 text-slate-700 leading-8">
              We also factor in fall protection where the deck sits one metre or more above the ground, with balustrades built to at least one metre high in line with New Zealand building code requirements, along with proper drainage and ventilation underneath to stop moisture buildup and protect the framing over time.
            </p>
            <p className="mt-4 text-slate-700 leading-8">
              Every deck is designed to work with the rest of your outdoor space, tying in with existing paths, planting, and retaining walls for a layout that feels considered rather than tacked on.
            </p>
            <p className="mt-4 text-slate-700 leading-8">
              The photos alongside show two timber options: the pine deck is a softwood build, while the other is a hardwood build. Homeowners can choose between them depending on the look and durability they want.
            </p>
          </article>

          <div className="grid gap-4 lg:grid-rows-2">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <Image
                src="/images/services/low-timber-deck-with-step-wellington.jpg"
                alt="Low-set timber deck with a step, bordered by garden planting, in Wellington"
                width={1200}
                height={900}
                className="aspect-[4/3] w-full object-cover lg:aspect-auto lg:h-full"
              />
            </div>
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <Image
                src="/images/services/hardwood-deck-oiled-timber-finish-wellington.jpg"
                alt="Close-up of a freshly oiled hardwood timber deck showing the rich grain and finish, in Wellington"
                width={1200}
                height={900}
                className="aspect-[4/3] w-full object-cover lg:aspect-auto lg:h-full"
              />
            </div>
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
      </section>
    </SiteShell>
  );
}