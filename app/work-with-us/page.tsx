import type { Metadata } from "next";
import WorkWithUsPageClient from "./WorkWithUsPageClient";

export const metadata: Metadata = {
  title: "Work With Us | Trade Partners & Bid Invites",
  description:
    "Invite Ashlaur Construction to bid, review qualifications, and request our prequalification packet.",
};

export default function WorkWithUsPage() {
  return <WorkWithUsPageClient />;
}
