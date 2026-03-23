import { Metadata } from "next";
import { OfferHero } from "@/components/offers/OfferHero";
import { ThreeSteps } from "@/components/offers/ThreeSteps";
import { OfferDetails } from "@/components/offers/OfferDetails";
import { OfferCTA } from "@/components/offers/OfferCTA";

export const metadata: Metadata = {
  title: "Prévoyance & Santé",
  description:
    "Audit, mise en concurrence et pilotage de vos régimes santé et prévoyance. Offre sur-mesure adaptée à votre démographie.",
};

const steps = [
  {
    number: "1",
    title: "Audit de l'existant",
    description:
      "Analyse des sinistres, démographie, absentéisme. Identification des écarts avec les obligations conventionnelles.",
  },
  {
    number: "2",
    title: "Mise en concurrence",
    description:
      "Appel d'offres structuré auprès des assureurs. Négociation tarifaire et optimisation des garanties.",
  },
  {
    number: "3",
    title: "Pilotage continu",
    description:
      "Tableaux de bord sinistres/primes, suivi annuel, alertes sur les dérives, renégociation proactive.",
  },
];

const details = [
  {
    icon: "📋",
    title: "Conformité CCN",
    description:
      "Vérification de la conformité de vos régimes avec les accords de branche et conventions collectives.",
  },
  {
    icon: "📉",
    title: "Maîtrise du S/P",
    description:
      "Suivi du ratio sinistres/primes, actions correctives, prévention pour contenir les augmentations.",
  },
  {
    icon: "🏥",
    title: "Réseaux de soins",
    description:
      "Accès aux meilleurs réseaux optique, dentaire, hospitalisation. Optimisation du reste à charge.",
  },
  {
    icon: "📊",
    title: "Reporting",
    description:
      "Statistiques détaillées par population, poste de dépenses, avec comparaison marché.",
  },
  {
    icon: "⚖️",
    title: "Sécurisation juridique",
    description:
      "Dairia Avocats valide la conformité des DUE, accords d'entreprise et cas de dispense.",
  },
  {
    icon: "🔄",
    title: "Portabilité & maintien",
    description:
      "Gestion de la portabilité des droits et du maintien des garanties selon l'ANI.",
  },
];

export default function PrevoyanceSante() {
  return (
    <>
      <OfferHero
        icon="🛡️"
        title="Prévoyance & Santé"
        subtitle="Assurance de personnes"
        description="Adaptation pénibilité, absentéisme, démographie. Une offre tarifaire compétitive et sur-mesure, adossée à un pilotage permanent."
      />
      <ThreeSteps
        title="Notre approche en 3 temps"
        steps={steps}
      />
      <OfferDetails
        title="Ce que nous couvrons"
        subtitle="Périmètre"
        details={details}
      />
      <OfferCTA
        description="Un audit complet de vos régimes santé et prévoyance, avec recommandations chiffrées."
      />
    </>
  );
}
