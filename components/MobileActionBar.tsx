"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { companyInfo } from "@/data/company";
import { trackEvent } from "@/lib/analytics";

export default function MobileActionBar() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const lastYRef = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const threshold =
      pathname === "/"
        ? Math.max(
            window.innerHeight * 0.56,
            ((document.querySelector("[data-home-hero]") as HTMLElement | null)?.offsetHeight ?? 0) * 0.5
          )
        : 180;

    const onScroll = () => {
      const y = window.scrollY;
      const scrollingDown = y > lastYRef.current + 6;
      const scrollingUp = y < lastYRef.current - 6;

      if (y <= threshold) {
        setIsVisible(false);
      } else if (!scrollingDown && !scrollingUp) {
        setIsVisible(true);
      } else if (scrollingUp) {
        setIsVisible(true);
      } else if (scrollingDown) {
        setIsVisible(false);
      }

      lastYRef.current = y;
    };

    lastYRef.current = window.scrollY;
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    if (!isVisible) {
      document.body.classList.remove("has-mobile-action-bar");
      return;
    }

    document.body.classList.add("has-mobile-action-bar");
    return () => document.body.classList.remove("has-mobile-action-bar");
  }, [isVisible]);

  if (pathname === "/contact" || !isVisible) {
    return null;
  }

  return (
    <div className="mobile-action-bar fixed bottom-0 left-0 right-0 z-40 border-t border-white/15 bg-[#f5f3ef]/95 px-4 pb-[calc(0.5rem+env(safe-area-inset-bottom))] pt-2 backdrop-blur-sm md:hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3">
        <a
          href={`tel:${companyInfo.phone.replace(/[^0-9+]/g, "")}`}
          className="mobile-action-button inline-flex min-h-11 items-center justify-center rounded-sm border border-[#111214] px-4 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-[#111214] hover:bg-[#efede8]"
          onClick={() => trackEvent("phone_click", { source: "mobile_action_bar" })}
        >
          Call
        </a>
        <Link
          href="/contact"
          className="mobile-action-button inline-flex min-h-11 items-center justify-center rounded-sm border border-[#111214] bg-[#111214] px-4 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-[#f5f3ef] hover:bg-[#26282b]"
        >
          Get a Quote
        </Link>
      </div>
    </div>
  );
}
