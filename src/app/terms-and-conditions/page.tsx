import type { Metadata } from "next";
import SiteShell from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Website use, quote validity, staged payment terms and liability limits for landscaping and building work carried out by iScape Limited in the Wellington region.",
  alternates: { canonical: "/terms-and-conditions" },
};

export default function TermsAndConditionsPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Terms &amp; conditions
        </h1>
        <p className="mt-3 text-sm text-slate-500">
          These terms apply to your use of this website and to landscaping and
          building work carried out by iScape Limited.
        </p>

        <div className="mt-8 space-y-8 text-slate-700 leading-8">
          <div>
            <h2 className="text-xl font-semibold text-slate-950">Website use</h2>
            <p className="mt-3">
              This website is provided for general information about our
              services. We keep the content accurate and up to date as far as we
              reasonably can, but it does not form part of any contract and may
              change without notice. Prices, rates and estimates shown on the
              site, including any figures produced by the cost estimator tools,
              are indicative only and are not a quote.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-950">Quotes</h2>
            <p className="mt-3">
              A written quote is prepared for each project after we have visited
              the site. Unless the quote says otherwise, it is valid for 28 days
              from its date. After that we may need to review it to account for
              changes in material or labour costs. A quote is based on the scope
              of work described in it; additional or changed work is priced
              separately and agreed before it is carried out.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-950">
              Payment terms
            </h2>
            <p className="mt-3">
              Unless we agree different terms in writing, payment for a project
              is made in three stages:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-slate-400">
              <li>
                <span className="font-semibold text-slate-950">40% deposit</span>{" "}
                payable before work commences, to confirm the booking and cover
                initial materials.
              </li>
              <li>
                <span className="font-semibold text-slate-950">
                  40% progress payment
                </span>{" "}
                payable partway through the project, at a point set out in the
                quote or agreed on site.
              </li>
              <li>
                <span className="font-semibold text-slate-950">
                  20% final payment
                </span>{" "}
                payable on completion of the work.
              </li>
            </ul>
            <p className="mt-4">
              Invoices are due within 7 days unless stated otherwise. Work
              remains the property of iScape Limited until it has been paid for
              in full, and we may pause a project where a payment is overdue.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-950">
              Liability
            </h2>
            <p className="mt-3">
              We carry out our work with reasonable care and skill and in line
              with the relevant New Zealand building standards and council
              requirements. To the extent the law allows, iScape Limited is not
              liable for:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-slate-400">
              <li>
                indirect or consequential loss, including loss of use, income or
                profit;
              </li>
              <li>
                issues caused by pre-existing site conditions, ground movement,
                weather events, or work carried out by others;
              </li>
              <li>
                problems arising from a lack of maintenance, or from changes made
                to our work after completion.
              </li>
            </ul>
            <p className="mt-4">
              Where iScape Limited is found liable for any loss, that liability
              is limited to the price paid for the work in question. Nothing in
              these terms limits any rights you have under the Consumer
              Guarantees Act 1993 or the Building Act 2004 that cannot be
              excluded.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-950">
              Contact
            </h2>
            <p className="mt-3">
              Questions about these terms can be sent to{" "}
              <a
                href="mailto:iscapework@gmail.com"
                className="font-medium text-slate-950 underline underline-offset-4"
              >
                iscapework@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
