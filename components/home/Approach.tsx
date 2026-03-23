"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Évaluation",
    description:
      "Diagnostic documenté des contraintes, usages et objectifs de l'entreprise. Audit complet de l'existant.",
    icon: "🔍",
  },
  {
    number: "02",
    title: "Sécurisation",
    description:
      "Conformité légale et financière, anticipation des risques réglementaires. Dairia Avocats intervient dès cette étape.",
    icon: "🛡️",
  },
  {
    number: "03",
    title: "Optimisation",
    description:
      "Réduction absentéisme, simplification des dispositifs, performance mesurable. Pilotage sur preuves.",
    icon: "📈",
  },
];

export function Approach() {
  return (
    <section className="py-32 relative overflow-hidden bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="text-teal text-sm font-medium uppercase tracking-widest">
              Notre méthode
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4 text-navy">
              3 étapes vers la{" "}
              <span className="gradient-text">sérénité.</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-teal/20 via-gold/20 to-teal/20" />

          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.2}>
              <div className="text-center relative">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-teal text-white mb-8 relative z-10 hover:scale-105 transition-transform">
                  <span className="text-3xl">{step.icon}</span>
                </div>
                <div className="text-teal/40 font-heading text-sm font-bold mb-2">
                  {step.number}
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4 text-navy">
                  {step.title}
                </h3>
                <p className="text-slate leading-relaxed">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.6}>
          <div className="mt-20 card rounded-2xl p-8 text-center">
            <p className="text-slate text-lg">
              <span className="text-teal font-semibold">
                Pilotage sur preuves :
              </span>{" "}
              indicateurs socle, tableaux de bord, plans d&apos;action à l&apos;alerte —
              cap sur sécurité juridique, qualité de service et performance
              économique.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
