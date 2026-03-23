import { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "L'Équipe",
  description: "L'équipe Exiliance : expertise, indépendance, transparence et proximité au service de votre protection sociale.",
};

const values = [
  { icon: "🌱", title: "Durabilité", text: "Dispositifs pérennes et équilibrés, anticipation réglementaire et démographique." },
  { icon: "⚡", title: "Adaptabilité", text: "Agilité, contacts réguliers, ajustement permanent des programmes." },
  { icon: "❤️", title: "Responsabilité Sociale", text: "Protection sociale au-delà de l'obligation — bien-être, RSE, engagement humain." },
  { icon: "🔍", title: "Exemplarité & Transparence", text: "Régimes lisibles, gouvernance responsable, outils simples et tracés." },
];

export default function Equipe() {
  return (
    <>
      <section className="relative pt-28 pb-16">
        <div className="absolute inset-0 blob-teal" />
        <div className="absolute inset-0 blob-gold" />
        <div className="relative max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-2xl">
              <div className="pill bg-teal/5 text-teal border border-teal/10 mb-6">L&apos;équipe</div>
              <h1 className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.1] text-navy mb-5">
                L&apos;humain au cœur de la performance.
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                Exiliance repose sur la complémentarité des talents, tournée vers la performance dans un cadre humain bienveillant.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Didier */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="bento p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="flex items-center justify-center">
                  <div className="w-32 h-32 rounded-3xl bg-teal/10 flex items-center justify-center text-5xl">👤</div>
                </div>
                <div className="md:col-span-2">
                  <h2 className="font-heading text-2xl font-bold text-navy mb-1">Didier Meslard</h2>
                  <p className="text-teal font-medium text-[15px] mb-4">Président — Fondateur</p>
                  <p className="text-gray-600 text-[15px] leading-relaxed">
                    Expert en protection sociale depuis plus de 20 ans, Didier fonde Exiliance en 2017 avec la conviction que le courtage d&apos;assurance de personnes mérite une approche sur-mesure, indépendante et transparente. Son expertise couvre la santé, la prévoyance, l&apos;épargne salariale et la retraite supplémentaire.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-2xl mb-14">
              <div className="pill bg-gold/8 text-gold border border-gold/15 mb-6">ADN</div>
              <h2 className="font-heading text-3xl md:text-[2.5rem] font-bold leading-tight text-navy">Nos valeurs.</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.08}>
                <div className="bento p-7 h-full">
                  <div className="text-2xl mb-4">{v.icon}</div>
                  <h3 className="font-semibold text-navy text-[17px] mb-2">{v.title}</h3>
                  <p className="text-gray-600 text-[15px] leading-relaxed">{v.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Keyfacts */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="section-dark rounded-3xl p-10 md:p-14">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                  { v: "2017", l: "Création" },
                  { v: "Paris · Lyon", l: "Implantations" },
                  { v: "ORIAS", l: "17002631" },
                  { v: "SFG", l: "Made in France" },
                ].map((k) => (
                  <div key={k.l}>
                    <div className="font-heading text-2xl font-bold text-white mb-1">{k.v}</div>
                    <div className="text-white/50 text-[13px]">{k.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
