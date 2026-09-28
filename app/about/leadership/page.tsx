import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "About Leadership | Ashlaur Construction",
  description: "Meet the leadership team behind Ashlaur Construction.",
};

export default function AboutLeadershipRedirect() {
  redirect("/about/team");
}
