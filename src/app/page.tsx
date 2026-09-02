import type { Metadata } from "next";
import HomePageClient from "./page-client";

export const metadata: Metadata = {
  title: "iScape Limited | Wellington retaining walls & landscaping",
  description:
    "Wellington retaining wall and ready lawn specialists offering NZS 3604 timber wall design, council compliance, drainage systems and earthquake-resilient landscapes.",
};

export default function Home() {
  return <HomePageClient />;
}
