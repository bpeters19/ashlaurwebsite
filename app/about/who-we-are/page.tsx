import type { Metadata } from "next";
import WhoWeArePageClient from "./WhoWeArePageClient";

export const metadata: Metadata = {
  title: "Who We Are | Ashlaur Construction",
  description:
    "Learn about Ashlaur Construction's mission, values, and long-term commitment to accountable project delivery.",
};

export default function WhoWeArePage() {
  return <WhoWeArePageClient />;
}
