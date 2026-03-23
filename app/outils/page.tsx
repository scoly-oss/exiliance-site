import { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Outils & Simulateurs",
  description: "Audit flash, simulateurs, quiz, jeux. Évaluez votre protection sociale de manière interactive.",
};

const simulators = [
  {
    icon: "🔍", title: "Audit Flash Protection Sociale", text: "12 questions pour évaluer conformité et performance. Score instantané + rapport.",
    href: "/outils/audit-flash", badge: "Populaire", badgeColor: "bg-teal/5 text-teal border-teal/10", span: "md:col-span-2",
  },
  {
    icon: "🏁", title: "Simulateur Coût IFC", text: "Estimez votre passif social. Projection 10 ans, coût d'externalisation.",
    href: "/outils/simulateur-ifc", badge: "Nouveau", badgeColor: "bg-gold/8 text-gold border-gold/15", span: "",
  },
  {
    icon: "💰", title: "Simulateur Épargne Salariale", text: "ROI intéressement, PEE/PER, économies employeur vs prime classique.",
    href: "/outils/simulateur-epargne", badge: "", badgeColor: "", span: "",
  },
  {
    icon: "👔", title: "Benchmark Dirigeants", text: "Comparez votre package dirigeant au marché. 100% confidentiel.",
    href: "/outils/benchmark-dirigeants", badge: "", badgeColor: "", span: "",
  },
  {
    icon: "⚖️", title: "Score AGIRC-ARRCO", text: "Détectez les écarts de taux post-fusion. Taux moyen pondéré calculé.",
    href: "/outils/score-agirc-arrco", badge: "", badgeColor: "", span: "",
  },
];

const games = [
  {
    icon: "🧠", title: "Quiz Protection Sociale", text: "10 questions pour tester vos connaissances. PASS, forfait social, portabilité...",
    href: "/outils/quiz", color: "blob-gold",
  },
  {
    icon: "🎯", title: "Mythes vs Réalités", text: "10 affirmations. Démêlez le vrai du faux sur la protection sociale !",
    href: "/outils/mythes-realites", color: "blob-green",
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
                Simulateurs, quiz & jeux.
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                Évaluez, simulez, apprenez. Tous nos outils sont gratuits et basés sur les données réglementaires en vigueur.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Simulateurs */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-heading text-2xl font-bold text-navy mb-8">Simulateurs & Diagnostics</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {simulators.map((t, i) => (
              <ScrollReveal key={t.title} delay={i * 0.06} className={t.span}>
                <Link href={t.href} className="block group h-full">
                  <div className="bento p-8 h-full relative">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-3xl">{t.icon}</div>
                      {t.badge && <span className={`pill text-[12px] border ${t.badgeColor}`}>{t.badge}</span>}
                    </div>
                    <h3 className="font-heading text-lg font-bold text-navy mb-2 group-hover:text-teal transition-colors">{t.title}</h3>
                    <p className="text-gray-600 text-[15px] leading-relaxed mb-4">{t.text}</p>
                    <span className="text-teal text-[14px] font-medium inline-flex items-center gap-1.5">
                      Lancer l&apos;outil →
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Games */}
      <section className="py-16 pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-heading text-2xl font-bold text-navy mb-8">Apprendre en jouant</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {games.map((g, i) => (
              <ScrollReveal key={g.title} delay={i * 0.08}>
                <Link href={g.href} className="block group h-full">
                  <div className={`bento p-8 h-full relative ${g.color}`}>
                    <div className="text-4xl mb-4">{g.icon}</div>
                    <h3 className="font-heading text-xl font-bold text-navy mb-2 group-hover:text-teal transition-colors">{g.title}</h3>
                    <p className="text-gray-600 text-[15px] leading-relaxed mb-4">{g.text}</p>
                    <span className="text-teal text-[14px] font-medium inline-flex items-center gap-1.5">
                      Jouer →
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
