import type { Metadata } from "next";
import HomePageClient from "./page-client";

export const metadata: Metadata = {
  title: { absolute: "Iscape Limited, Landscaping Wellington" },
  description:
    "LBP-qualified landscaping and retaining wall builders for Wellington and the Kāpiti Coast. Retaining walls, decks, fencing, ready lawn, planting and concrete work, start to finish.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Iscape Limited, Landscaping Wellington",
    description:
      "Landscape creation, start to finish, across the Wellington region and the Kāpiti Coast. Retaining walls, decks, fencing, ready lawn and concrete work built to last.",
    url: "/",
  },
};

export default function Home() {
  return <HomePageClient />;
}
