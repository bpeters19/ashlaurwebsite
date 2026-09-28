"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { companyInfo } from "@/data/company";
import { trackEvent } from "@/lib/analytics";

export default function MobileActionBar() {
  const pathname = usePathname();

  if (pathname === "/contact") {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-sm px-4 py-3">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3">
        <a
          href={`tel:${companyInfo.phone.replace(/[^0-9+]/g, "")}`}
          className="inline-flex items-center justify-center rounded-md border border-blue-700 px-4 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-50"
          onClick={() => trackEvent("phone_click", { source: "mobile_action_bar" })}
        >
          Call
        </a>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-md bg-blue-700 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-800"
        >
          Get a Quote
        </Link>
      </div>
    </div>
  );
}
