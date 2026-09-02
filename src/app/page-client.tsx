"use client";

import SiteShell from "@/components/site-shell";

const TESTIMONIALS = [
  {
    name: "Sarah M.",
    rating: 5,
    comment:
      "Iscape transformed our sloped back yard into a flat, usable lawn with a retaining wall that looks fantastic. Couldn't be happier with the result.",
  },
  {
    name: "David R.",
    rating: 5,
    comment:
      "Professional from start to finish. They handled the council consent for our retaining wall without any hassle on our end.",
  },
  {
    name: "Priya K.",
    rating: 4,
    comment:
      "Great communication throughout the project and the ready lawn looks amazing. Would definitely recommend to anyone in Wellington.",
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
      <section className="relative aspect-video w-full overflow-hidden rounded-[40px] sm:min-h-[360px] md:aspect-[20/9] md:min-h-0">
        <video
          className="absolute inset-0 h-full w-full object-cover object-center md:hidden"
          src="/videos/timber-retaining-wall-project-wellington-hero.mp4"
          poster="/images/services/wellington-home-timber-retaining-wall-lawn-hero.jpg"
          autoPlay
          loop
          muted
          playsInline
          aria-label="Timber pole retaining wall project walkthrough in Wellington"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="absolute inset-0 hidden h-full w-full object-cover object-center md:block"
          src="/images/services/hedge-planting-stone-border-lawn-wellington-hero.jpg"
          alt="Hedge planting in a stone border beside a new lawn and timber path at a Wellington home"
        />
      </section>

      <section className="py-14 text-center lg:text-left">
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-center text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Iscape
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            We have twenty five years of hands-on trade experience
            to every project across the Wellington region. As a Licensed Building
            Practitioner, we&apos;re fully qualified to handle council consents
            and compliance on every job. From retaining walls that reclaim
            sloped, terraced land into flat, usable space, to ready lawn and
            planting chosen for Wellington&apos;s wind, hills, and soil, we
            understand what actually holds up here. Every job is built with
            the same care and craftsmanship, whether it&apos;s a fence, a
            deck, or a full outdoor transformation. The result is a space that
            doesn&apos;t just look beautiful, it adds lasting value to your
            property, giving you room to live, entertain, and enjoy your home
            for years to come.
          </p>
        </div>
      </section>

      <section className="pb-14 text-center">
        <p className="inline-block rounded-full bg-slate-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.28em] text-slate-700">
          Licensed &amp; Trusted
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
          <div className="flex h-24 w-36 items-center justify-center rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/services/itm-logo.jpeg"
              alt="ITM"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="flex h-24 w-36 items-center justify-center rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/services/licensed-building-practitioner-logo.png"
              alt="Licensed Building Practitioner"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="flex h-24 w-36 items-center justify-center rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
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
        <p className="inline-block rounded-full bg-slate-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.28em] text-slate-700">
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
        <p className="inline-block rounded-full bg-slate-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.28em] text-slate-700">
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
