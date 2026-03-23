import { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez Exiliance pour un diagnostic de votre protection sociale. Paris et Lyon.",
};

export default function Contact() {
  return (
    <>
      <section className="relative pt-28 pb-16">
        <div className="absolute inset-0 blob-teal" />
        <div className="relative max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-2xl">
              <div className="pill bg-teal/5 text-teal border border-teal/10 mb-6">Contact</div>
              <h1 className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.1] text-navy mb-5">
                Parlons de votre protection sociale.
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                Un premier échange sans engagement pour comprendre vos enjeux et identifier les leviers d&apos;optimisation.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Form */}
            <ScrollReveal>
              <div className="bento p-8">
                <h2 className="font-heading text-xl font-bold text-navy mb-6">Envoyez-nous un message</h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[13px] font-medium text-gray-600 mb-1.5">Nom</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-cream text-navy text-[15px] focus:outline-none focus:border-teal/30 transition-colors" placeholder="Votre nom" />
                    </div>
                    <div>
                      <label className="block text-[13px] font-medium text-gray-600 mb-1.5">Entreprise</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-cream text-navy text-[15px] focus:outline-none focus:border-teal/30 transition-colors" placeholder="Votre entreprise" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[13px] font-medium text-gray-600 mb-1.5">Email</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-cream text-navy text-[15px] focus:outline-none focus:border-teal/30 transition-colors" placeholder="vous@entreprise.com" />
                  </div>
                  <div>
                    <label className="block text-[13px] font-medium text-gray-600 mb-1.5">Sujet</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-cream text-navy text-[15px] focus:outline-none focus:border-teal/30 transition-colors">
                      <option>Prévoyance & Santé</option>
                      <option>Épargne Salariale</option>
                      <option>AGIRC-ARRCO</option>
                      <option>Package Dirigeants</option>
                      <option>IFC</option>
                      <option>Autre</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[13px] font-medium text-gray-600 mb-1.5">Message</label>
                    <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-cream text-navy text-[15px] focus:outline-none focus:border-teal/30 transition-colors resize-none" placeholder="Décrivez votre besoin..." />
                  </div>
                  <button type="submit" className="w-full px-7 py-3.5 bg-teal text-white font-semibold rounded-2xl text-[15px] hover:bg-teal-light transition-all">
                    Envoyer →
                  </button>
                </form>
              </div>
            </ScrollReveal>

            {/* Infos */}
            <div className="space-y-4">
              <ScrollReveal delay={0.1}>
                <div className="bento p-8">
                  <h3 className="font-semibold text-navy text-[17px] mb-4">Coordonnées</h3>
                  <div className="space-y-3 text-gray-600 text-[15px]">
                    <div className="flex items-center gap-3">
                      <span className="text-lg">📧</span>
                      <span>contact@exiliance.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-lg">📞</span>
                      <span>01 49 95 98 45</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <div className="bento p-8">
                  <h3 className="font-semibold text-navy text-[17px] mb-4">Paris</h3>
                  <p className="text-gray-600 text-[15px]">20 rue Choron, 75009 Paris</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="bento p-8">
                  <h3 className="font-semibold text-navy text-[17px] mb-4">Lyon</h3>
                  <p className="text-gray-600 text-[15px]">65 rue Jacques Louis Hénon, 69004 Lyon</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.25}>
                <div className="bento p-8 bg-cream-warm">
                  <h3 className="font-semibold text-navy text-[17px] mb-2">Références</h3>
                  <div className="text-gray-600 text-[14px] space-y-1">
                    <p>ORIAS : 17002631 / 25008215</p>
                    <p>Service France Garantie</p>
                    <p>Partenaire Dairia Avocats</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
