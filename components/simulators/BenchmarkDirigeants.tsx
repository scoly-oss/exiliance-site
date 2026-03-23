"use client";

import { useState } from "react";
import { LeadCaptureModal } from "./LeadCaptureModal";

const secteurs = ["Industrie", "Services", "Tech / SaaS", "Commerce", "BTP", "Santé / Pharma"];
const statuts = ["Mandataire social salarié", "Mandataire social non-salarié (TNS)", "Président SAS", "Gérant SARL majoritaire"];

// Données benchmark simplifiées (médianes marché par taille)
const benchmarks: Record<string, { rem: number; prev: number; retraite: number; epargne: number }> = {
  "<50": { rem: 85000, prev: 2500, retraite: 4000, epargne: 3000 },
  "50-150": { rem: 120000, prev: 4000, retraite: 8000, epargne: 5000 },
  "150-500": { rem: 180000, prev: 6000, retraite: 15000, epargne: 8000 },
  "500+": { rem: 250000, prev: 10000, retraite: 25000, epargne: 12000 },
};

export function BenchmarkDirigeants() {
  const [step, setStep] = useState(0);
  const [secteur, setSecteur] = useState("");
  const [statut, setStatut] = useState("");
  const [taille, setTaille] = useState("<50");
  const [remActuelle, setRemActuelle] = useState(100000);
  const [prevActuelle, setPrevActuelle] = useState(2000);
  const [retraiteActuelle, setRetraiteActuelle] = useState(3000);
  const [showModal, setShowModal] = useState(false);

  const bench = benchmarks[taille];
  const done = step >= 3;

  const compare = (actual: number, benchmark: number) => {
    const diff = Math.round(((actual - benchmark) / benchmark) * 100);
    if (diff >= 10) return { label: "Au-dessus du marché", color: "text-green", icon: "↑" };
    if (diff <= -10) return { label: "En-dessous du marché", color: "text-red", icon: "↓" };
    return { label: "Dans la norme", color: "text-teal", icon: "≈" };
  };

  if (done) {
    const remComp = compare(remActuelle, bench.rem);
    const prevComp = compare(prevActuelle, bench.prev);
    const retComp = compare(retraiteActuelle, bench.retraite);

    return (
      <>
        <div className="max-w-3xl mx-auto">
          <div className="bento p-8 text-center mb-6">
            <div className="text-4xl mb-3">👔</div>
            <h3 className="font-heading text-2xl font-bold text-navy mb-2">Benchmark Dirigeant</h3>
            <p className="text-gray-600 text-[15px]">{statut} · {secteur} · {taille} salariés</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {[
              { label: "Rémunération", actual: remActuelle, bench: bench.rem, comp: remComp },
              { label: "Prévoyance dirigeant", actual: prevActuelle, bench: bench.prev, comp: prevComp },
              { label: "Retraite supplémentaire", actual: retraiteActuelle, bench: bench.retraite, comp: retComp },
            ].map((item) => (
              <div key={item.label} className="bento p-6">
                <div className="text-[13px] text-gray-400 mb-2">{item.label}</div>
                <div className="font-heading text-xl font-bold text-navy">{item.actual.toLocaleString("fr-FR")}€</div>
                <div className="text-[13px] text-gray-400 mt-1">Médiane : {item.bench.toLocaleString("fr-FR")}€</div>
                <div className={`text-[14px] font-medium mt-2 ${item.comp.color}`}>
                  {item.comp.icon} {item.comp.label}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button onClick={() => setShowModal(true)} className="flex-1 px-7 py-4 bg-teal text-white font-semibold rounded-2xl text-[15px] hover:bg-teal-light transition-all">
              📊 Rapport benchmark confidentiel →
            </button>
            <button onClick={() => setStep(0)} className="px-7 py-4 bg-white text-navy font-medium rounded-2xl text-[15px] border border-gray-100 transition-all">
              Recommencer
            </button>
          </div>
        </div>
        <LeadCaptureModal open={showModal} onClose={() => setShowModal(false)} toolName="Benchmark Dirigeants" />
      </>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6 flex gap-1">
        {[0, 1, 2].map((s) => (
          <div key={s} className={`h-1.5 flex-1 rounded-full ${s <= step ? "bg-teal" : "bg-gray-100"}`} />
        ))}
      </div>

      {step === 0 && (
        <div className="bento p-8">
          <h3 className="font-heading text-xl font-bold text-navy mb-6">Votre profil</h3>
          <div className="space-y-4">
            <div>
              <label className="text-[13px] text-gray-600 mb-2 block">Secteur d&apos;activité</label>
              <div className="grid grid-cols-2 gap-2">
                {secteurs.map((s) => (
                  <button key={s} onClick={() => setSecteur(s)}
                    className={`p-3 rounded-xl border text-[14px] transition-all ${secteur === s ? "border-teal bg-teal/5 text-teal" : "border-gray-100 text-gray-600 hover:border-gray-200"}`}>
                    {s}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-[13px] text-gray-600 mb-2 block">Statut</label>
              <div className="space-y-2">
                {statuts.map((s) => (
                  <button key={s} onClick={() => setStatut(s)}
                    className={`w-full text-left p-3 rounded-xl border text-[14px] transition-all ${statut === s ? "border-teal bg-teal/5 text-teal" : "border-gray-100 text-gray-600 hover:border-gray-200"}`}>
                    {s}
                  </button>
                ))}
              </div>
            </div>
            <button onClick={() => secteur && statut && setStep(1)} disabled={!secteur || !statut}
              className="w-full px-6 py-3.5 bg-teal text-white font-semibold rounded-2xl text-[15px] disabled:opacity-40 hover:bg-teal-light transition-all">
              Continuer →
            </button>
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="bento p-8">
          <h3 className="font-heading text-xl font-bold text-navy mb-6">Taille de l&apos;entreprise</h3>
          <div className="space-y-2 mb-6">
            {Object.keys(benchmarks).map((t) => (
              <button key={t} onClick={() => setTaille(t)}
                className={`w-full text-left p-4 rounded-xl border text-[15px] transition-all ${taille === t ? "border-teal bg-teal/5 text-teal" : "border-gray-100 text-gray-600"}`}>
                {t} salariés
              </button>
            ))}
          </div>
          <button onClick={() => setStep(2)} className="w-full px-6 py-3.5 bg-teal text-white font-semibold rounded-2xl text-[15px] hover:bg-teal-light transition-all">
            Continuer →
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="bento p-8">
          <h3 className="font-heading text-xl font-bold text-navy mb-6">Votre package actuel</h3>
          <div className="space-y-6">
            <div>
              <label className="flex justify-between text-[13px] text-gray-600 mb-2">
                <span>Rémunération brute annuelle</span><span className="font-semibold text-navy">{remActuelle.toLocaleString("fr-FR")}€</span>
              </label>
              <input type="range" min={40000} max={500000} step={5000} value={remActuelle} onChange={(e) => setRemActuelle(+e.target.value)} className="w-full accent-teal" />
            </div>
            <div>
              <label className="flex justify-between text-[13px] text-gray-600 mb-2">
                <span>Budget prévoyance dirigeant/an</span><span className="font-semibold text-navy">{prevActuelle.toLocaleString("fr-FR")}€</span>
              </label>
              <input type="range" min={0} max={20000} step={500} value={prevActuelle} onChange={(e) => setPrevActuelle(+e.target.value)} className="w-full accent-gold" />
            </div>
            <div>
              <label className="flex justify-between text-[13px] text-gray-600 mb-2">
                <span>Cotisation retraite supplémentaire/an</span><span className="font-semibold text-navy">{retraiteActuelle.toLocaleString("fr-FR")}€</span>
              </label>
              <input type="range" min={0} max={50000} step={1000} value={retraiteActuelle} onChange={(e) => setRetraiteActuelle(+e.target.value)} className="w-full accent-gold" />
            </div>
            <button onClick={() => setStep(3)} className="w-full px-6 py-3.5 bg-teal text-white font-semibold rounded-2xl text-[15px] hover:bg-teal-light transition-all">
              Voir mon benchmark →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
