"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";

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
    <section className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="text-gold text-sm font-medium uppercase tracking-widest">
              Notre méthode
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4">
              3 étapes vers la{" "}
              <span className="gradient-text">sérénité.</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-24 left-[16%] right-[16%] h-px bg-gradient-to-r from-gold/30 via-orange/30 to-gold/30" />

          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.2}>
              <div className="text-center relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-gold to-orange mb-8 relative z-10"
                >
                  <span className="text-3xl">{step.icon}</span>
                </motion.div>
                <div className="text-gold/40 font-heading text-sm font-bold mb-2">
                  {step.number}
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4">
                  {step.title}
                </h3>
                <p className="text-cream/50 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.6}>
          <div className="mt-20 glass rounded-2xl p-8 text-center">
            <p className="text-cream/60 text-lg">
              <span className="text-gold font-semibold">
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
