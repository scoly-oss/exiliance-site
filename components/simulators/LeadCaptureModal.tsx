"use client";

import { useState } from "react";

interface LeadCaptureModalProps {
  open: boolean;
  onClose: () => void;
  toolName: string;
  score?: number;
}

export function LeadCaptureModal({ open, onClose, toolName, score }: LeadCaptureModalProps) {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production: POST to /api/lead
    setSent(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-navy/40 backdrop-blur-sm" />
      <div className="relative bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
        {sent ? (
          <div className="text-center py-4">
            <div className="text-4xl mb-4">✅</div>
            <h3 className="font-heading text-xl font-bold text-navy mb-2">Rapport envoyé !</h3>
            <p className="text-gray-600 text-[15px]">Consultez votre boîte mail pour votre rapport détaillé.</p>
            <button onClick={onClose} className="mt-6 px-6 py-3 bg-teal text-white font-semibold rounded-2xl text-[14px]">Fermer</button>
          </div>
        ) : (
          <>
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-navy text-xl">×</button>
            <div className="text-center mb-6">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-heading text-xl font-bold text-navy mb-2">Votre rapport détaillé</h3>
              <p className="text-gray-600 text-[14px]">
                {score !== undefined && <>Score : <span className="font-bold text-teal">{score}/100</span>. </>}
                Recevez votre analyse complète avec recommandations personnalisées.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="vous@entreprise.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-cream text-navy text-[15px] focus:outline-none focus:border-teal/30"
              />
              <button type="submit" className="w-full px-6 py-3.5 bg-teal text-white font-semibold rounded-2xl text-[15px] hover:bg-teal-light transition-all">
                Recevoir mon rapport gratuit →
              </button>
              <p className="text-gray-400 text-[12px] text-center">Aucun spam. Vos données restent confidentielles.</p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
