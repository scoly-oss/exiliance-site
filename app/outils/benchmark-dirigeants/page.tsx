import { Metadata } from "next";
import { BenchmarkDirigeants } from "@/components/simulators/BenchmarkDirigeants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = { title: "Benchmark Dirigeants" };

export default function BenchmarkPage() {
  return (
    <>
      <section className="relative pt-28 pb-12">
        <div className="absolute inset-0 blob-teal" />
        <div className="relative max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-2xl mb-10">
              <div className="pill bg-orange/8 text-orange border border-orange/15 mb-6">👔 Benchmark</div>
              <h1 className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] text-navy mb-4">
                Où se situe votre package dirigeant ?
              </h1>
              <p className="text-gray-600 text-lg">Comparez rémunération, prévoyance et retraite supplémentaire par rapport au marché. 100% confidentiel.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <section className="py-12 pb-28"><div className="max-w-6xl mx-auto px-6"><BenchmarkDirigeants /></div></section>
    </>
  );
}
