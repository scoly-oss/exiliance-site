"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const offers = [
  {
    icon: "🛡️",
    title: "Prévoyance & Santé",
    text: "Audit, mise en concurrence, pilotage. Offre tarifaire compétitive adaptée à votre démographie.",
    href: "/prevoyance-sante",
    span: "md:col-span-2",
    bg: "blob-teal",
  },
  {
    icon: "💰",
    title: "Épargne Salariale",
    text: "PEE, PER, intéressement. Simulation budgétaire et rédaction d'accords.",
    href: "/epargne-salariale",
    span: "",
    bg: "blob-gold",
  },
  {
    icon: "⚖️",
    title: "AGIRC-ARRCO",
    text: "Harmonisation des taux post-fusion, négociation caisses.",
    href: "/agirc-arrco",
    span: "",
    bg: "blob-green",
  },
  {
    icon: "👔",
    title: "Package Dirigeants",
    text: "Optimisation fiscale et sociale, structures juridiques, mix rémunératoire.",
    href: "/package-dirigeants",
    span: "",
    bg: "blob-gold",
  },
  {
    icon: "🏁",
    title: "IFC",
    text: "Passif social, prévisionnel 10 ans, validation CAC, externalisation.",
    href: "/ifc",
    span: "md:col-span-2",
    bg: "blob-teal",
  },
];

export function OffersGrid() {
  return (
    <section className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="max-w-2xl mb-16">
            <div className="pill bg-gold/8 text-gold border border-gold/15 mb-6">Expertises</div>
            <h2 className="font-heading text-3xl md:text-[2.75rem] font-bold leading-tight text-navy">
              5 offres, une vision.
            </h2>
          </div>
        </ScrollReveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {offers.map((o, i) => (
            <ScrollReveal key={o.title} delay={i * 0.08} className={o.span}>
              <Link href={o.href} className="block group h-full">
                <div className={`bento p-8 h-full relative ${o.bg}`}>
                  <div className="text-3xl mb-5">{o.icon}</div>
                  <h3 className="font-heading text-xl font-bold text-navy mb-2 group-hover:text-teal transition-colors">
                    {o.title}
                  </h3>
                  <p className="text-gray-600 text-[15px] leading-relaxed mb-4">{o.text}</p>
                  <span className="text-teal text-[14px] font-medium inline-flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all">
                    Découvrir
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
