import type { Metadata } from "next";
import ContactPageClient from "./contact-page-client";

export const metadata: Metadata = {
  title: "Contact | iScape Limited - Wellington Landscape Enquiries",
  description:
    "Contact iScape Limited for quotes on Wellington retaining walls, ready lawn installations, and compliant landscape design.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
