"use client";

import { useEffect, useState } from "react";
import SiteShell from "@/components/site-shell";

function Typewriter({ text, className }: { text: string; className?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let timeout: ReturnType<typeof setTimeout>;
    let typed = 0;
    let phase: "typing" | "holding" | "waiting" = "typing";

    const tick = () => {
      if (reduced) {
        setCount(text.length);
        return;
      }

      if (phase === "typing") {
        typed += 1;
        setCount(typed);
        if (typed >= text.length) {
          phase = "holding";
          timeout = setTimeout(tick, 1900);
        } else {
          timeout = setTimeout(tick, 95);
        }
        return;
      }

      if (phase === "holding") {
        phase = "waiting";
        setCount(0);
        timeout = setTimeout(tick, 750);
        return;
      }

      typed = 0;
      phase = "typing";
      timeout = setTimeout(tick, 0);
    };

    timeout = setTimeout(tick, reduced ? 0 : 550);
    return () => clearTimeout(timeout);
  }, [text]);

  return (
    <span className={`relative inline-block ${className ?? ""}`} aria-label={text}>
      <span aria-hidden="true" className="invisible whitespace-nowrap">
        {text}
      </span>
      <span
        aria-hidden="true"
        className="absolute inset-y-0 left-0 whitespace-nowrap"
      >
        {text.slice(0, count)}
        <span className="ml-px animate-pulse font-normal">|</span>
      </span>
    </span>
  );
}

const TESTIMONIALS = [
  {
    name: "R. Baxter",
    rating: 5,
    comment:
      "So pleased I reached out to this company. Beau was both prompt and professional. Great job done on stump removal, would happily recommend.",
  },
  {
    name: "O. Mills",
    rating: 5,
    comment:
      "Friendly, affordable, took pride in the work, was respectful to our property, and did an amazing job with stump grinding. Highly recommend to anyone needing landscaping or stump grinding. Professional service, would definitely use again for future work. Thanks.",
  },
  {
    name: "R. Waitai",
    rating: 5,
    comment:
      "Very happy, great job, we'll get these guys back for future projects, thank you.",
  },
  {
    name: "Tom H.",
    rating: 5,
    comment:
      "Solid, reliable work. Our new deck and planting have completely changed how we use the back garden.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          viewBox="0 0 20 20"
          aria-hidden="true"
          className={`h-4 w-4 ${index < rating ? "fill-amber-400" : "fill-slate-200"}`}
        >
          <path d="M10 1.5l2.59 5.25 5.79.84-4.19 4.08.99 5.77L10 14.77l-5.18 2.67.99-5.77L1.62 7.59l5.79-.84L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({
  name,
  rating,
  comment,
}: {
  name: string;
  rating: number;
  comment: string;
}) {
  return (
    <div className="w-80 shrink-0 rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-sm">
      <StarRating rating={rating} />
      <p className="mt-4 text-sm text-slate-700">&ldquo;{comment}&rdquo;</p>
      <p className="mt-4 text-sm font-semibold text-slate-950">{name}</p>
    </div>
  );
}

export default function HomePageClient() {
  return (
    <SiteShell>
      <h1 className="sr-only">
        Wellington retaining walls, landscaping, ready lawn, fencing and decks
        by iScape Limited
      </h1>
      <section className="relative aspect-video w-full overflow-hidden rounded-3xl sm:min-h-[360px] md:aspect-[19/9] md:rounded-[40px]">
        <video
          className="absolute inset-0 h-full w-full object-cover object-center md:hidden"
          src="/videos/timber-retaining-wall-walkthrough-wellington-hero.mp4"
          poster="/images/services/wellington-home-timber-retaining-wall-lawn-hero.jpg"
          autoPlay
          loop
          muted
          playsInline
          aria-label="Timber pole retaining wall project walkthrough in Wellington"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="absolute inset-0 hidden h-full w-full object-cover object-[50%_80%] md:block"
          src="/images/services/wellington-home-retaining-wall-ready-lawn-aerial-hero.jpg"
          alt="Aerial view of a Wellington home with a timber pole retaining wall enclosing a new ready lawn"
        />

        {/* Desktop-only credibility overlay */}
        <div className="pointer-events-none absolute inset-0 hidden bg-slate-950/25 md:block" />
        <div className="pointer-events-none absolute inset-x-0 top-6 hidden flex-col items-center text-center md:flex lg:top-8">
          <div className="rounded-xl bg-white/90 p-2.5 shadow-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/services/licensed-building-practitioner-logo.png"
              alt="Licensed Building Practitioner"
              className="h-24 w-24 object-contain"
            />
          </div>
          <Typewriter
            text="LBP verified"
            className="mt-3 text-lg font-semibold text-[#16a34a] [text-shadow:0_2px_10px_rgba(2,6,23,0.7)]"
          />
        </div>
      </section>

      <section className="py-14 text-center lg:text-left">
        <div className="text-center">
          <div className="inline-block rounded-3xl border border-slate-200 bg-slate-100 px-6 py-3 sm:px-8 sm:py-3.5">
            <h2 className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-700 sm:text-base">
              &ldquo;Landscape Creation, Start to Finish&rdquo;
            </h2>
          </div>
        </div>
        <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-8 text-left shadow-sm">
          <p className="text-lg leading-8 text-slate-700">
            With twenty-five years of hands-on trade experience, we provide a
            complete, end-to-end residential landscaping service across the
            Wellington region. What sets us apart is our Licensed Building
            Practitioner qualification. This means we don&apos;t just plant
            gardens, we have the licensed expertise to handle the heavy
            structural work too. We ensure every retaining wall, deck, and
            balustrade perfectly aligns with engineering drawings and fully
            complies with council requirements.
          </p>
          <ul className="mt-6 list-disc space-y-3 pl-6 text-lg leading-8 text-slate-700 marker:text-slate-400">
            <li>
              <span className="font-semibold text-slate-950">
                Retaining Walls
              </span>{" "}
              — We design timber retaining systems with treated timber,
              structural foundations, and drainage so your wall performs
              reliably in local soil and seismic conditions.
            </li>
            <li>
              <span className="font-semibold text-slate-950">Concrete Works</span>{" "}
              — We install concrete driveways and paths with engineered bases,
              controlled falls and durable finishes that perform well in
              Wellington&apos;s changing weather conditions.
            </li>
            <li>
              <span className="font-semibold text-slate-950">Decking</span> — We
              deliver durable deck structures that suit your property, from
              coastal elevated platforms to compact courtyard decks with
              engineered timber framing.
            </li>
            <li>
              <span className="font-semibold text-slate-950">Fencing</span> — We
              install fences for boundary definition, privacy screening and
              property safety using timber, steel or composite materials
              designed for local weather and site conditions.
            </li>
            <li>
              <span className="font-semibold text-slate-950">Ready Lawn</span> —
              We install ready lawn with engineered retaining edges, quality
              soil preparation and integrated drainage to ensure a healthy, even
              finish in Wellington&apos;s variable climate.
            </li>
            <li>
              <span className="font-semibold text-slate-950">Planting</span> — We
              provide planting solutions using the right species for
              Wellington&apos;s climate, soil conditions and landscape design
              goals.
            </li>
          </ul>
          <p className="mt-6 text-lg leading-8 text-slate-700">
            Ready to transform your outdoor space? We are always happy to come
            out to your site, look at the layout, and provide a free, no
            obligation quote. Get in touch with us today to book a time that
            suits you.
          </p>
        </div>
      </section>

      <section className="pb-14 text-center">
        <p className="inline-block rounded-full bg-slate-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.28em] text-slate-700 md:px-6 md:py-1.5 md:text-[1.3125rem]">
          Licensed and Verified
        </p>
        <div className="mt-6 flex flex-col items-center gap-3">
          <div className="flex h-24 w-36 items-center justify-center rounded-3xl border border-slate-200 bg-white p-4 shadow-sm md:h-48 md:w-72 md:p-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/services/licensed-building-practitioner-logo.png"
              alt="Licensed Building Practitioner"
              className="h-full w-full object-contain"
            />
          </div>
          <p className="text-sm font-medium text-slate-700">
            Licensed Building Practitioner
          </p>
        </div>
      </section>

      <section className="pb-14 text-center">
        <p className="inline-block rounded-full bg-slate-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.28em] text-slate-700 md:px-6 md:py-1.5 md:text-[1.3125rem]">
          Trusted Suppliers
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
          <div className="flex h-24 w-36 items-center justify-center rounded-3xl border border-slate-200 bg-white p-4 shadow-sm md:h-48 md:w-72 md:p-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/services/itm-logo.jpeg"
              alt="ITM"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="flex h-24 w-36 items-center justify-center rounded-3xl border border-slate-200 bg-white p-4 shadow-sm md:h-48 md:w-72 md:p-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/services/placemakers-logo.png"
              alt="PlaceMakers"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </section>

      <section className="pb-14 text-center">
        <p className="inline-block rounded-full bg-slate-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.28em] text-slate-700 md:px-6 md:py-1.5 md:text-[1.3125rem]">
          What Our Customers Say
        </p>

        <div
          className="mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
        >
          <div className="animate-marquee flex w-max gap-6">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, index) => (
              <TestimonialCard key={`${testimonial.name}-${index}`} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-14 text-center">
        <p className="inline-block rounded-full bg-slate-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.28em] text-slate-700 md:px-6 md:py-1.5 md:text-[1.3125rem]">
          Our Service Area, Wellington Region
        </p>
        <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
          <iframe
            title="Iscape Limited service area map"
            src="https://www.google.com/maps?q=-40.98,175.15&z=9&output=embed"
            className="h-96 w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </SiteShell>
  );
}
