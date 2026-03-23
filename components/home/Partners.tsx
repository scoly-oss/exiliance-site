"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Partners() {
  return (
    <section className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <ScrollReveal>
            <div className="bento p-8 h-full">
              <div className="pill bg-teal/5 text-teal border border-teal/10 mb-6">Partenaires</div>
              <div className="space-y-3">
                {[
                  { name: "Dairia Avocats", role: "Conformité et sécurisation juridique", primary: true },
                  { name: "Gerep", role: "Gestion opérationnelle des dossiers", primary: false },
                  { name: "Service France Garantie", role: "Accréditation Made in France", primary: false },
                ].map((p) => (
                  <div key={p.name} className={`p-4 rounded-2xl border transition-all ${p.primary ? "border-teal/15 bg-teal/3" : "border-gray-100 hover:border-gray-200"}`}>
                    <div className="font-semibold text-navy text-[15px]">{p.name}</div>
                    <div className="text-gray-600 text-[14px] mt-0.5">{p.role}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="bento p-8 h-full bg-cream-warm">
              <div className="pill bg-gold/8 text-gold border border-gold/15 mb-6">Engagements</div>
              <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
                Chez Exiliance, l&apos;engagement dépasse la mission professionnelle.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100">
                  <span className="text-xl">🎗️</span>
                  <span className="text-navy font-medium text-[15px]">Mécène « Rêver pour Guérir »</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100">
                  <span className="text-xl">🇫🇷</span>
                  <span className="text-navy font-medium text-[15px]">Accréditation Made in France</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
