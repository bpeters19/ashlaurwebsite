import Link from "next/link";
import { markets } from "@/data/markets";
import { SHOW_PLACEHOLDER_CONTENT } from "@/data/siteConfig";
import { SectionContainer, SectionEyebrow, type HomepageSectionProps } from "./SectionPrimitives";

const ExpertiseMarkets = ({ sectionNumber }: HomepageSectionProps) => {
  return (
    <section className="w-full bg-concrete py-20 lg:py-28">
      <SectionContainer>
        <div className="mb-14 lg:mb-20">
          <SectionEyebrow number={sectionNumber} label="Markets" />
          <h2
            className="section-heading max-w-5xl text-ink"
          >
            Expertise for every market.
          </h2>
          <p className="max-w-4xl text-lg leading-relaxed text-ink/70 md:text-xl lg:text-2xl">
            Across every market and sector, our expertise ensures we meet the unique demands of your project.
          </p>
        </div>

        <div className="market-list grid grid-cols-1 border-y border-ink/15 md:grid-cols-2 lg:grid-cols-4" aria-label="Market sectors">
          {markets.map((market, index) => (
            <Link
              key={market.slug}
              href={market.path}
              className="market-row relative grid min-h-24 grid-cols-[2rem_minmax(0,1fr)_1.5rem] items-center gap-3 border-b border-ink/15 px-5 py-5"
            >
              <span className="font-technical text-xs text-ink/45">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="market-copy min-w-0">
                <span className="market-name block whitespace-nowrap font-sans text-[clamp(1rem,1.35vw,1.375rem)] font-normal leading-tight text-ink">
                  {market.name}
                </span>
                {SHOW_PLACEHOLDER_CONTENT && (
                  <span className="market-description-wrap grid grid-rows-[0fr]">
                    <span className="market-description overflow-hidden text-ellipsis whitespace-nowrap pt-0 text-sm leading-snug text-ink/75">
                      {market.shortDescription}
                    </span>
                  </span>
                )}
              </span>
              <span className="market-arrow justify-self-end font-sans text-xl font-normal text-ink/55" aria-hidden="true">
                →
              </span>
            </Link>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
};

export default ExpertiseMarkets;
