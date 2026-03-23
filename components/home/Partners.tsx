"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

const partners = [
  {
    name: "Dairia Avocats",
    role: "Conformité et sécurisation des sujets sociaux",
    highlight: true,
  },
  {
    name: "Gerep",
    role: "Gestion réactive et opérationnelle des dossiers",
    highlight: false,
  },
  {
    name: "Service France Garantie",
    role: "Engagement souverain, accréditation Made in France",
    highlight: false,
  },
];

const engagements = [
  { icon: "🎗️", text: "Mécène de « Rêver pour Guérir »" },
  { icon: "🇫🇷", text: "Accréditation Made in France" },
];

export function Partners() {
  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="text-gold text-sm font-medium uppercase tracking-widest">
              Écosystème
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4">
              Partenaires &{" "}
              <span className="gradient-text">Engagements.</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Partners */}
          <ScrollReveal>
            <div className="glass rounded-2xl p-8">
              <h3 className="font-heading text-xl font-bold text-gold mb-6">
                Partenaires de Confiance
              </h3>
              <div className="space-y-4">
                {partners.map((p) => (
                  <div
                    key={p.name}
                    className={`p-4 rounded-xl border transition-all ${
                      p.highlight
                        ? "border-gold/30 bg-gold/5"
                        : "border-white/5 hover:border-white/10"
                    }`}
                  >
                    <div className="font-semibold text-cream">{p.name}</div>
                    <div className="text-cream/50 text-sm mt-1">{p.role}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Engagements */}
          <ScrollReveal delay={0.2}>
            <div className="glass rounded-2xl p-8 bg-gradient-to-br from-navy-light to-teal/10">
              <h3 className="font-heading text-xl font-bold text-gold mb-6">
                Engagements Sociétaux
              </h3>
              <p className="text-cream/60 mb-8 leading-relaxed">
                Chez Exiliance, l&apos;engagement dépasse la mission professionnelle.
                Nous croyons en une protection sociale qui sert le bien commun.
              </p>
              <div className="space-y-4">
                {engagements.map((e) => (
                  <div
                    key={e.text}
                    className="flex items-center gap-4 p-4 rounded-xl border border-white/5"
                  >
                    <span className="text-2xl">{e.icon}</span>
                    <span className="text-cream/80 font-medium">{e.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
