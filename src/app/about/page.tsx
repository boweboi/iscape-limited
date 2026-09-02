import type { Metadata } from "next";
import SiteShell from "@/components/site-shell";

export const metadata: Metadata = {
  title: "About | iScape Limited - Wellington landscape experts",
  description:
    "Discover iScape Limited's Wellington team, experience with retaining walls, NZS 3604 timber wall standards, council approvals, and landscape delivery.",
};

export default function About() {
  return (
    <SiteShell>
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
