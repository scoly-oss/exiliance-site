import { Metadata } from "next";
import { QuizProtectionSociale } from "@/components/simulators/QuizProtectionSociale";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = { title: "Quiz Protection Sociale" };

export default function QuizPage() {
  return (
    <>
      <section className="relative pt-28 pb-12">
        <div className="absolute inset-0 blob-gold" />
        <div className="relative max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-2xl mb-10">
              <div className="pill bg-gold/8 text-gold border border-gold/15 mb-6">🧠 Quiz</div>
              <h1 className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] text-navy mb-4">
                Testez vos connaissances.
              </h1>
              <p className="text-gray-600 text-lg">10 questions sur la protection sociale en France. PASS, forfait social, portabilité... Êtes-vous incollable ?</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <section className="py-12 pb-28"><div className="max-w-6xl mx-auto px-6"><QuizProtectionSociale /></div></section>
    </>
  );
}
