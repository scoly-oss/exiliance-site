"use client";

import { useState } from "react";
import { LeadCaptureModal } from "./LeadCaptureModal";

export function SimulateurEpargne() {
  const [effectif, setEffectif] = useState(80);
  const [masseSalariale, setMasseSalariale] = useState(3500000);
  const [tauxInteressement, setTauxInteressement] = useState(3);
  const [abondement, setAbondement] = useState(300);
  const [hasPEE, setHasPEE] = useState(true);
  const [showModal, setShowModal] = useState(false);

  // Calculs
  const interessement = Math.round(masseSalariale * tauxInteressement / 100);
  const interessementParSalarie = Math.round(interessement / effectif);
  const forfaitSocial = effectif >= 250 ? Math.round(interessement * 0.20) : 0; // 20% si ≥250 sal.
  const abondementTotal = abondement * effectif;

  // Économies vs prime classique
  const coutPrimeEquivalente = Math.round(interessement * 1.45); // charges patronales ~45%
  const economieEmployeur = coutPrimeEquivalente - interessement - forfaitSocial;
  const gainNetSalarie = Math.round(interessementParSalarie * 0.903); // CSG/CRDS 9.7% mais PEE exonéré IR
  const primeNetteEquivalente = Math.round(interessementParSalarie * 0.77); // IR + charges salariales

  // PASS 2025 = 47 100€ — plafond abondement PEE = 8% PASS = 3 768€
  const plafondAbondement = 3768;

  return (
    <>
      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bento p-8">
            <h3 className="font-semibold text-navy text-[17px] mb-6">Paramètres entreprise</h3>
            <div className="space-y-6">
              <div>
                <label className="flex justify-between text-[13px] text-gray-600 mb-2">
                  <span>Effectif</span><span className="font-semibold text-navy">{effectif}</span>
                </label>
                <input type="range" min={5} max={500} value={effectif} onChange={(e) => setEffectif(+e.target.value)} className="w-full accent-teal" />
              </div>
              <div>
                <label className="flex justify-between text-[13px] text-gray-600 mb-2">
                  <span>Masse salariale brute annuelle</span><span className="font-semibold text-navy">{masseSalariale.toLocaleString("fr-FR")}€</span>
                </label>
                <input type="range" min={200000} max={20000000} step={100000} value={masseSalariale} onChange={(e) => setMasseSalariale(+e.target.value)} className="w-full accent-teal" />
              </div>
              <div>
                <label className="flex justify-between text-[13px] text-gray-600 mb-2">
                  <span>Taux d&apos;intéressement</span><span className="font-semibold text-navy">{tauxInteressement}%</span>
                </label>
                <input type="range" min={0.5} max={10} step={0.5} value={tauxInteressement} onChange={(e) => setTauxInteressement(+e.target.value)} className="w-full accent-gold" />
              </div>
              <div>
                <label className="flex justify-between text-[13px] text-gray-600 mb-2">
                  <span>Abondement PEE/salarié</span><span className="font-semibold text-navy">{abondement}€</span>
                </label>
                <input type="range" min={0} max={plafondAbondement} step={50} value={abondement} onChange={(e) => setAbondement(+e.target.value)} className="w-full accent-gold" />
                <div className="text-[12px] text-gray-400 mt-1">Plafond : {plafondAbondement.toLocaleString("fr-FR")}€ (8% PASS 2025)</div>
              </div>
              <label className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 cursor-pointer">
                <input type="checkbox" checked={hasPEE} onChange={(e) => setHasPEE(e.target.checked)} className="accent-teal w-4 h-4" />
                <span className="text-[14px] text-gray-600">PEE en place (exonération IR si affecté)</span>
              </label>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bento p-6 border-l-4 border-teal">
              <div className="text-[13px] text-gray-400 mb-1">Intéressement total</div>
              <div className="font-heading text-3xl font-bold text-navy">{interessement.toLocaleString("fr-FR")}€</div>
              <div className="text-[13px] text-gray-400 mt-1">{interessementParSalarie.toLocaleString("fr-FR")}€ par salarié</div>
            </div>
            <div className="bento p-6 border-l-4 border-green">
              <div className="text-[13px] text-gray-400 mb-1">Économie employeur vs prime classique</div>
              <div className="font-heading text-2xl font-bold text-green">+{economieEmployeur.toLocaleString("fr-FR")}€</div>
              <div className="text-[13px] text-gray-400 mt-1">
                {forfaitSocial > 0 ? `Forfait social 20% : ${forfaitSocial.toLocaleString("fr-FR")}€` : "Pas de forfait social (<250 sal.)"}
              </div>
            </div>
            <div className="bento p-6 border-l-4 border-gold">
              <div className="text-[13px] text-gray-400 mb-1">Gain net salarié {hasPEE ? "(PEE)" : "(direct)"}</div>
              <div className="flex items-end gap-3">
                <div>
                  <div className="font-heading text-2xl font-bold text-navy">{(hasPEE ? gainNetSalarie : primeNetteEquivalente).toLocaleString("fr-FR")}€</div>
                  <div className="text-[12px] text-gray-400">vs {primeNetteEquivalente.toLocaleString("fr-FR")}€ en prime classique</div>
                </div>
                {hasPEE && <span className="text-green text-[13px] font-medium">+{Math.round((gainNetSalarie / primeNetteEquivalente - 1) * 100)}%</span>}
              </div>
            </div>
            {abondementTotal > 0 && (
              <div className="bento p-6 border-l-4 border-indigo">
                <div className="text-[13px] text-gray-400 mb-1">Abondement total</div>
                <div className="font-heading text-xl font-bold text-navy">{abondementTotal.toLocaleString("fr-FR")}€/an</div>
              </div>
            )}
            <button onClick={() => setShowModal(true)} className="w-full px-6 py-3.5 bg-teal text-white font-semibold rounded-2xl text-[15px] hover:bg-teal-light transition-all">
              📊 Rapport complet gratuit →
            </button>
          </div>
        </div>

        <div className="mt-6 bento p-5 bg-cream-warm">
          <p className="text-[13px] text-gray-400">
            <span className="font-medium text-gray-600">Références :</span> PASS 2025 : 47 100€. Forfait social 20% (≥250 sal., Art. L.137-15 CSS).
            Plafond individuel intéressement : 75% PASS = 35 325€. Abondement PEE max : 8% PASS = 3 768€. CSG/CRDS : 9,7%.
          </p>
        </div>
      </div>
      <LeadCaptureModal open={showModal} onClose={() => setShowModal(false)} toolName="Simulateur Épargne" />
    </>
  );
}
