import Image from "next/image";

type MarketHeroProps = {
  title: string;
  subtitle: string;
  backgroundImage: string;
};

const MarketHero = ({ title, subtitle, backgroundImage }: MarketHeroProps) => {
  return (
    <section className="relative overflow-hidden min-h-[82vh] flex items-end bg-[#111214]">
      <Image
        src={backgroundImage}
        alt={title}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 w-full py-20 lg:py-24">
        <div className="editorial-container">
          <div className="space-y-6 text-white">
            <p className="section-label text-white/75">01 — Market</p>
            <h1 className="font-display text-[clamp(3rem,9vw,10rem)] leading-[0.88] tracking-tight">
              {title}
            </h1>
            <p className="text-lg lg:text-xl text-[#ece7de] max-w-[60ch] leading-relaxed">{subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketHero;