"use client";

import { useState } from "react";
import { LeadCaptureModal } from "./LeadCaptureModal";

export function SimulateurIFC() {
  const [effectif55, setEffectif55] = useState(10);
  const [anciennete, setAnciennete] = useState(15);
  const [salaireMoyen, setSalaireMoyen] = useState(45000);
  const [provisioned, setProvisioned] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Calcul simplifié IFC basé sur 1/5 mois par année d'ancienneté + 2/15 au-delà de 10 ans (Art. L.1234-9 Code du travail)
  const indemniteParSalarie = anciennete <= 10
    ? (salaireMoyen / 12) * (1 / 5) * anciennete
    : (salaireMoyen / 12) * ((1 / 5) * 10 + (2 / 15) * (anciennete - 10));

  const passifTotal = Math.round(indemniteParSalarie * effectif55);
  const passif10ans = Math.round(passifTotal * 1.35); // +35% projection 10 ans (turnover, revalorisations)
  const cotisationAnnuelle = Math.round(passifTotal / 10 * 1.05); // lissage 10 ans + frais assureur 5%
  const economieIS = Math.round(cotisationAnnuelle * 0.25); // déductibilité IS 25%

  return (
    <>
      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Inputs */}
          <div className="bento p-8">
            <h3 className="font-semibold text-navy text-[17px] mb-6">Paramètres</h3>
            <div className="space-y-6">
              <div>
                <label className="flex justify-between text-[13px] text-gray-600 mb-2">
                  <span>Salariés de 55 ans et plus</span>
                  <span className="font-semibold text-navy">{effectif55}</span>
                </label>
                <input type="range" min={1} max={100} value={effectif55} onChange={(e) => setEffectif55(+e.target.value)}
                  className="w-full accent-teal" />
              </div>
              <div>
                <label className="flex justify-between text-[13px] text-gray-600 mb-2">
                  <span>Ancienneté moyenne (années)</span>
                  <span className="font-semibold text-navy">{anciennete}</span>
                </label>
                <input type="range" min={5} max={40} value={anciennete} onChange={(e) => setAnciennete(+e.target.value)}
                  className="w-full accent-teal" />
              </div>
              <div>
                <label className="flex justify-between text-[13px] text-gray-600 mb-2">
                  <span>Salaire brut annuel moyen</span>
                  <span className="font-semibold text-navy">{salaireMoyen.toLocaleString("fr-FR")}€</span>
                </label>
                <input type="range" min={25000} max={120000} step={1000} value={salaireMoyen} onChange={(e) => setSalaireMoyen(+e.target.value)}
                  className="w-full accent-teal" />
              </div>
              <label className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 cursor-pointer hover:border-teal/20 transition-all">
                <input type="checkbox" checked={provisioned} onChange={(e) => setProvisioned(e.target.checked)} className="accent-teal w-4 h-4" />
                <span className="text-[14px] text-gray-600">IFC déjà provisionnées en interne</span>
              </label>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-4">
            <div className="bento p-6 border-l-4 border-red">
              <div className="text-[13px] text-gray-400 mb-1">Passif IFC estimé (actuel)</div>
              <div className="font-heading text-3xl font-bold text-navy">{passifTotal.toLocaleString("fr-FR")}€</div>
              {!provisioned && <div className="text-[13px] text-red mt-1">⚠️ Non provisionné — risque bilan</div>}
            </div>
            <div className="bento p-6 border-l-4 border-orange">
              <div className="text-[13px] text-gray-400 mb-1">Projection à 10 ans</div>
              <div className="font-heading text-3xl font-bold text-navy">{passif10ans.toLocaleString("fr-FR")}€</div>
              <div className="text-[13px] text-gray-400 mt-1">Incluant turnover et revalorisations</div>
            </div>
            <div className="bento p-6 border-l-4 border-green">
              <div className="text-[13px] text-gray-400 mb-1">Cotisation annuelle (externalisation)</div>
              <div className="font-heading text-2xl font-bold text-navy">{cotisationAnnuelle.toLocaleString("fr-FR")}€/an</div>
              <div className="text-[13px] text-green mt-1">💰 Économie IS : {economieIS.toLocaleString("fr-FR")}€/an</div>
            </div>
            <button onClick={() => setShowModal(true)} className="w-full px-6 py-3.5 bg-teal text-white font-semibold rounded-2xl text-[15px] hover:bg-teal-light transition-all">
              📊 Rapport détaillé gratuit →
            </button>
          </div>
        </div>

        <div className="mt-6 bento p-5 bg-cream-warm">
          <p className="text-[13px] text-gray-400">
            <span className="font-medium text-gray-600">Base de calcul :</span> Indemnité légale (Art. L.1234-9 Code du travail) : 1/5 mois par année + 2/15 au-delà de 10 ans.
            Projection intégrant un taux de turnover de 5% et une revalorisation salariale de 2%/an. Estimation indicative.
          </p>
        </div>
      </div>

      <LeadCaptureModal open={showModal} onClose={() => setShowModal(false)} toolName="Simulateur IFC" />
    </>
  );
}
