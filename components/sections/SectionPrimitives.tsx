import type { ReactNode } from "react";

type SectionEyebrowProps = {
  number: number;
  label: string;
  className?: string;
};

type SectionContainerProps = {
  children: ReactNode;
  className?: string;
};

export type HomepageSectionProps = {
  sectionNumber: number;
};

export function SectionEyebrow({ number, label, className = "" }: SectionEyebrowProps) {
  return (
    <p className={`section-label section-eyebrow mb-4 ${className}`}>
      {String(number).padStart(2, "0")} — {label}
    </p>
  );
}

export function SectionContainer({ children, className = "" }: SectionContainerProps) {
  return <div className={`editorial-container ${className}`}>{children}</div>;
}
