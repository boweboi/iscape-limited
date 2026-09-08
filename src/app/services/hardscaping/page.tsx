import type { Metadata } from "next";
import Image from "next/image";
import SiteShell from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Hardscaping in Wellington | Patios, Paths & Walls",
  description:
    "Hardscaping across the Wellington region: patios, paths, retaining walls and decks that give a garden its structure, built on compacted bases with drainage and NZS 3604 detail where it applies.",
  alternates: { canonical: "/services/hardscaping" },
};

export default function HardscapingPage() {
  return (
    <SiteShell>
      <section className="space-y-6 pb-10">
        <div className="rounded-[32px] border border-slate-200 bg-slate-50 px-8 py-10 shadow-lg">
          <p className="inline-block rounded-full bg-white px-4 py-1 text-sm font-semibold uppercase tracking-[0.28em] text-slate-700">
            Hardscaping
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Wellington hardscaping that creates structured outdoor spaces and weatherproof outdoor living.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            We build patios, paths, retaining walls, and outdoor structures with durable materials suited to Wellington’s coastal and seismic environment.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">Patios and paths</h2>
            <p className="mt-4 text-slate-700 leading-8">
              Our hardscape work includes engineered sub-bases, controlled falls and stable surfaces that remain safe and finished in Wellington weather.
            </p>
          </article>

          <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm">
            <Image
              src="/images/services/hardscaping.jpg"
              alt="Hardscaping project in Wellington with a paved patio and retaining wall"
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
              <li>Plan hardscapes with expansion joints, proper drainage and durable edge restraints.</li>
              <li>Use materials and finishes that resist Wellington salt spray, wind and moisture.</li>
              <li>Integrate hardscaping with planting and lawn areas for seamless outdoor flow.</li>
            </ul>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-950">Construction methods</h3>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li>Excavate and compact sub-base materials, followed by base and surface installation.</li>
              <li>Install drainage behind walls and below paving to prevent saturation and movement.</li>
              <li>Use structural reinforcing where needed to meet NZS 3604 and local engineering guidance.</li>
            </ul>
          </article>
        </section>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Council compliance</h2>
          <p className="mt-4 text-slate-700 leading-8">
            Hardscape projects are coordinated with Wellington City Council standards, including any required consents for retaining walls, access works and stormwater management.
          </p>
        </div>

        <section className="grid gap-10 lg:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">Care and maintenance</h2>
            <p className="mt-4 text-slate-700 leading-8">
              Regularly inspecting hardscape surfaces and drainage points helps prevent costly repairs. Clean paving, clear joints of debris and ensure water runs away from retaining and wall structures.</p>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li>Remove moss, algae and debris from paving to reduce slip risk and surface damage.</li>
              <li>Inspect drainage outlets and subsoil drains after storms and clear any blockages.</li>
              <li>Repair cracks, joint filler and edging before movement widens them.</li>
            </ul>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">NZS 3604 and structural detail</h2>
            <p className="mt-4 text-slate-700 leading-8">
              Where hardscape includes timber or retaining elements, we apply NZS 3604 for structural framing, bracing and weather protection. That includes correct footing depth, member sizing, and fixing details.</p>
            <p className="mt-4 text-slate-700 leading-8">
              Good construction detail also means integrated drainage, strong edge restraint and a stable sub-base for long-term performance.</p>
          </article>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Homeowner checklist</h2>
          <ul className="mt-6 space-y-3 text-slate-700">
            <li>Check paving, joints and drainage channels after heavy Wellington rain.</li>
            <li>Keep hardscape edges clear of vegetation to maintain stable borders.</li>
            <li>Inspect retaining structures and sealants annually to prevent water damage.</li>
          </ul>
        </section>
      </section>
    </SiteShell>
  );
}