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

export function OfferHero({
  icon,
  title,
  subtitle,
  description,
  ctaText = "Lancer un diagnostic",
  ctaHref = "/outils",
}: OfferHeroProps) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setVisible(true), 200);
  }, []);

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-cream">
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-teal/5 blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-gold/5 blur-[120px]" />

      <div
        className={`relative z-10 max-w-4xl mx-auto px-6 text-center transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-5xl mb-6">{icon}</div>
        <span className="text-teal text-sm font-medium uppercase tracking-widest">
          {subtitle}
        </span>
        <h1 className="font-heading text-4xl md:text-6xl font-bold mt-4 mb-6 text-navy">
          {title}
        </h1>
        <p className="text-slate text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          {description}
        </p>
        <Link
          href={ctaHref}
          className="inline-block px-8 py-4 bg-teal text-white font-bold rounded-full hover:bg-teal-light hover:shadow-xl hover:shadow-teal/10 transition-all hover:scale-105"
        >
          {ctaText} →
        </Link>
      </div>
    </section>
  );
}
