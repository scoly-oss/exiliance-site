"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const offers = [
  {
    icon: "🛡️",
    title: "Prévoyance & Santé",
    description:
      "Adaptation pénibilité, absentéisme, démographie. Offre tarifaire compétitive et sur-mesure.",
    href: "/prevoyance-sante",
  },
  {
    icon: "💰",
    title: "Épargne Salariale",
    description:
      "PEE, PER, intéressement, participation. Simulation budgétaire, appel d'offres, rédaction d'accord.",
    href: "/epargne-salariale",
  },
  {
    icon: "⚖️",
    title: "Consolidation AGIRC-ARRCO",
    description:
      "Taux dérogatoires, taux moyen pondéré, négociation caisses, accord d'entreprise.",
    href: "/agirc-arrco",
  },
  {
    icon: "👔",
    title: "Package Dirigeants",
    description:
      "Structures juridiques, statuts, mix rémunératoire, optimisation fiscale et sociale.",
    href: "/package-dirigeants",
  },
  {
    icon: "🏁",
    title: "IFC",
    description:
      "Passif social, prévisionnel 10 ans, validation CAC, optimisation comptable.",
    href: "/ifc",
  },
];

export function OffersGrid() {
  return (
    <section className="py-32 relative bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="text-teal text-sm font-medium uppercase tracking-widest">
              Nos expertises
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4 text-navy">
              5 offres, <span className="gradient-text">une vision.</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer, i) => (
            <ScrollReveal
              key={offer.title}
              delay={i * 0.1}
              className={i === 4 ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <Link href={offer.href} className="block group h-full">
                <div className="h-full card rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1">
                  <div className="text-4xl mb-6">{offer.icon}</div>
                  <h3 className="font-heading text-xl font-bold mb-3 text-navy group-hover:text-teal transition-colors">
                    {offer.title}
                  </h3>
                  <p className="text-slate text-sm leading-relaxed mb-6">
                    {offer.description}
                  </p>
                  <span className="text-teal text-sm font-medium flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    En savoir plus
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
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
