import type { Metadata } from "next";
import ContactPageClient from "./contact-page-client";

export const metadata: Metadata = {
  title: "Contact Us — Wellington Landscape Enquiries",
  description:
    "Contact iScape Limited for a quote on Wellington retaining walls, fencing, decking, ready lawn and full landscape projects. Email iscapework@gmail.com or call 021 1095 981.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
