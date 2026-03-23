import { Metadata } from "next";
import { OfferHero } from "@/components/offers/OfferHero";
import { ThreeSteps } from "@/components/offers/ThreeSteps";
import { OfferDetails } from "@/components/offers/OfferDetails";
import { OfferCTA } from "@/components/offers/OfferCTA";

export const metadata: Metadata = {
  title: "Package Dirigeants",
  description:
    "Optimisation de la rémunération et de la protection des dirigeants. Structures juridiques, fiscalité, protection sociale.",
};

const steps = [
  {
    number: "1",
    title: "Structures Juridiques",
    description:
      "Analyse de la forme sociale de l'entreprise et optimisation de la fiscalité et de la protection sociale selon le statut.",
  },
  {
    number: "2",
    title: "Positions des Dirigeants",
    description:
      "Mandataire, salarié, TNS, actionnaire — chaque statut analysé sous toutes ses facettes sociales et fiscales.",
  },
  {
    number: "3",
    title: "Formes de Rémunération",
    description:
      "Immédiate, différée, collective, dividendes — arbitrage fiscal et social optimisé sur le long terme.",
  },
];

const details = [
  {
    icon: "🔒",
    title: "Confidentialité 100%",
    description:
      "Dossier traité en circuit fermé. Aucune information partagée hors du binôme Exiliance + Dairia Avocats.",
  },
  {
    icon: "📊",
    title: "Équilibre avant/après IS",
    description:
      "Simulation complète intégrant l'impact de l'impôt sur les sociétés sur chaque scénario de rémunération.",
  },
  {
    icon: "🏛️",
    title: "Cas spécifique du dirigeant",
    description:
      "Prise en compte du patrimoine personnel, situation familiale, objectifs de retraite et de transmission.",
  },
  {
    icon: "🔄",
    title: "Opérations M&A",
    description:
      "Adaptation du package dirigeant lors de fusions, acquisitions ou changements de gouvernance.",
  },
  {
    icon: "📈",
    title: "Vision long terme",
    description:
      "Intégration des évolutions législatives prévisibles dans la stratégie de rémunération.",
  },
  {
    icon: "⚖️",
    title: "Sécurisation juridique",
    description:
      "Dairia Avocats sécurise chaque montage : statut social, contrat, clauses, conformité URSSAF.",
  },
];

export default function PackageDirigeants() {
  return (
    <>
      <OfferHero
        icon="👔"
        title="Package Social des Dirigeants"
        subtitle="Rémunération & protection"
        description="Une approche globale, rigoureuse et 100% confidentielle pour optimiser la rémunération et la protection des dirigeants sur le long terme."
      />
      <ThreeSteps
        title="3 piliers d'analyse"
        subtitle="Notre approche"
        steps={steps}
      />
      <OfferDetails
        title="Points de vigilance"
        details={details}
      />
      <OfferCTA
        description="Benchmark confidentiel de votre package dirigeant par rapport au marché."
        primaryText="Demander un benchmark"
      />
    </>
  );
}
