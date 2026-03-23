import { Metadata } from "next";
import { SimulateurIFC } from "@/components/simulators/SimulateurIFC";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = { title: "Simulateur Coût IFC" };

export default function SimulateurIFCPage() {
  return (
    <>
      <section className="relative pt-28 pb-12">
        <div className="absolute inset-0 blob-gold" />
        <div className="relative max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-2xl mb-10">
              <div className="pill bg-gold/8 text-gold border border-gold/15 mb-6">🏁 Simulateur IFC</div>
              <h1 className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] text-navy mb-4">
                Estimez votre passif IFC.
              </h1>
              <p className="text-gray-600 text-lg">Projection à 10 ans, coût d&apos;externalisation, économie IS. Basé sur l&apos;Art. L.1234-9 du Code du travail.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <section className="py-12 pb-28"><div className="max-w-6xl mx-auto px-6"><SimulateurIFC /></div></section>
    </>
  );
}
