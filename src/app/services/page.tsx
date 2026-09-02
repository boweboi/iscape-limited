import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteShell from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Landscaping Services in Wellington",
  description:
    "iScape Limited's Wellington services: timber retaining walls, residential fencing, decking, ready lawn, planting and concrete works, built with LBP-qualified workmanship and council compliance.",
  alternates: { canonical: "/services" },
};

const services: {
  href: string;
  title: string;
  image?: string;
  imageClassName?: string;
}[] = [
  {
    href: "/services/timber-retaining-walls",
    title: "Retaining Walls",
    image: "/images/services/timber-retaining-wall-ready-lawn-wellington.jpg",
  },
  {
    href: "/services/residential-fencing",
    title: "Fencing",
    image: "/images/services/timber-boundary-fence-construction-wellington.jpg",
  },
  {
    href: "/services/decks",
    title: "Decking",
  },
  {
    href: "/services/ready-lawn",
    title: "Ready Lawn",
    image: "/images/services/ready-lawn-turf-roll-installation-wellington.jpg",
  },
  {
    href: "/services/planting",
    title: "Planting",
    image: "/images/services/garden-planting-mulched-beds-path-wellington.jpg",
    imageClassName: "object-contain bg-slate-50 object-center",
  },
  {
    href: "/services/concrete-driveways-and-paths",
    title: "Concrete Works",
  },
];

export default function Services() {
  return (
    <SiteShell>
      <section className="space-y-4 pb-10 text-center">
        <p className="inline-block rounded-full bg-slate-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.28em] text-slate-700">
          What We Do
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          Our services.
        </h1>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <Link
            key={service.href}
            href={service.href}
            className="group rounded-3xl border border-slate-200 bg-white p-4 transition duration-300 hover:-translate-y-1 hover:border-slate-300"
          >
            {service.image ? (
              <Image
                src={service.image}
                alt={`${service.title} project by iScape Limited in Wellington`}
                width={1200}
                height={900}
                className={`h-44 w-full rounded-2xl border border-slate-200 ${
                  service.imageClassName ?? "object-cover"
                }`}
              />
            ) : (
              <div className="flex h-44 w-full items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-sm text-slate-400">
                Photo coming soon
              </div>
            )}
            <div className="pt-6 pb-2 text-center">
              <h2 className="text-xl font-semibold text-slate-950">
                {service.title}
              </h2>
            </div>
          </Link>
        ))}
      </section>
    </SiteShell>
  );
}
