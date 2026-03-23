import Link from "next/link";

const footerLinks = {
  offres: [
    { label: "Prévoyance & Santé", href: "/prevoyance-sante" },
    { label: "Épargne Salariale", href: "/epargne-salariale" },
    { label: "AGIRC-ARRCO", href: "/agirc-arrco" },
    { label: "Package Dirigeants", href: "/package-dirigeants" },
    { label: "IFC", href: "/ifc" },
  ],
  ressources: [
    { label: "Outils & Simulateurs", href: "/outils" },
    { label: "L'Équipe", href: "/equipe" },
    { label: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-navy-light border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold to-orange flex items-center justify-center font-heading text-navy font-bold text-xl">
                E
              </div>
              <span className="font-heading text-xl font-bold">Exiliance</span>
            </div>
            <p className="text-cream/50 text-sm leading-relaxed mb-4">
              Courtier et conseil en assurance de personnes. Santé, prévoyance,
              épargne salariale, retraite.
            </p>
            <p className="text-cream/30 text-xs">
              ORIAS : 17002631 / 25008215
            </p>
          </div>

          {/* Offres */}
          <div>
            <h4 className="font-heading text-gold text-sm font-semibold mb-4 uppercase tracking-wider">
              Nos Offres
            </h4>
            <ul className="space-y-3">
              {footerLinks.offres.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/50 hover:text-gold text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h4 className="font-heading text-gold text-sm font-semibold mb-4 uppercase tracking-wider">
              Ressources
            </h4>
            <ul className="space-y-3">
              {footerLinks.ressources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/50 hover:text-gold text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-gold text-sm font-semibold mb-4 uppercase tracking-wider">
              Contact
            </h4>
            <div className="space-y-3 text-cream/50 text-sm">
              <p>contact@exiliance.com</p>
              <p>01 49 95 98 45</p>
              <div className="pt-2">
                <p className="font-medium text-cream/70">Paris</p>
                <p>20 rue Choron, 75009</p>
              </div>
              <div>
                <p className="font-medium text-cream/70">Lyon</p>
                <p>65 rue Jacques Louis Hénon, 69004</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/30 text-xs">
            © {new Date().getFullYear()} Exiliance. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-cream/30 text-xs">
              En partenariat avec{" "}
              <span className="text-gold/60">Dairia Avocats</span>
              {" · "}
              <span className="text-cream/40">Gerep</span>
              {" · "}
              <span className="text-cream/40">Service France Garantie</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
