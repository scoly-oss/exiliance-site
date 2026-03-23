"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

const painPoints = [
  {
    icon: "⚠️",
    title: "Conformité incertaine",
    description:
      "Vos régimes santé, prévoyance ou retraite respectent-ils vraiment les obligations conventionnelles et légales ?",
  },
  {
    icon: "📊",
    title: "Coûts opaques",
    description:
      "Des hausses de cotisations subies, des prestations peu lisibles, un pilotage financier inexistant.",
  },
  {
    icon: "⏰",
    title: "Passif social ignoré",
    description:
      "Les indemnités de fin de carrière, les taux AGIRC-ARRCO non harmonisés — des bombes à retardement silencieuses.",
  },
  {
    icon: "🎯",
    title: "Compétitivité entamée",
    description:
      "Sans une politique sociale claire, attirer et retenir les talents devient un défi permanent.",
  },
];

export function WhySection() {
  return (
    <section id="why" className="py-32 relative bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="text-teal text-sm font-medium uppercase tracking-widest">
              Le constat
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4 mb-6 text-navy">
              Pourquoi la protection sociale
              <br />
              <span className="gradient-text">mérite mieux.</span>
            </h2>
            <p className="text-slate max-w-2xl mx-auto text-lg">
              Pour 80% des entreprises, la protection sociale reste une
              obligation subie. Nous en faisons un avantage stratégique.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {painPoints.map((point, i) => (
            <ScrollReveal key={point.title} delay={i * 0.1}>
              <div className="group card rounded-2xl p-8 transition-all duration-300">
                <div className="text-3xl mb-4">{point.icon}</div>
                <h3 className="font-heading text-xl font-bold mb-3 text-navy group-hover:text-teal transition-colors">
                  {point.title}
                </h3>
                <p className="text-slate leading-relaxed">
                  {point.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 bg-teal/5 border border-teal/10 rounded-full px-8 py-4">
              <span className="text-teal text-lg">→</span>
              <p className="text-slate">
                <span className="font-semibold text-navy">
                  Notre mission :
                </span>{" "}
                transformer ces risques en leviers de performance mesurable.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
