import type { Metadata } from "next";
import HomePageClient from "./page-client";

export const metadata: Metadata = {
  description:
    "Wellington landscape creation, start to finish. iScape Limited builds timber retaining walls, ready lawn, fencing and decks with NZS 3604 timber wall design, drainage and council compliance.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Wellington Retaining Walls, Landscaping & Ready Lawn | iScape Limited",
    description:
      "Landscape creation, start to finish, across the Wellington region. Timber retaining walls, ready lawn, fencing and decks built to last.",
    url: "/",
  },
};

export default function Home() {
  return <HomePageClient />;
}
