import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Team | Ashlaur Construction",
  description: "Meet the Ashlaur Construction team and leadership.",
};

export default function TeamPage() {
  redirect("/about/team");
}
