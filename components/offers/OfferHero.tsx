"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface OfferHeroProps {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
}

export function OfferHero({ icon, title, subtitle, description, ctaText = "Lancer un diagnostic", ctaHref = "/outils" }: OfferHeroProps) {
  const [v, setV] = useState(false);
  useEffect(() => { setTimeout(() => setV(true), 150); }, []);

  return (
    <section className="relative pt-28 pb-16 overflow-hidden">
      <div className="absolute inset-0 blob-teal" />
      <div className="absolute inset-0 blob-gold" />
      <div className={`relative z-10 max-w-6xl mx-auto px-6 transition-all duration-700 ${v ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <div className="max-w-2xl">
          <div className="pill bg-teal/5 text-teal border border-teal/10 mb-6">
            <span className="text-xl">{icon}</span>
            {subtitle}
          </div>
          <h1 className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.1] text-navy mb-5">{title}</h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-xl">{description}</p>
          <Link href={ctaHref} className="inline-flex px-7 py-3.5 bg-teal text-white font-semibold rounded-2xl text-[15px] hover:bg-teal-light hover:shadow-lg hover:shadow-teal/10 transition-all">
            {ctaText} →
          </Link>
        </div>
      </div>
    </section>
  );
}
