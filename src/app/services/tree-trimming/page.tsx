import type { Metadata } from "next";
import Image from "next/image";
import SiteShell from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Tree Trimming | iScape Limited Wellington",
  description:
    "Professional tree trimming services in Wellington for healthy trees, safe limbs and landscaping integration.",
};

export default function TreeTrimmingPage() {
  return (
    <SiteShell>
      <section className="space-y-6 pb-10">
        <div className="rounded-[32px] border border-slate-200 bg-slate-50 px-8 py-10 shadow-lg">
          <p className="inline-block rounded-full bg-white px-4 py-1 text-sm font-semibold uppercase tracking-[0.28em] text-slate-700">
            Tree trimming
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Wellington tree trimming for safe, healthy and landscaped outdoor spaces.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            We trim trees carefully to improve structure, reduce risk and enhance the appearance of your garden while protecting established planting and landscape design.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">Service scope</h2>
            <p className="mt-4 text-slate-700 leading-8">
              Our tree trimming includes canopy thinning, removal of deadwood, and crown shaping to maintain healthy growth and reduce hazards around driveways, buildings and retaining walls.
            </p>
          </article>

          <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm">
            <Image
              src="/images/services/tree-trimming.jpg"
              alt="Tree trimming and pruning service in Wellington"
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
              <li>Remove dead and damaged branches to improve tree health.</li>
              <li>Thin the canopy to reduce wind resistance and promote balanced growth.</li>
              <li>Leave a healthy branch structure to preserve the tree's natural form.</li>
            </ul>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-950">Construction methods</h3>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li>Use correct pruning cuts to avoid ripping bark and encourage healing.</li>
              <li>Work from safe access points, protecting nearby landscaping and structures.</li>
              <li>Manage waste and clean up carefully so branches and debris do not affect finished surfaces.</li>
            </ul>
          </article>
        </section>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Garden integration</h2>
          <p className="mt-4 text-slate-700 leading-8">
            Tree trimming is part of our wider garden and landscape service. We coordinate with planting, lawn areas and hardscape to maintain the right balance between foliage and usable outdoor space.
          </p>
        </div>

        <section className="grid gap-10 lg:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">Aftercare and inspection</h2>
            <p className="mt-4 text-slate-700 leading-8">
              After trimming, inspect tree wounds and surrounding planting regularly. Keep the area clear of debris and monitor for regrowth, disease or insect activity.</p>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li>Check trimmed trees each season to ensure cuts heal cleanly and no dead limbs remain.</li>
              <li>Maintain safe clearances from buildings, power lines and garden structures.</li>
              <li>Ensure the trimmed shape supports good light, airflow and balanced growth.</li>
            </ul>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">Regulations and safe pruning</h2>
            <p className="mt-4 text-slate-700 leading-8">
              Wellington has rules for protected trees and boundary vegetation, and trimming must be done safely near neighbours and public spaces. We comply with local arboriculture standards and council guidance where required.</p>
            <p className="mt-4 text-slate-700 leading-8">
              Correct pruning techniques help trees recover faster and reduce the long-term risk of decay or structural failure.</p>
          </article>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Typical construction detail</h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
            <div className="rounded-3xl border border-slate-300 bg-slate-950 p-6 text-slate-100">
              <div className="space-y-4 text-sm">
                <div className="rounded-2xl bg-slate-800 p-4">Risk assessment and pruning plan</div>
                <div className="rounded-2xl bg-slate-800 p-4">Safe access and branch support</div>
                <div className="rounded-2xl bg-slate-800 p-4">Correct pruning cuts and crown thinning</div>
                <div className="rounded-2xl bg-slate-800 p-4">Debris removal and site clean-up</div>
                <div className="rounded-2xl bg-slate-800 p-4">Aftercare advice and monitoring</div>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-300 bg-white p-6 text-slate-700">
              <p className="text-lg font-semibold text-slate-950">How this detail works</p>
              <p className="mt-4 leading-8">
                Tree trimming is planned around the tree’s structure, access safety and the surrounding landscape. Pruning cuts are made to encourage healthy regrowth and to keep the tree stable.
              </p>
              <ul className="mt-4 space-y-3">
                <li>Start with a clear pruning plan to preserve tree health and structure.</li>
                <li>Use safe working methods and remove branches cleanly to promote healing.</li>
                <li>Remove cut material and check the work area to avoid damage to lawn and garden features.</li>
              </ul>
              <p className="mt-4 leading-8">
                This approach ensures a healthier tree and a safer, more attractive landscape after pruning work is complete.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Homeowner checklist</h2>
          <ul className="mt-6 space-y-3 text-slate-700">
            <li>Inspect trimmed branches and canopy clearance after storms to ensure tree stability.</li>
            <li>Keep the zone beneath trimmed trees clear of debris and remove loose branches promptly.</li>
            <li>Monitor cuts for healthy healing and avoid additional pruning until new growth is established.</li>
          </ul>
        </section>
      </section>
    </SiteShell>
  );
}
