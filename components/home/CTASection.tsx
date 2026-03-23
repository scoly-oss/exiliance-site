"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function CTASection() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Big glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/10 blur-[200px]" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              Prêt à reprendre le contrôle
              <br />
              <span className="gradient-text">
                de votre protection sociale ?
              </span>
            </h2>
            <p className="text-cream/50 text-lg mb-12 max-w-2xl mx-auto">
              En 3 minutes, notre audit flash évalue la conformité et la
              performance de vos dispositifs. Résultats immédiats, rapport
              détaillé offert.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/outils"
                className="inline-block px-10 py-5 bg-gradient-to-r from-gold to-orange text-navy font-bold rounded-full text-lg hover:shadow-2xl hover:shadow-gold/30 transition-all hover:scale-105 active:scale-95"
              >
                Lancer le diagnostic gratuit →
              </Link>
              <Link
                href="/contact"
                className="px-10 py-5 glass text-cream/80 font-medium rounded-full text-lg hover:text-gold transition-all"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
