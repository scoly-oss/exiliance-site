"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

const steps = [
  { n: "01", title: "Évaluation", text: "Diagnostic documenté de vos contraintes, usages et objectifs. Audit complet de l'existant.", color: "bg-teal" },
  { n: "02", title: "Sécurisation", text: "Conformité légale et financière, anticipation des risques. Dairia Avocats intervient dès cette étape.", color: "bg-gold" },
  { n: "03", title: "Optimisation", text: "Réduction absentéisme, simplification des dispositifs, performance mesurable et pilotée.", color: "bg-green" },
];

export function Approach() {
  return (
    <section id="how" className="py-28 relative">
      <div className="absolute inset-0 blob-green" />
      <div className="relative max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="max-w-2xl mb-16">
            <div className="pill bg-teal/5 text-teal border border-teal/10 mb-6">Méthode</div>
            <h2 className="font-heading text-3xl md:text-[2.75rem] font-bold leading-tight text-navy">
              3 étapes vers la sérénité.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {steps.map((s, i) => (
            <ScrollReveal key={s.n} delay={i * 0.12}>
              <div className="bento p-8 h-full">
                <div className={`w-10 h-10 ${s.color} rounded-xl flex items-center justify-center text-white font-bold text-sm mb-6`}>
                  {s.n}
                </div>
                <h3 className="font-heading text-xl font-bold text-navy mb-3">{s.title}</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">{s.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="mt-8 bento p-6 flex items-center gap-4">
            <div className="w-10 h-10 bg-cream-warm rounded-xl flex items-center justify-center text-teal shrink-0">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <p className="text-gray-600 text-[15px]">
              <span className="font-semibold text-navy">Pilotage sur preuves :</span> indicateurs socle, tableaux de bord, plans d&apos;action — cap sur sécurité juridique et performance économique.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
