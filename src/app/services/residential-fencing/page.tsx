import type { Metadata } from "next";
import Image from "next/image";
import SiteShell from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Residential Fencing | iScape Limited Wellington",
  description:
    "Residential fencing services in Wellington including durable timber, steel and privacy solutions with practical construction methods.",
};

export default function ResidentialFencingPage() {
  return (
    <SiteShell>
      <section className="space-y-6 pb-10">
        <div className="rounded-[32px] border border-slate-200 bg-slate-50 px-8 py-10 shadow-lg">
          <p className="inline-block rounded-full bg-white px-4 py-1 text-sm font-semibold uppercase tracking-[0.28em] text-slate-700">
            Residential fencing
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Wellington residential fencing with durability, privacy and clean construction details.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            We install fences for boundary definition, privacy screening and property safety using timber, steel or composite materials designed for local weather and site conditions.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">Material choices</h2>
            <p className="mt-4 text-slate-700 leading-8">
              Timber is a popular choice for a warm look, while steel and composite panels deliver low maintenance and strong performance in Wellington’s coastal environment.
            </p>
          </article>

          <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm">
            <Image
              src="/images/services/timber-privacy-fence-retaining-wall-wellington.jpg"
              alt="Residential fencing installation in Wellington"
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
              <li>Use steel or treated timber posts set in concrete for long-lasting support.</li>
              <li>Allow drainage and airflow behind the fence to avoid rot and pressure build-up.</li>
              <li>Install accurate line and level to keep the fence straight and stable.</li>
            </ul>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-950">Construction methods</h3>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li>Mark boundary lines and set posts in concrete footings with proper embedment.</li>
              <li>Fix rails and panels with corrosion-resistant fasteners for coastal durability.</li>
              <li>Add capping and trim to protect edges and complete the visual finish.</li>
            </ul>
          </article>
        </section>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Privacy and design</h2>
          <p className="mt-4 text-slate-700 leading-8">
            We can create both open and privacy screen fences, including slatted timber, solid panels and planting-integrated boundaries that soften the look and improve neighbours’ privacy.
          </p>
        </div>

        <section className="grid gap-10 lg:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">Maintenance and care</h2>
            <p className="mt-4 text-slate-700 leading-8">
              Fences are exposed to wind, salt and moisture in Wellington. Regular cleaning, repainting or resealing will protect timber and steel, while checking posts and fixings keeps the line straight and stable.
            </p>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li>Inspect post foundations and replace any cracked concrete footings before the fence shifts.</li>
              <li>Apply protective coatings every few years, especially on coastal or exposed sites.</li>
              <li>Keep vegetation trimmed away from the fence line to avoid rot, staining and extra pressure.</li>
            </ul>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">Wellington council and boundary considerations</h2>
            <p className="mt-4 text-slate-700 leading-8">
              Council rules may affect fence height, location and design near streets and adjacent properties. We confirm boundary lines, local bylaws and any consent requirements before we build.
            </p>
            <p className="mt-4 text-slate-700 leading-8">
              Detailed workmanship ensures the fence remains a safe, compliant and durable boundary element for your home.</p>
          </article>
        </section>
      </section>
    </SiteShell>
  );
}