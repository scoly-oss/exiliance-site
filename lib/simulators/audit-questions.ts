export interface AuditQuestion {
  id: number;
  category: "sante" | "prevoyance" | "epargne" | "retraite" | "dirigeants" | "ifc";
  question: string;
  tooltip?: string;
  options: { label: string; score: number; risk: "low" | "medium" | "high" }[];
}

export const auditQuestions: AuditQuestion[] = [
  // --- SANTÉ / PRÉVOYANCE ---
  {
    id: 1,
    category: "sante",
    question: "Votre complémentaire santé respecte-t-elle le cahier des charges des contrats responsables ?",
    tooltip: "Art. L.871-1 CSS — Le non-respect entraîne la perte des avantages fiscaux et sociaux (taxe à 14% au lieu de 7%).",
    options: [
      { label: "Oui, vérifié récemment", score: 10, risk: "low" },
      { label: "Probablement, mais pas vérifié depuis 2 ans", score: 5, risk: "medium" },
      { label: "Je ne sais pas", score: 2, risk: "high" },
    ],
  },
  {
    id: 2,
    category: "sante",
    question: "Votre régime santé couvre-t-il le panier de soins 100% Santé (optique, dentaire, audiologie) ?",
    tooltip: "Depuis 2021, les contrats responsables doivent intégrer le reste à charge zéro sur les paniers 100% Santé.",
    options: [
      { label: "Oui, intégralement", score: 10, risk: "low" },
      { label: "Partiellement", score: 4, risk: "medium" },
      { label: "Non ou je ne sais pas", score: 1, risk: "high" },
    ],
  },
  {
    id: 3,
    category: "prevoyance",
    question: "Votre DUE ou accord d'entreprise instaurant la prévoyance a-t-il été mis en conformité depuis le 1er janvier 2025 ?",
    tooltip: "BOSS §1430 — Les actes instaurant les garanties devaient être conformes aux nouvelles règles de maintien en cas de suspension du contrat au 1er janvier 2025.",
    options: [
      { label: "Oui, mis à jour", score: 10, risk: "low" },
      { label: "En cours de mise à jour", score: 5, risk: "medium" },
      { label: "Non, pas encore traité", score: 1, risk: "high" },
    ],
  },
  {
    id: 4,
    category: "sante",
    question: "L'employeur finance-t-il au moins 50% de la cotisation santé obligatoire ?",
    tooltip: "Art. L.911-7 CSS — L'employeur doit prendre en charge au minimum 50% de la cotisation de la couverture collective obligatoire.",
    options: [
      { label: "Oui, 50% ou plus", score: 10, risk: "low" },
      { label: "Je n'en suis pas certain", score: 3, risk: "medium" },
      { label: "Non", score: 0, risk: "high" },
    ],
  },
  // --- PORTABILITÉ ---
  {
    id: 5,
    category: "prevoyance",
    question: "La portabilité des droits santé/prévoyance est-elle bien gérée pour les salariés sortants ?",
    tooltip: "Art. L.911-8 CSS (ANI 2013) — Maintien gratuit des garanties jusqu'à 12 mois après la rupture du contrat.",
    options: [
      { label: "Oui, processus formalisé", score: 10, risk: "low" },
      { label: "Cas par cas, pas toujours suivi", score: 4, risk: "medium" },
      { label: "Pas de processus clair", score: 1, risk: "high" },
    ],
  },
  // --- ÉPARGNE SALARIALE ---
  {
    id: 6,
    category: "epargne",
    question: "Votre entreprise a-t-elle mis en place un accord d'intéressement ou de participation ?",
    tooltip: "Participation obligatoire pour les entreprises de 50+ salariés (Art. L.3322-2 Code du travail). L'intéressement ouvre droit à des exonérations renforcées (PPV jusqu'à 6 000€).",
    options: [
      { label: "Oui, les deux", score: 10, risk: "low" },
      { label: "Seulement la participation (obligatoire)", score: 6, risk: "medium" },
      { label: "Aucun dispositif", score: 1, risk: "high" },
    ],
  },
  {
    id: 7,
    category: "epargne",
    question: "Disposez-vous d'un PEE et/ou PER collectif pour vos salariés ?",
    tooltip: "Les PEE et PER Col offrent des avantages fiscaux majeurs : exonération d'IR sur l'abondement (dans les limites), exonération des plus-values sous conditions.",
    options: [
      { label: "PEE + PER collectif", score: 10, risk: "low" },
      { label: "Seulement un PEE", score: 6, risk: "medium" },
      { label: "Aucun plan d'épargne", score: 1, risk: "high" },
    ],
  },
  // --- RETRAITE / AGIRC-ARRCO ---
  {
    id: 8,
    category: "retraite",
    question: "Après une fusion ou acquisition, avez-vous harmonisé vos taux de retraite complémentaire ?",
    tooltip: "Des taux dérogatoires multiples génèrent des inéquités entre salariés, des risques DSN et un surcoût potentiel.",
    options: [
      { label: "Oui, taux harmonisé", score: 10, risk: "low" },
      { label: "Non applicable (pas de fusion)", score: 8, risk: "low" },
      { label: "Non, taux encore différents", score: 2, risk: "high" },
    ],
  },
  {
    id: 9,
    category: "retraite",
    question: "Suivez-vous un tableau de bord annuel cotisations/prestations retraite ?",
    tooltip: "Le pilotage des taux et des coûts retraite permet d'anticiper les dérives et de négocier avec les caisses.",
    options: [
      { label: "Oui, suivi régulier", score: 10, risk: "low" },
      { label: "Ponctuellement", score: 5, risk: "medium" },
      { label: "Non, aucun suivi", score: 1, risk: "high" },
    ],
  },
  // --- DIRIGEANTS ---
  {
    id: 10,
    category: "dirigeants",
    question: "Le package social du dirigeant (prévoyance, retraite, rémunération différée) a-t-il fait l'objet d'un audit récent ?",
    tooltip: "Le statut du dirigeant (mandataire, TNS, salarié) impacte drastiquement la fiscalité et la protection sociale.",
    options: [
      { label: "Oui, dans les 2 dernières années", score: 10, risk: "low" },
      { label: "Il y a plus de 3 ans", score: 4, risk: "medium" },
      { label: "Jamais audité", score: 1, risk: "high" },
    ],
  },
  // --- IFC ---
  {
    id: 11,
    category: "ifc",
    question: "Avez-vous provisionné ou externalisé vos indemnités de fin de carrière (IFC) ?",
    tooltip: "Les IFC représentent un passif social souvent sous-estimé. La norme ANC/IFRS impose leur comptabilisation.",
    options: [
      { label: "Oui, externalisé via contrat d'assurance", score: 10, risk: "low" },
      { label: "Provisionné en interne", score: 6, risk: "medium" },
      { label: "Non provisionné", score: 1, risk: "high" },
    ],
  },
  {
    id: 12,
    category: "ifc",
    question: "Connaissez-vous le montant estimé de votre passif IFC à horizon 10 ans ?",
    tooltip: "La projection à 10 ans est essentielle pour anticiper l'impact sur le bilan et valider avec le CAC.",
    options: [
      { label: "Oui, projection actualisée", score: 10, risk: "low" },
      { label: "Estimation approximative", score: 4, risk: "medium" },
      { label: "Aucune idée", score: 1, risk: "high" },
    ],
  },
];

export const categoryLabels: Record<string, string> = {
  sante: "Santé",
  prevoyance: "Prévoyance",
  epargne: "Épargne Salariale",
  retraite: "Retraite",
  dirigeants: "Dirigeants",
  ifc: "IFC",
};

export const categoryColors: Record<string, string> = {
  sante: "bg-green/10 text-green",
  prevoyance: "bg-teal/10 text-teal",
  epargne: "bg-gold/10 text-gold",
  retraite: "bg-indigo/10 text-indigo",
  dirigeants: "bg-orange/10 text-orange",
  ifc: "bg-red/10 text-red",
};

export function computeAuditResults(answers: Record<number, number>) {
  const total = Object.values(answers).reduce((a, b) => a + b, 0);
  const maxScore = auditQuestions.length * 10;
  const pct = Math.round((total / maxScore) * 100);

  const categoryScores: Record<string, { score: number; max: number }> = {};
  for (const q of auditQuestions) {
    if (!categoryScores[q.category]) categoryScores[q.category] = { score: 0, max: 0 };
    categoryScores[q.category].max += 10;
    categoryScores[q.category].score += answers[q.id] ?? 0;
  }

  const risks: string[] = [];
  for (const q of auditQuestions) {
    const chosen = q.options.find((o) => o.score === (answers[q.id] ?? 0));
    if (chosen?.risk === "high") risks.push(q.question);
  }

  let level: string;
  let emoji: string;
  if (pct >= 85) { level = "Exemplaire"; emoji = "🏆"; }
  else if (pct >= 65) { level = "Solide"; emoji = "✅"; }
  else if (pct >= 40) { level = "Fragile"; emoji = "⚠️"; }
  else { level = "Critique"; emoji = "🚨"; }

  return { total, maxScore, pct, categoryScores, risks, level, emoji };
}
