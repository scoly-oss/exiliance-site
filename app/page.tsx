import { Hero } from "@/components/home/Hero";
import { WhySection } from "@/components/home/WhySection";
import { OffersGrid } from "@/components/home/OffersGrid";
import { Approach } from "@/components/home/Approach";
import { StatsCounter } from "@/components/home/StatsCounter";
import { Partners } from "@/components/home/Partners";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <WhySection />
      <Approach />
      <OffersGrid />
      <StatsCounter />
      <Partners />
      <CTASection />
    </>
  );
}
