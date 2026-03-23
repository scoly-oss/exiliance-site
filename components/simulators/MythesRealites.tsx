"use client";

import { useState } from "react";

const mythes = [
  { statement: "La mutuelle d'entreprise est facultative pour les salariés.", answer: false, explanation: "Depuis l'ANI de 2016, la complémentaire santé est obligatoire pour tous les salariés du privé. Seuls certains cas de dispense sont autorisés (CDD courts, bénéficiaires CMU-C, etc.)." },
  { statement: "L'employeur peut choisir librement le niveau de garanties sans contrainte.", answer: false, explanation: "Le panier de soins minimum (100% Santé) est imposé par la loi pour les contrats responsables. Les CCN peuvent imposer des garanties supérieures." },
  { statement: "La participation est obligatoire dès 50 salariés.", answer: true, explanation: "Art. L.3322-2 du Code du travail. Un moratoire de 5 ans s'applique après le franchissement du seuil." },
  { statement: "L'intéressement est réservé aux grandes entreprises.", answer: false, explanation: "Toute entreprise peut mettre en place un accord d'intéressement, y compris les TPE. C'est même encouragé par des exonérations renforcées pour les PME <250 salariés (pas de forfait social)." },
  { statement: "Les IFC n'ont pas besoin d'être provisionnées au bilan.", answer: false, explanation: "Les normes comptables (ANC/IFRS) imposent la comptabilisation des engagements IFC. Le non-provisionnement expose à un redressement CAC." },
  { statement: "Après une fusion, les taux AGIRC-ARRCO s'harmonisent automatiquement.", answer: false, explanation: "Non ! Les taux dérogatoires persistent sauf négociation active avec les caisses. Un accord d'entreprise est nécessaire pour fixer un taux moyen pondéré." },
  { statement: "Le PER Collectif remplace automatiquement le PERCO.", answer: true, explanation: "Depuis la loi PACTE, le PER Col remplace le PERCO. Les PERCO existants peuvent être maintenus mais tout nouveau plan doit être un PER." },
  { statement: "Un dirigeant TNS ne peut pas bénéficier de la prévoyance Madelin.", answer: false, explanation: "Les contrats Madelin sont spécifiquement conçus pour les TNS. Ils permettent la déduction des cotisations du revenu imposable dans certaines limites." },
  { statement: "La portabilité des droits santé est plafonnée à 12 mois.", answer: true, explanation: "Art. L.911-8 CSS — Le maintien des garanties est gratuit pour l'ex-salarié, dans la limite de 12 mois." },
  { statement: "Le forfait social s'applique à toutes les entreprises sur l'intéressement.", answer: false, explanation: "Depuis le 1er janvier 2019, les entreprises de moins de 250 salariés sont exonérées de forfait social sur l'intéressement." },
];

export function MythesRealites() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [lastCorrect, setLastCorrect] = useState(false);
  const [done, setDone] = useState(false);

  const m = mythes[current];

  const handleAnswer = (answer: boolean) => {
    if (answered) return;
    const correct = answer === m.answer;
    if (correct) setScore(score + 1);
    setLastCorrect(correct);
    setAnswered(true);
  };

  const next = () => {
    if (current < mythes.length - 1) {
      setCurrent(current + 1);
      setAnswered(false);
    } else {
      setDone(true);
    }
  };

  if (done) {
    const pct = Math.round((score / mythes.length) * 100);
    return (
      <div className="max-w-2xl mx-auto bento p-10 text-center">
        <div className="text-5xl mb-4">{pct >= 80 ? "🎯" : pct >= 50 ? "💡" : "🤔"}</div>
        <div className="font-heading text-4xl font-bold text-navy mb-2">{score}/{mythes.length}</div>
        <p className="text-gray-600 text-lg mb-6">
          {pct >= 80 ? "Impressionnant ! Peu de mythes vous résistent." : pct >= 50 ? "Pas mal ! Quelques idées reçues persistent." : "Beaucoup d'idées reçues ! Un audit s'impose 😉"}
        </p>
        <button onClick={() => { setCurrent(0); setScore(0); setAnswered(false); setDone(false); }}
          className="px-7 py-3.5 bg-teal text-white font-semibold rounded-2xl text-[15px] hover:bg-teal-light transition-all">
          Rejouer →
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex justify-between text-[13px] text-gray-400 mb-3">
        <span>{current + 1}/{mythes.length}</span>
        <span>Score : {score}</span>
      </div>
      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden mb-6">
        <div className="h-full bg-gold rounded-full transition-all" style={{ width: `${((current + 1) / mythes.length) * 100}%` }} />
      </div>

      <div className="bento p-8 mb-4">
        <div className="text-[13px] text-gray-400 uppercase tracking-wider mb-4">Mythe ou Réalité ?</div>
        <h3 className="font-heading text-xl font-bold text-navy mb-8 leading-snug">&ldquo;{m.statement}&rdquo;</h3>

        {!answered ? (
          <div className="grid grid-cols-2 gap-3">
            <button onClick={() => handleAnswer(true)}
              className="p-5 rounded-2xl border border-gray-100 hover:border-green/30 hover:bg-green/3 transition-all text-center">
              <div className="text-3xl mb-2">✅</div>
              <div className="font-semibold text-navy text-[15px]">Réalité</div>
            </button>
            <button onClick={() => handleAnswer(false)}
              className="p-5 rounded-2xl border border-gray-100 hover:border-red/30 hover:bg-red/3 transition-all text-center">
              <div className="text-3xl mb-2">❌</div>
              <div className="font-semibold text-navy text-[15px]">Mythe</div>
            </button>
          </div>
        ) : (
          <>
            <div className={`p-4 rounded-2xl mb-4 ${lastCorrect ? "bg-green/5 border border-green/20" : "bg-red/5 border border-red/20"}`}>
              <div className="font-semibold text-[15px] mb-1">
                {lastCorrect ? "✅ Bonne réponse !" : "❌ Raté !"} C&apos;est {m.answer ? "une réalité" : "un mythe"}.
              </div>
            </div>
            <div className="p-4 rounded-xl bg-cream-warm text-[14px] text-gray-600">
              💡 {m.explanation}
            </div>
          </>
        )}
      </div>

      {answered && (
        <button onClick={next} className="w-full px-6 py-3.5 bg-teal text-white font-semibold rounded-2xl text-[15px] hover:bg-teal-light transition-all">
          {current < mythes.length - 1 ? "Suivant →" : "Voir mon score →"}
        </button>
      )}
    </div>
  );
}
