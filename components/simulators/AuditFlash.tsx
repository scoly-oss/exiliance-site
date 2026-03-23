"use client";

import { useState } from "react";
import { auditQuestions, categoryLabels, categoryColors, computeAuditResults } from "@/lib/simulators/audit-questions";
import { LeadCaptureModal } from "./LeadCaptureModal";

export function AuditFlash() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [done, setDone] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const q = auditQuestions[current];
  const progress = ((current + (done ? 1 : 0)) / auditQuestions.length) * 100;

  const handleAnswer = (score: number) => {
    const next = { ...answers, [q.id]: score };
    setAnswers(next);
    if (current < auditQuestions.length - 1) {
      setCurrent(current + 1);
    } else {
      setDone(true);
    }
  };

  const results = done ? computeAuditResults(answers) : null;

  if (done && results) {
    return (
      <>
        <div className="max-w-3xl mx-auto">
          {/* Score header */}
          <div className="bento p-10 text-center mb-6">
            <div className="text-5xl mb-4">{results.emoji}</div>
            <div className="font-heading text-5xl font-bold text-navy mb-2">{results.pct}<span className="text-2xl text-gray-400">/100</span></div>
            <div className="text-xl font-semibold text-teal mb-2">Protection sociale : {results.level}</div>
            <p className="text-gray-600 text-[15px]">
              {results.pct >= 85 && "Félicitations ! Vos dispositifs sont exemplaires. Quelques optimisations restent possibles."}
              {results.pct >= 65 && results.pct < 85 && "Vos fondamentaux sont solides mais certains points méritent attention."}
              {results.pct >= 40 && results.pct < 65 && "Plusieurs risques identifiés nécessitent une action rapide."}
              {results.pct < 40 && "Situation critique. Des non-conformités majeures exposent votre entreprise à des risques importants."}
            </p>
          </div>

          {/* Category breakdown */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
            {Object.entries(results.categoryScores).map(([cat, { score, max }]) => {
              const catPct = Math.round((score / max) * 100);
              return (
                <div key={cat} className="bento p-5">
                  <div className={`pill text-[11px] mb-3 ${categoryColors[cat]}`}>{categoryLabels[cat]}</div>
                  <div className="font-heading text-2xl font-bold text-navy">{catPct}%</div>
                  <div className="mt-2 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-1000 ${catPct >= 70 ? "bg-green" : catPct >= 40 ? "bg-gold" : "bg-red"}`}
                      style={{ width: `${catPct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Risks */}
          {results.risks.length > 0 && (
            <div className="bento p-6 mb-6 border-l-4 border-red">
              <h3 className="font-semibold text-navy text-[16px] mb-3">🚨 Points de risque identifiés</h3>
              <ul className="space-y-2">
                {results.risks.map((r, i) => (
                  <li key={i} className="text-gray-600 text-[14px] flex items-start gap-2">
                    <span className="text-red mt-0.5">•</span> {r}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => setShowModal(true)}
              className="flex-1 px-7 py-4 bg-teal text-white font-semibold rounded-2xl text-[15px] hover:bg-teal-light transition-all"
            >
              📊 Recevoir mon rapport détaillé →
            </button>
            <button
              onClick={() => { setCurrent(0); setAnswers({}); setDone(false); }}
              className="px-7 py-4 bg-white text-navy font-medium rounded-2xl text-[15px] border border-gray-100 hover:border-gray-200 transition-all"
            >
              Recommencer
            </button>
          </div>
        </div>

        <LeadCaptureModal open={showModal} onClose={() => setShowModal(false)} toolName="Audit Flash" score={results.pct} />
      </>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex justify-between text-[13px] text-gray-400 mb-2">
          <span>Question {current + 1}/{auditQuestions.length}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full bg-teal rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {/* Question */}
      <div className="bento p-8 mb-4">
        <div className={`pill text-[11px] mb-4 ${categoryColors[q.category]}`}>
          {categoryLabels[q.category]}
        </div>
        <h2 className="font-heading text-xl font-bold text-navy mb-2">{q.question}</h2>
        {q.tooltip && <p className="text-gray-400 text-[13px] italic mb-6">{q.tooltip}</p>}

        <div className="space-y-3">
          {q.options.map((opt) => (
            <button
              key={opt.label}
              onClick={() => handleAnswer(opt.score)}
              className="w-full text-left p-4 rounded-2xl border border-gray-100 hover:border-teal/30 hover:bg-teal/3 transition-all text-[15px] text-gray-800 group"
            >
              <span className="group-hover:text-teal transition-colors">{opt.label}</span>
            </button>
          ))}
        </div>
      </div>

      {current > 0 && (
        <button onClick={() => setCurrent(current - 1)} className="text-gray-400 text-[14px] hover:text-teal transition-colors">
          ← Question précédente
        </button>
      )}
    </div>
  );
}
