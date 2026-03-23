import { Metadata } from "next";
import { SimulateurEpargne } from "@/components/simulators/SimulateurEpargne";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = { title: "Simulateur Épargne Salariale" };

export default function SimulateurEpargnePage() {
  return (
    <>
      <section className="relative pt-28 pb-12">
        <div className="absolute inset-0 blob-green" />
        <div className="relative max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-2xl mb-10">
              <div className="pill bg-green/8 text-green border border-green/15 mb-6">💰 Simulateur Épargne</div>
              <h1 className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] text-navy mb-4">
                Simulez votre épargne salariale.
              </h1>
              <p className="text-gray-600 text-lg">Intéressement, abondement PEE/PER, économies employeur vs prime classique. Données PASS 2025.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <section className="py-12 pb-28"><div className="max-w-6xl mx-auto px-6"><SimulateurEpargne /></div></section>
    </>
  );
}
