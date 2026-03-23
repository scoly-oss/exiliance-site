"use client";

import { useState } from "react";

const questions = [
  { q: "Quel est le taux minimum de prise en charge employeur sur la complémentaire santé obligatoire ?", options: ["25%", "50%", "60%", "75%"], answer: 1, info: "Art. L.911-7 CSS — L'employeur doit financer au minimum 50% de la cotisation." },
  { q: "Le PASS 2025 (Plafond Annuel de la Sécurité Sociale) est de :", options: ["43 992€", "46 368€", "47 100€", "48 500€"], answer: 2, info: "Le PASS 2025 est fixé à 47 100€, soit 3 925€/mois." },
  { q: "La participation aux bénéfices est obligatoire à partir de combien de salariés ?", options: ["11 salariés", "20 salariés", "50 salariés", "250 salariés"], answer: 2, info: "Art. L.3322-2 Code du travail — Obligation à partir de 50 salariés." },
  { q: "Quelle est la durée maximale de portabilité des droits santé/prévoyance ?", options: ["6 mois", "12 mois", "18 mois", "24 mois"], answer: 1, info: "Art. L.911-8 CSS (ANI 2013) — Maintien gratuit jusqu'à 12 mois." },
  { q: "Le forfait social sur l'intéressement s'applique à partir de :", options: ["50 salariés", "100 salariés", "250 salariés", "Toutes les entreprises"], answer: 2, info: "Le forfait social de 20% s'applique aux entreprises de 250+ salariés (Art. L.137-15 CSS)." },
  { q: "Un contrat responsable limite le remboursement des dépassements d'honoraires à :", options: ["Aucune limite", "100% BR", "200% BR", "300% BR"], answer: 2, info: "Le plafond est de 200% de la base de remboursement pour les contrats responsables." },
  { q: "Le plafond d'abondement PEE est fixé à :", options: ["4% du PASS", "8% du PASS", "16% du PASS", "25% du PASS"], answer: 1, info: "L'abondement PEE est plafonné à 8% du PASS, soit 3 768€ en 2025." },
  { q: "L'IFC (Indemnité de Fin de Carrière) est une obligation :", options: ["Légale pour tous", "Conventionnelle uniquement", "Facultative", "Réservée aux cadres"], answer: 0, info: "L'indemnité de départ à la retraite est une obligation légale (Art. L.1237-9 Code du travail)." },
  { q: "Combien de temps un employeur a-t-il pour mettre en place la participation après le franchissement du seuil de 50 ?", options: ["1 an", "3 ans", "5 ans", "Immédiatement"], answer: 2, info: "Moratoire de 5 exercices civils après franchissement du seuil (Loi du 29/11/2023)." },
  { q: "La CSG sur les revenus d'activité est actuellement de :", options: ["7,5%", "8,3%", "9,2%", "9,7%"], answer: 2, info: "CSG = 9,2% dont 6,8% déductible + 2,4% non déductible." },
];

export function QuizProtectionSociale() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [done, setDone] = useState(false);

  const q = questions[current];

  const handleSelect = (i: number) => {
    if (revealed) return;
    setSelected(i);
    setRevealed(true);
    if (i === q.answer) setScore(score + 1);
  };

  const next = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
      setSelected(null);
      setRevealed(false);
    } else {
      setDone(true);
    }
  };

  if (done) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="max-w-2xl mx-auto bento p-10 text-center">
        <div className="text-5xl mb-4">{pct >= 80 ? "🏆" : pct >= 50 ? "👏" : "📚"}</div>
        <div className="font-heading text-4xl font-bold text-navy mb-2">{score}/{questions.length}</div>
        <p className="text-gray-600 text-lg mb-2">
          {pct >= 80 ? "Expert ! Vous maîtrisez la protection sociale." : pct >= 50 ? "Bon niveau ! Quelques subtilités à approfondir." : "Des bases à consolider. Nos experts peuvent vous aider !"}
        </p>
        <p className="text-teal font-semibold text-[15px] mb-6">{pct}% de bonnes réponses</p>
        <button onClick={() => { setCurrent(0); setScore(0); setSelected(null); setRevealed(false); setDone(false); }}
          className="px-7 py-3.5 bg-teal text-white font-semibold rounded-2xl text-[15px] hover:bg-teal-light transition-all">
          Rejouer →
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex justify-between text-[13px] text-gray-400 mb-3">
        <span>Question {current + 1}/{questions.length}</span>
        <span>Score : {score}</span>
      </div>
      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden mb-6">
        <div className="h-full bg-teal rounded-full transition-all" style={{ width: `${((current + 1) / questions.length) * 100}%` }} />
      </div>

      <div className="bento p-8 mb-4">
        <h3 className="font-heading text-lg font-bold text-navy mb-6">{q.q}</h3>
        <div className="space-y-2">
          {q.options.map((opt, i) => (
            <button key={i} onClick={() => handleSelect(i)} disabled={revealed}
              className={`w-full text-left p-4 rounded-2xl border text-[15px] transition-all ${
                revealed && i === q.answer ? "border-green bg-green/5 text-green font-medium" :
                revealed && i === selected && i !== q.answer ? "border-red bg-red/5 text-red" :
                !revealed ? "border-gray-100 text-gray-700 hover:border-teal/30 hover:bg-teal/3" :
                "border-gray-100 text-gray-400"
              }`}>
              {opt}
            </button>
          ))}
        </div>
        {revealed && (
          <div className="mt-4 p-4 rounded-xl bg-cream-warm text-[14px] text-gray-600">
            💡 {q.info}
          </div>
        )}
      </div>

      {revealed && (
        <button onClick={next} className="w-full px-6 py-3.5 bg-teal text-white font-semibold rounded-2xl text-[15px] hover:bg-teal-light transition-all">
          {current < questions.length - 1 ? "Question suivante →" : "Voir mon score →"}
        </button>
      )}
    </div>
  );
}
