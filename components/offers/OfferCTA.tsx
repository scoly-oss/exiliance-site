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
  primaryText = "Diagnostic gratuit",
  primaryHref = "/outils",
  secondaryText = "Nous contacter",
  secondaryHref = "/contact",
}: OfferCTAProps) {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <div className="bento p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 blob-teal" />
            <div className="absolute inset-0 blob-gold" />
            <div className="relative z-10">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-4">{title}</h2>
              <p className="text-gray-600 text-[16px] mb-8 max-w-md mx-auto leading-relaxed">{description}</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link href={primaryHref} className="px-7 py-3.5 bg-teal text-white font-semibold rounded-2xl text-[15px] hover:bg-teal-light transition-all">
                  {primaryText} →
                </Link>
                <Link href={secondaryHref} className="px-7 py-3.5 bg-white text-navy font-medium rounded-2xl text-[15px] border border-gray-100 hover:border-gray-200 transition-all">
                  {secondaryText}
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
