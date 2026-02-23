import Image from "next/image";

type MarketHeroProps = {
  title: string;
  subtitle: string;
  backgroundImage: string;
};

const MarketHero = ({ title, subtitle, backgroundImage }: MarketHeroProps) => {
  return (
    <section className="relative overflow-hidden min-h-[60vh] flex items-end">
      <Image
        src={backgroundImage}
        alt={title}
        fill
        priority
        className="object-cover object-center"
        sizes="100%"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/65" />

      <div className="relative z-10 w-full py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="space-y-6 text-white">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter">
              {title}
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 max-w-4xl leading-relaxed">{subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketHero;