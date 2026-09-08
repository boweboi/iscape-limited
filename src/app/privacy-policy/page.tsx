import type { Metadata } from "next";
import SiteShell from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How iScape Limited collects, uses and protects the personal information you share through our Wellington landscaping enquiry form.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Privacy policy
        </h1>
        <p className="mt-3 text-sm text-slate-500">
          This policy explains how iScape Limited handles the personal
          information you give us.
        </p>

        <div className="mt-8 space-y-8 text-slate-700 leading-8">
          <div>
            <h2 className="text-xl font-semibold text-slate-950">
              Information we collect
            </h2>
            <p className="mt-3">
              When you fill in the contact form on this website, we collect the
              details you enter: your name, email address, phone number and the
              content of your message. We do not collect any other personal
              information through the site, and we do not use tracking or
              advertising cookies.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-950">
              How we use your information
            </h2>
            <p className="mt-3">
              We use these details only to respond to your enquiry, to talk
              through your project and to prepare and send you a quote. If you
              go ahead with work, we keep your contact details to manage the job
              and to stay in touch about it.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-950">
              Sharing your information
            </h2>
            <p className="mt-3">
              We do not sell, trade or share your personal information with third
              parties. Your details are used by iScape Limited only. The one
              exception is where we are required to disclose information by law.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-950">
              Keeping your information secure
            </h2>
            <p className="mt-3">
              Enquiries are sent to our business email inbox and kept only for as
              long as we need them for the purpose above. We take reasonable care
              to protect the information we hold from loss, misuse and
              unauthorised access.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-950">
              Accessing or correcting your information
            </h2>
            <p className="mt-3">
              You can ask us what personal information we hold about you, ask us
              to correct it, or ask us to delete it. Email us at{" "}
              <a
                href="mailto:iscapework@gmail.com"
                className="font-medium text-slate-950 underline underline-offset-4"
              >
                iscapework@gmail.com
              </a>{" "}
              and we will respond within a reasonable time.
            </p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
