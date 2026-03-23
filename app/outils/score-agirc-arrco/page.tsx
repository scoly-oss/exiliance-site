import { Metadata } from "next";
import { ScoreAGIRC } from "@/components/simulators/ScoreAGIRC";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = { title: "Score Conformité AGIRC-ARRCO" };

export default function ScoreAGIRCPage() {
  return (
    <>
      <section className="relative pt-28 pb-12">
        <div className="absolute inset-0 blob-teal" />
        <div className="relative max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-2xl mb-10">
              <div className="pill bg-indigo/8 text-indigo border border-indigo/15 mb-6">⚖️ AGIRC-ARRCO</div>
              <h1 className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] text-navy mb-4">
                Détectez vos écarts de taux.
              </h1>
              <p className="text-gray-600 text-lg">Analysez les taux de retraite complémentaire de vos entités post-fusion. Calcul du taux moyen pondéré.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <section className="py-12 pb-28"><div className="max-w-6xl mx-auto px-6"><ScoreAGIRC /></div></section>
    </>
  );
}
