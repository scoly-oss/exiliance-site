import { Metadata } from "next";
import { OfferHero } from "@/components/offers/OfferHero";
import { ThreeSteps } from "@/components/offers/ThreeSteps";
import { OfferDetails } from "@/components/offers/OfferDetails";
import { OfferCTA } from "@/components/offers/OfferCTA";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "IFC — Indemnités de Fin de Carrière",
  description:
    "Sécurisez et optimisez vos indemnités de fin de carrière. État des lieux, prévisionnel 10 ans, externalisation du passif.",
};

const steps = [
  {
    number: "1",
    title: "État des lieux",
    description:
      "Évaluation des coûts sociaux des collaborateurs de 55 ans et plus. Cartographie du passif social actuel.",
  },
  {
    number: "2",
    title: "Prévisionnel 10 ans",
    description:
      "Projection des engagements, validation CAC, choix entre internalisation ou externalisation du passif.",
  },
  {
    number: "3",
    title: "Mise en œuvre",
    description:
      "Souscription du contrat d'assurance, planification des versements, optimisation comptable et fiscale.",
  },
];

const details = [
  {
    icon: "💰",
    title: "Passif social maîtrisé",
    description:
      "Identification précise des engagements IFC, souvent sous-estimés ou ignorés dans les comptes.",
  },
  {
    icon: "📊",
    title: "Conformité IFRS/ANC",
    description:
      "Respect des normes comptables internationales et françaises pour la comptabilisation des engagements.",
  },
  {
    icon: "🔒",
    title: "Externalisation sécurisée",
    description:
      "Transfert du passif vers un contrat d'assurance dédié, libérant le bilan de l'entreprise.",
  },
  {
    icon: "📈",
    title: "Optimisation fiscale",
    description:
      "Déductibilité des provisions et des cotisations versées au contrat d'externalisation.",
  },
  {
    icon: "✅",
    title: "Validation CAC",
    description:
      "Dossier complet pour les commissaires aux comptes, avec actualisations annuelles.",
  },
  {
    icon: "⚖️",
    title: "Cadre juridique",
    description:
      "Dairia Avocats sécurise les accords et vérifie la conformité avec les obligations légales et conventionnelles.",
  },
];

export default function IFC() {
  return (
    <>
      <OfferHero
        icon="🏁"
        title="Solution IFC"
        subtitle="Indemnités de Fin de Carrière"
        description="Les Indemnités de Fin de Carrière représentent un passif social souvent sous-estimé. Exiliance structure une approche complète pour sécuriser et optimiser cet engagement employeur."
      />
      <ThreeSteps
        title="Notre réponse en 3 étapes"
        steps={steps}
      />
      <OfferDetails
        title="Ce que nous couvrons"
        details={details}
      />

      {/* Pricing section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-teal text-sm font-medium uppercase tracking-widest">
                Tarification
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mt-4 text-navy">
                Transparente et prévisible
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  label: "TPE",
                  detail: "< 100 salariés",
                  price: "3 000€ HT",
                },
                {
                  label: "Groupe",
                  detail: "< 150 salariés",
                  price: "4 500€ HT",
                  featured: true,
                },
                {
                  label: "Sur-mesure",
                  detail: "Au-delà",
                  price: "300€/h",
                },
              ].map((plan) => (
                <div
                  key={plan.label}
                  className={`card rounded-2xl p-8 text-center ${
                    plan.featured ? "ring-2 ring-teal" : ""
                  }`}
                >
                  <div className="text-sm font-medium text-teal uppercase tracking-wider mb-2">
                    {plan.label}
                  </div>
                  <div className="text-slate text-sm mb-4">{plan.detail}</div>
                  <div className="font-heading text-3xl font-bold text-navy">
                    {plan.price}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <OfferCTA
        description="Estimez votre passif IFC et découvrez les options d'externalisation adaptées."
        primaryText="Simuler mon passif IFC"
      />
    </>
  );
}
