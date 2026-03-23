"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface OfferCTAProps {
  title?: string;
  description?: string;
  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
}

export function OfferCTA({
  title = "Besoin d'un diagnostic ?",
  description = "Nos experts analysent votre situation et vous proposent un plan d'action sur-mesure.",
  primaryText = "Lancer le diagnostic gratuit",
  primaryHref = "/outils",
  secondaryText = "Nous contacter",
  secondaryHref = "/contact",
}: OfferCTAProps) {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <div className="glass rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-orange to-gold" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              {title}
            </h2>
            <p className="text-cream/50 text-lg mb-10 max-w-xl mx-auto">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={primaryHref}
                className="px-8 py-4 bg-gradient-to-r from-gold to-orange text-navy font-bold rounded-full hover:shadow-xl hover:shadow-gold/20 transition-all hover:scale-105"
              >
                {primaryText} →
              </Link>
              <Link
                href={secondaryHref}
                className="px-8 py-4 glass text-cream/80 font-medium rounded-full hover:text-gold transition-all"
              >
                {secondaryText}
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
