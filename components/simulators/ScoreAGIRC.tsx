"use client";

import { useState } from "react";
import { LeadCaptureModal } from "./LeadCaptureModal";

interface Entity { name: string; tauxT1: number; tauxT2: number; effectif: number; }

export function ScoreAGIRC() {
  const [entities, setEntities] = useState<Entity[]>([
    { name: "Entité A", tauxT1: 7.87, tauxT2: 21.59, effectif: 80 },
    { name: "Entité B", tauxT1: 6.20, tauxT2: 16.44, effectif: 40 },
  ]);
  const [showResult, setShowResult] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Taux légaux minimaux AGIRC-ARRCO 2025
  const tauxLegalT1 = 7.87; // Tranche 1 (≤1 PASS)
  const tauxLegalT2 = 21.59; // Tranche 2 (>1 PASS)

  const addEntity = () => {
    setEntities([...entities, { name: `Entité ${String.fromCharCode(65 + entities.length)}`, tauxT1: 7.87, tauxT2: 21.59, effectif: 20 }]);
  };

  const updateEntity = (i: number, field: keyof Entity, value: string | number) => {
    const next = [...entities];
    (next[i] as unknown as Record<string, string | number>)[field] = value;
    setEntities(next);
  };

  const totalEffectif = entities.reduce((a, e) => a + e.effectif, 0);
  const tauxMoyenT1 = entities.reduce((a, e) => a + e.tauxT1 * e.effectif, 0) / totalEffectif;
  const tauxMoyenT2 = entities.reduce((a, e) => a + e.tauxT2 * e.effectif, 0) / totalEffectif;

  const ecartMaxT1 = Math.max(...entities.map((e) => e.tauxT1)) - Math.min(...entities.map((e) => e.tauxT1));
  const ecartMaxT2 = Math.max(...entities.map((e) => e.tauxT2)) - Math.min(...entities.map((e) => e.tauxT2));

  const hasRisk = ecartMaxT1 > 0.5 || ecartMaxT2 > 1 || entities.some((e) => e.tauxT1 < tauxLegalT1 || e.tauxT2 < tauxLegalT2);
  const riskLevel = ecartMaxT1 > 1.5 || ecartMaxT2 > 3 ? "Critique" : ecartMaxT1 > 0.5 ? "Modéré" : "Faible";

  return (
    <>
      <div className="max-w-3xl mx-auto">
        <div className="bento p-8 mb-4">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-semibold text-navy text-[17px]">Entités du groupe</h3>
            <button onClick={addEntity} className="px-4 py-2 bg-teal/5 text-teal text-[13px] font-medium rounded-xl border border-teal/10 hover:bg-teal/10 transition-all">
              + Ajouter une entité
            </button>
          </div>

          <div className="space-y-4">
            {entities.map((e, i) => (
              <div key={i} className="p-4 rounded-2xl border border-gray-100 space-y-3">
                <input type="text" value={e.name} onChange={(ev) => updateEntity(i, "name", ev.target.value)}
                  className="font-medium text-navy text-[15px] bg-transparent focus:outline-none w-full" />
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="text-[11px] text-gray-400 block mb-1">Taux T1 (%)</label>
                    <input type="number" step={0.01} value={e.tauxT1} onChange={(ev) => updateEntity(i, "tauxT1", +ev.target.value)}
                      className={`w-full px-3 py-2 rounded-xl border text-[14px] focus:outline-none ${e.tauxT1 < tauxLegalT1 ? "border-red bg-red/5" : "border-gray-100"}`} />
                  </div>
                  <div>
                    <label className="text-[11px] text-gray-400 block mb-1">Taux T2 (%)</label>
                    <input type="number" step={0.01} value={e.tauxT2} onChange={(ev) => updateEntity(i, "tauxT2", +ev.target.value)}
                      className={`w-full px-3 py-2 rounded-xl border text-[14px] focus:outline-none ${e.tauxT2 < tauxLegalT2 ? "border-red bg-red/5" : "border-gray-100"}`} />
                  </div>
                  <div>
                    <label className="text-[11px] text-gray-400 block mb-1">Effectif</label>
                    <input type="number" value={e.effectif} onChange={(ev) => updateEntity(i, "effectif", +ev.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-gray-100 text-[14px] focus:outline-none" />
                  </div>
                </div>
                {(e.tauxT1 < tauxLegalT1 || e.tauxT2 < tauxLegalT2) && (
                  <p className="text-[12px] text-red">⚠️ Taux inférieur au minimum légal</p>
                )}
              </div>
            ))}
          </div>

          <button onClick={() => setShowResult(true)} className="mt-6 w-full px-6 py-3.5 bg-teal text-white font-semibold rounded-2xl text-[15px] hover:bg-teal-light transition-all">
            Analyser les écarts →
          </button>
        </div>

        {showResult && (
          <div className="space-y-4">
            <div className={`bento p-6 border-l-4 ${hasRisk ? "border-red" : "border-green"}`}>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{hasRisk ? "⚠️" : "✅"}</span>
                <h3 className="font-heading text-xl font-bold text-navy">Risque : {riskLevel}</h3>
              </div>
              <p className="text-gray-600 text-[15px]">
                {hasRisk
                  ? "Des écarts significatifs de taux entre entités créent un risque d'inéquité salariale et de non-conformité DSN."
                  : "Vos taux sont harmonisés et conformes aux minimums légaux."}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bento p-6">
                <div className="text-[13px] text-gray-400 mb-1">Taux moyen pondéré T1</div>
                <div className="font-heading text-2xl font-bold text-navy">{tauxMoyenT1.toFixed(2)}%</div>
                <div className="text-[12px] text-gray-400">Min. légal : {tauxLegalT1}%</div>
              </div>
              <div className="bento p-6">
                <div className="text-[13px] text-gray-400 mb-1">Taux moyen pondéré T2</div>
                <div className="font-heading text-2xl font-bold text-navy">{tauxMoyenT2.toFixed(2)}%</div>
                <div className="text-[12px] text-gray-400">Min. légal : {tauxLegalT2}%</div>
              </div>
              <div className="bento p-6">
                <div className="text-[13px] text-gray-400 mb-1">Écart max T1</div>
                <div className={`font-heading text-xl font-bold ${ecartMaxT1 > 0.5 ? "text-red" : "text-green"}`}>{ecartMaxT1.toFixed(2)} pts</div>
              </div>
              <div className="bento p-6">
                <div className="text-[13px] text-gray-400 mb-1">Écart max T2</div>
                <div className={`font-heading text-xl font-bold ${ecartMaxT2 > 1 ? "text-red" : "text-green"}`}>{ecartMaxT2.toFixed(2)} pts</div>
              </div>
            </div>

            <button onClick={() => setShowModal(true)} className="w-full px-6 py-3.5 bg-teal text-white font-semibold rounded-2xl text-[15px] hover:bg-teal-light transition-all">
              📊 Rapport d&apos;harmonisation gratuit →
            </button>
          </div>
        )}

        <div className="mt-6 bento p-5 bg-cream-warm">
          <p className="text-[13px] text-gray-400">
            <span className="font-medium text-gray-600">Référence :</span> Taux minimaux AGIRC-ARRCO 2025 : T1 = 7,87% (dont 60% employeur) · T2 = 21,59% (dont 60% employeur).
            PASS 2025 : 47 100€. Au-delà de 1 PASS, la tranche 2 s&apos;applique.
          </p>
        </div>
      </div>
      <LeadCaptureModal open={showModal} onClose={() => setShowModal(false)} toolName="Score AGIRC-ARRCO" />
    </>
  );
}
