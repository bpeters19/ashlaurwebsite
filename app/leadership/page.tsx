import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Leadership | Ashlaur Construction",
  description: "Learn about Ashlaur Construction leadership and company direction.",
};

export default function LeadershipRedirect() {
  redirect("/team");
}
