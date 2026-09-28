import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Ashlaur Construction in Chicago",
  description:
    "Contact Ashlaur Construction to discuss your project scope, schedule, and delivery needs in Chicago and the Midwest.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}