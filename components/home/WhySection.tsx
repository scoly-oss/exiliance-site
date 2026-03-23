"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

const problems = [
  { icon: "⚡", title: "Conformité incertaine", text: "Vos régimes respectent-ils vraiment les obligations conventionnelles ?" },
  { icon: "📉", title: "Coûts opaques", text: "Hausses de cotisations subies, prestations peu lisibles, pilotage inexistant." },
  { icon: "💣", title: "Passif social ignoré", text: "IFC non provisionnées, taux AGIRC-ARRCO non harmonisés après fusion." },
  { icon: "🎯", title: "Attractivité menacée", text: "Sans politique sociale claire, attirer et retenir les talents est un défi." },
];

export function WhySection() {
  return (
    <section id="why" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="max-w-2xl mb-16">
            <div className="pill bg-orange/5 text-orange border border-orange/10 mb-6">Le constat</div>
            <h2 className="font-heading text-3xl md:text-[2.75rem] font-bold leading-tight text-navy mb-5">
              80% des entreprises subissent leur protection sociale.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Nous transformons cette contrainte en avantage stratégique mesurable.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {problems.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.08}>
              <div className="bento p-7 h-full">
                <div className="text-2xl mb-4">{p.icon}</div>
                <h3 className="font-semibold text-navy text-[17px] mb-2">{p.title}</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">{p.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
