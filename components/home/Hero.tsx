"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay * 1000);
    return () => clearTimeout(t);
  }, [delay]);
  return (
    <div
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream">
      {/* Soft radial accents */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-teal/5 blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gold/5 blur-[120px]" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(10,22,40,1) 1px, transparent 1px), linear-gradient(90deg, rgba(10,22,40,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <FadeIn delay={0.2} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal/5 border border-teal/10 text-xs font-medium text-teal uppercase tracking-widest">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            Courtage & Conseil en Assurance de Personnes
          </span>
        </FadeIn>

        <FadeIn delay={0.4}>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-8 text-navy">
            La protection sociale
            <br />
            <span className="gradient-text">ne se subit plus.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.6}>
          <p className="text-lg md:text-xl text-slate max-w-2xl mx-auto mb-12 leading-relaxed">
            Elle devient un système pilotable, sûr et lisible — où risque, budget
            et conformité s&apos;alignent au service de vos collaborateurs et de votre
            performance.
          </p>
        </FadeIn>

        <FadeIn delay={0.8} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/outils"
            className="group px-8 py-4 bg-teal text-white font-bold rounded-full text-base hover:bg-teal-light hover:shadow-xl hover:shadow-teal/10 transition-all hover:scale-105"
          >
            Diagnostiquez votre protection sociale
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
          <Link
            href="#why"
            className="px-8 py-4 border border-navy/10 text-navy font-medium rounded-full text-base hover:border-teal/30 hover:text-teal transition-all"
          >
            Découvrir notre approche
          </Link>
        </FadeIn>

        {/* Trust badges */}
        <FadeIn delay={1.2} className="mt-20 flex items-center justify-center gap-8 text-slate-light text-xs">
          <span>ORIAS 17002631</span>
          <span className="w-1 h-1 bg-navy/20 rounded-full" />
          <span>Service France Garantie</span>
          <span className="w-1 h-1 bg-navy/20 rounded-full" />
          <span>Paris · Lyon</span>
        </FadeIn>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-navy/15 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-teal rounded-full" />
        </div>
      </div>
    </section>
  );
}
