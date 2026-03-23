"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function CTASection() {
  return (
    <section className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="bento p-12 md:p-20 text-center relative overflow-hidden">
            {/* Subtle organic bg */}
            <div className="absolute inset-0 blob-teal" />
            <div className="absolute inset-0 blob-gold" />

            <div className="relative z-10">
              <h2 className="font-heading text-3xl md:text-[2.75rem] font-bold leading-tight text-navy mb-5">
                Prêt à reprendre le contrôle ?
              </h2>
              <p className="text-gray-600 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
                En 3 minutes, notre audit flash évalue vos dispositifs. Résultats immédiats, rapport détaillé offert.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link href="/outils" className="px-8 py-4 bg-teal text-white font-semibold rounded-2xl text-[15px] hover:bg-teal-light hover:shadow-lg hover:shadow-teal/10 transition-all">
                  Lancer le diagnostic gratuit →
                </Link>
                <Link href="/contact" className="px-8 py-4 bg-white text-navy font-medium rounded-2xl text-[15px] border border-gray-100 hover:border-gray-200 transition-all">
                  Nous contacter
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
