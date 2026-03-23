"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const offers = [
  {
    icon: "🛡️",
    title: "Prévoyance & Santé",
    description:
      "Adaptation pénibilité, absentéisme, démographie. Offre tarifaire compétitive et sur-mesure.",
    href: "/prevoyance-sante",
    color: "from-teal to-teal-light",
  },
  {
    icon: "💰",
    title: "Épargne Salariale",
    description:
      "PEE, PER, intéressement, participation. Simulation budgétaire, appel d'offres, rédaction d'accord.",
    href: "/epargne-salariale",
    color: "from-gold to-orange",
  },
  {
    icon: "⚖️",
    title: "Consolidation AGIRC-ARRCO",
    description:
      "Taux dérogatoires, taux moyen pondéré, négociation caisses, accord d'entreprise.",
    href: "/agirc-arrco",
    color: "from-teal to-teal-light",
  },
  {
    icon: "👔",
    title: "Package Dirigeants",
    description:
      "Structures juridiques, statuts, mix rémunératoire, optimisation fiscale et sociale.",
    href: "/package-dirigeants",
    color: "from-gold to-orange",
  },
  {
    icon: "🏁",
    title: "IFC",
    description:
      "Passif social, prévisionnel 10 ans, validation CAC, optimisation comptable.",
    href: "/ifc",
    color: "from-teal to-teal-light",
  },
];

export function OffersGrid() {
  return (
    <section className="py-32 relative">
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-gold/3 blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="text-gold text-sm font-medium uppercase tracking-widest">
              Nos expertises
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4">
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
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="h-full glass rounded-2xl p-8 hover:border-gold/20 transition-all duration-500 relative overflow-hidden"
                >
                  {/* Hover gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${offer.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  <div className="relative z-10">
                    <div className="text-4xl mb-6">{offer.icon}</div>
                    <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-gold transition-colors">
                      {offer.title}
                    </h3>
                    <p className="text-cream/50 text-sm leading-relaxed mb-6">
                      {offer.description}
                    </p>
                    <span className="text-gold text-sm font-medium flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      En savoir plus
                      <span className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </div>
                </motion.div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
