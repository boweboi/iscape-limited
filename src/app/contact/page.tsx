import type { Metadata } from "next";
import ContactPageClient from "./contact-page-client";

export const metadata: Metadata = {
  title: "Contact Us — Wellington & Kāpiti Landscape Enquiries",
  description:
    "Contact iScape Limited for a free quote on retaining walls, fencing, decking, ready lawn and full landscape projects across Wellington and the Kāpiti Coast. Email iscapework@gmail.com or call 021 1095 981.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
