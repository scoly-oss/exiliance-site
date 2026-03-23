import { Metadata } from "next";
import { OfferHero } from "@/components/offers/OfferHero";
import { ThreeSteps } from "@/components/offers/ThreeSteps";
import { OfferDetails } from "@/components/offers/OfferDetails";
import { OfferCTA } from "@/components/offers/OfferCTA";

export const metadata: Metadata = {
  title: "Consolidation AGIRC-ARRCO",
  description:
    "Harmonisation des taux de retraite complémentaire post-fusion. Taux moyen pondéré, négociation caisses.",
};

const steps = [
  {
    number: "1",
    title: "État des lieux",
    description:
      "Recensement des taux par structure, évaluation des écarts entre entités fusionnées, analyse des DSN.",
  },
  {
    number: "2",
    title: "Prévisionnel",
    description:
      "Simulation budgétaire annuelle, examen des cas individuels, projection de l'impact d'un taux moyen pondéré.",
  },
  {
    number: "3",
    title: "Mise en œuvre",
    description:
      "Calcul du taux moyen pondéré, négociation avec les caisses, rédaction de l'accord (Dairia Avocats), rattrapages.",
  },
];

const details = [
  {
    icon: "🔍",
    title: "Audit des taux",
    description:
      "Identification de tous les taux dérogatoires, leur historique et leur conformité réglementaire.",
  },
  {
    icon: "⚖️",
    title: "Équité salariale",
    description:
      "Résolution des inégalités de cotisation entre salariés d'entités différentes après fusion.",
  },
  {
    icon: "📋",
    title: "Conformité DSN",
    description:
      "Correction des incompatibilités DSN liées aux taux multiples, traçabilité restaurée.",
  },
  {
    icon: "🤝",
    title: "Négociation caisses",
    description:
      "Relation directe avec les caisses AGIRC-ARRCO pour valider le taux moyen pondéré.",
  },
  {
    icon: "📄",
    title: "Accord d'entreprise",
    description:
      "Dairia Avocats rédige l'accord d'entreprise formalisant le nouveau taux harmonisé.",
  },
  {
    icon: "💰",
    title: "Rattrapages",
    description:
      "Gestion des rattrapages de cotisations, régularisations et communication aux salariés.",
  },
];

export default function AgircArrco() {
  return (
    <>
      <OfferHero
        icon="⚖️"
        title="Consolidation AGIRC-ARRCO"
        subtitle="Retraite complémentaire"
        description="Après fusions-acquisitions, plusieurs taux dérogatoires cohabitent — générant inéquité, risque juridique et incompatibilités DSN."
      />
      <ThreeSteps
        title="Notre réponse en 3 étapes"
        steps={steps}
      />
      <OfferDetails
        title="Problématiques adressées"
        details={details}
      />
      <OfferCTA
        description="Évaluez les écarts de taux dans votre groupe et simulez l'impact d'une harmonisation."
        primaryText="Évaluer mes taux AGIRC-ARRCO"
      />
    </>
  );
}
