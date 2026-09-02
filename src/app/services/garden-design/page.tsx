import type { Metadata } from "next";
import Image from "next/image";
import SiteShell from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Garden Design in Wellington",
  description:
    "Garden design in Wellington combining plant selection, hardscape and a sustainable layout, planned around sun, soil and shelter for modern, low-maintenance outdoor living.",
  alternates: { canonical: "/services/garden-design" },
};

export default function GardenDesignPage() {
  return (
    <SiteShell>
      <section className="space-y-6 pb-10">
        <div className="rounded-[32px] border border-slate-200 bg-slate-50 px-8 py-10 shadow-lg">
          <p className="inline-block rounded-full bg-white px-4 py-1 text-sm font-semibold uppercase tracking-[0.28em] text-slate-700">
            Garden design
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Wellington garden design for practical, beautiful and resilient outdoor environments.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            We plan gardens that work with your site, climate and lifestyle, using a mix of planting, hardscaping and functional spaces to create a cohesive result.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">Design process</h2>
            <p className="mt-4 text-slate-700 leading-8">
              We start with site analysis, client goals and Wellington-specific conditions. The result is a concept that blends form, function and buildability.
            </p>
          </article>

          <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm">
            <Image
              src="/images/services/garden-design.jpg"
              alt="Garden design layout and planting in Wellington"
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
              <li>Design around existing trees, slope and solar access.</li>
              <li>Create spaces that balance movement, relaxation and maintenance.</li>
              <li>Use materials and planting that thrive in Wellington’s coastal climate.</li>
            </ul>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-950">Construction methods</h3>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li>Prepare graded, drained zones before installing beds, paths and structures.</li>
              <li>Coordinate plant installation with hardscape, drainage and irrigation.</li>
              <li>Use durable materials and engineered solutions for long-lasting layout.</li>
            </ul>
          </article>
        </section>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Sustainable landscape design</h2>
          <p className="mt-4 text-slate-700 leading-8">
            We prioritise sustainable design with low-maintenance planting, efficient irrigation, and flexible garden spaces that adapt to change and reduce water use.
          </p>
        </div>

        <section className="grid gap-10 lg:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">Homeowner care plan</h2>
            <p className="mt-4 text-slate-700 leading-8">
              We provide a plant care plan, maintenance schedule and material guide so you can manage your garden confidently. Good design should make watering, pruning and path maintenance straightforward.</p>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li>Follow seasonal pruning and mulching advice to keep planting healthy.</li>
              <li>Maintain irrigation systems and keep surface drains clear.</li>
              <li>Review hardscape joints and edging annually to prevent weed ingress.</li>
            </ul>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">Regulations and construction detail</h2>
            <p className="mt-4 text-slate-700 leading-8">
              Designs incorporating walls, terraces or large earthworks may need Wellington council consent. We make sure your garden plan fits within local site standards and works with existing slope conditions.
            </p>
            <p className="mt-4 text-slate-700 leading-8">
              Where timber structures are included, we follow NZS 3604 guidance for load-bearing members, decking and pergolas to ensure long-term safety and compliance.</p>
          </article>
        </section>
      </section>
    </SiteShell>
  );
}
