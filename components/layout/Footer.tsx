import Link from "next/link";

export function Footer() {
  return (
    <footer className="section-dark">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center font-heading text-white font-bold text-sm">E</div>
              <span className="font-heading text-lg font-bold text-white">Exiliance</span>
            </div>
            <p className="text-white/40 text-[14px] leading-relaxed mb-3">
              Courtier et conseil en assurance de personnes.
            </p>
            <p className="text-white/25 text-[12px]">ORIAS : 17002631 / 25008215</p>
          </div>

          <div>
            <h4 className="text-white/60 text-[12px] font-semibold uppercase tracking-wider mb-4">Offres</h4>
            <div className="space-y-2.5">
              {[
                { l: "Prévoyance & Santé", h: "/prevoyance-sante" },
                { l: "Épargne Salariale", h: "/epargne-salariale" },
                { l: "AGIRC-ARRCO", h: "/agirc-arrco" },
                { l: "Package Dirigeants", h: "/package-dirigeants" },
                { l: "IFC", h: "/ifc" },
              ].map((i) => (
                <Link key={i.h} href={i.h} className="block text-white/40 hover:text-white text-[14px] transition-colors">{i.l}</Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white/60 text-[12px] font-semibold uppercase tracking-wider mb-4">Ressources</h4>
            <div className="space-y-2.5">
              <Link href="/outils" className="block text-white/40 hover:text-white text-[14px] transition-colors">Simulateurs</Link>
              <Link href="/equipe" className="block text-white/40 hover:text-white text-[14px] transition-colors">Équipe</Link>
              <Link href="/contact" className="block text-white/40 hover:text-white text-[14px] transition-colors">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="text-white/60 text-[12px] font-semibold uppercase tracking-wider mb-4">Contact</h4>
            <div className="space-y-2.5 text-white/40 text-[14px]">
              <p>contact@exiliance.com</p>
              <p>01 49 95 98 45</p>
              <div className="pt-2">
                <p className="text-white/60 font-medium">Paris</p>
                <p>20 rue Choron, 75009</p>
              </div>
              <div>
                <p className="text-white/60 font-medium">Lyon</p>
                <p>65 rue J.L. Hénon, 69004</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-white/20 text-[12px]">© {new Date().getFullYear()} Exiliance. Tous droits réservés.</p>
          <p className="text-white/20 text-[12px]">
            Partenariat <span className="text-white/30">Dairia Avocats</span> · <span className="text-white/30">Gerep</span> · <span className="text-white/30">Service France Garantie</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
