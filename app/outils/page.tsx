import { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Outils & Simulateurs",
  description: "Audit flash, simulateur IFC, calculateur épargne salariale. Évaluez votre protection sociale en quelques minutes.",
};

const tools = [
  {
    icon: "🔍",
    title: "Audit Flash Protection Sociale",
    text: "12 questions pour évaluer la conformité et la performance de vos dispositifs. Score instantané + rapport détaillé.",
    badge: "Populaire",
    badgeColor: "bg-teal/5 text-teal border-teal/10",
    status: "Bientôt disponible",
  },
  {
    icon: "🏁",
    title: "Simulateur Coût IFC",
    text: "Estimez votre passif social lié aux indemnités de fin de carrière. Projection sur 10 ans avec scénarios d'externalisation.",
    badge: "Nouveau",
    badgeColor: "bg-gold/8 text-gold border-gold/15",
    status: "Bientôt disponible",
  },
  {
    icon: "💰",
    title: "Simulateur Épargne Salariale",
    text: "Comparez PEE vs PER, simulez l'impact fiscal employeur et les gains salariés. ROI en temps réel.",
    badge: "",
    badgeColor: "",
    status: "Bientôt disponible",
  },
  {
    icon: "👔",
    title: "Benchmark Dirigeants",
    text: "Positionnez votre package dirigeant par rapport au marché. 7 questions, résultats confidentiels.",
    badge: "",
    badgeColor: "",
    status: "Bientôt disponible",
  },
  {
    icon: "⚖️",
    title: "Score Conformité AGIRC-ARRCO",
    text: "Détectez les écarts de taux post-fusion en 5 minutes. Identification des risques juridiques et DSN.",
    badge: "",
    badgeColor: "",
    status: "Bientôt disponible",
  },
];

export default function Outils() {
  return (
    <>
      <section className="relative pt-28 pb-16">
        <div className="absolute inset-0 blob-teal" />
        <div className="absolute inset-0 blob-gold" />
        <div className="relative max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-2xl">
              <div className="pill bg-teal/5 text-teal border border-teal/10 mb-6">Outils</div>
              <h1 className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.1] text-navy mb-5">
                Simulateurs & diagnostics gratuits.
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                En quelques minutes, évaluez vos dispositifs et identifiez les leviers d&apos;optimisation. Résultats immédiats.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tools.map((tool, i) => (
              <ScrollReveal key={tool.title} delay={i * 0.08} className={i === 0 ? "md:col-span-2" : ""}>
                <div className={`bento p-8 h-full relative ${i === 0 ? "blob-teal" : ""}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-3xl">{tool.icon}</div>
                    {tool.badge && (
                      <span className={`pill text-[12px] border ${tool.badgeColor}`}>{tool.badge}</span>
                    )}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-navy mb-2">{tool.title}</h3>
                  <p className="text-gray-600 text-[15px] leading-relaxed mb-6">{tool.text}</p>
                  <div className="flex items-center gap-3">
                    <span className="px-5 py-2.5 bg-gray-50 text-gray-400 font-medium rounded-xl text-[14px] border border-gray-100">
                      {tool.status}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <div className="mt-12 bento p-8 text-center relative overflow-hidden">
              <div className="absolute inset-0 blob-gold" />
              <div className="relative z-10">
                <p className="text-gray-600 text-[16px] mb-4">
                  En attendant les simulateurs, nos experts sont disponibles pour un diagnostic personnalisé.
                </p>
                <Link href="/contact" className="inline-flex px-7 py-3.5 bg-teal text-white font-semibold rounded-2xl text-[15px] hover:bg-teal-light transition-all">
                  Prendre rendez-vous →
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
