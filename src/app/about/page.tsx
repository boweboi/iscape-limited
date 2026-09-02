import type { Metadata } from "next";
import SiteShell from "@/components/site-shell";

export const metadata: Metadata = {
  title: "About — 25 Years in the Wellington Landscape Trade",
  description:
    "iScape Limited's roots are in LBP carpentry and 25 years across the Wellington building trade, now focused on retaining walls, decks and full outdoor transformations built to last.",
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <SiteShell>
      <h1 className="sr-only">About iScape Limited</h1>
      <section className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="space-y-5 text-lg leading-8 text-slate-700">
          <p>
            Our background is in LBP carpentry, twenty five years of
            hands-on experience across the building trade.
          </p>
          <p>
            Somewhere along the way, landscaping became the real passion,
            the chance to shape outdoor spaces from the ground up and leave
            a lasting mark on properties across the Wellington region.
          </p>
          <p>
            That love of creating, whether it&apos;s a retaining wall, a
            deck, or a full outdoor transformation, is what led to starting
            Iscape Limited.
          </p>
          <p>
            Every job is built with the same care and attention to detail
            that a career in the trade demands. From the first cut to the
            final finish, quality materials and proper technique
            aren&apos;t optional, they&apos;re the standard.
          </p>
          <p>
            Whether it&apos;s a retaining wall built to hold for decades or
            a deck framed to last, the craftsmanship carries through every
            part of the process. It&apos;s not just about how it looks on
            the day it&apos;s finished, it&apos;s about how it holds up
            years down the track.
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
