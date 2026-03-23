import { Metadata } from "next";
import { OfferHero } from "@/components/offers/OfferHero";
import { ThreeSteps } from "@/components/offers/ThreeSteps";
import { OfferDetails } from "@/components/offers/OfferDetails";
import { OfferCTA } from "@/components/offers/OfferCTA";

export const metadata: Metadata = {
  title: "Épargne Salariale",
  description:
    "PEE, PER, intéressement, participation. Simulation budgétaire et rédaction d'accords pour optimiser votre politique d'épargne.",
};

const steps = [
  {
    number: "1",
    title: "État des lieux complet",
    description:
      "Audit des dispositifs existants (PEE, PER, intéressement, participation), analyse des accords en cours et expirations.",
  },
  {
    number: "2",
    title: "Simulation budgétaire",
    description:
      "Modélisation financière des scénarios d'épargne : impact fiscal employeur, gains salariés, comparaison des options.",
  },
  {
    number: "3",
    title: "Mise en œuvre & accord",
    description:
      "Appel d'offres teneur de comptes, rédaction des accords (Dairia Avocats), déploiement et suivi.",
  },
];

const details = [
  {
    icon: "💼",
    title: "PEE & PER Collectif",
    description:
      "Mise en place ou optimisation de plans d'épargne entreprise et retraite collectifs.",
  },
  {
    icon: "🎯",
    title: "Intéressement",
    description:
      "Définition de critères pertinents, rédaction d'accord, simulation d'impact sur la masse salariale.",
  },
  {
    icon: "📈",
    title: "Participation",
    description:
      "Obligation légale pour +50 salariés. Optimisation de la formule, choix des supports d'investissement.",
  },
  {
    icon: "🏦",
    title: "Abondement",
    description:
      "Politique d'abondement calibrée : effet levier sur l'engagement, maîtrise du coût employeur.",
  },
  {
    icon: "📊",
    title: "Politique RSE",
    description:
      "Image employeur renforcée, avantages fiscaux et sociaux significatifs, fidélisation des talents.",
  },
  {
    icon: "⚖️",
    title: "Conformité juridique",
    description:
      "Dairia Avocats sécurise les accords, anticipe les évolutions réglementaires, gère les contentieux.",
  },
];

export default function EpargneSalariale() {
  return (
    <>
      <OfferHero
        icon="💰"
        title="Épargne Salariale"
        subtitle="Dispositifs collectifs"
        description="Dispositifs collectifs offrant des avantages fiscaux et sociaux significatifs. Participation obligatoire pour les entreprises de plus de 50 salariés."
      />
      <ThreeSteps
        title="Notre réponse en 3 étapes"
        steps={steps}
      />
      <OfferDetails
        title="Points de vigilance"
        details={details}
      />
      <OfferCTA
        description="Simulez l'impact budgétaire de vos dispositifs d'épargne salariale en quelques clics."
        primaryText="Simuler mon épargne salariale"
      />
    </>
  );
}
