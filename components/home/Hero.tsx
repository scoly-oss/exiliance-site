"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const [v, setV] = useState(false);
  useEffect(() => { const t = setTimeout(() => setV(true), delay * 1000); return () => clearTimeout(t); }, [delay]);
  return <div className={`transition-all duration-700 ease-out ${v ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} ${className}`}>{children}</div>;
}

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Organic blobs */}
      <div className="absolute inset-0 blob-teal" />
      <div className="absolute inset-0 blob-gold" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20">
        <div className="max-w-3xl">
          <FadeIn delay={0.1}>
            <div className="pill bg-teal/5 text-teal border border-teal/10 mb-8">
              <span className="w-1.5 h-1.5 bg-green rounded-full animate-pulse" />
              Courtage & Conseil en Assurance de Personnes
            </div>
          </FadeIn>

          <FadeIn delay={0.25}>
            <h1 className="font-heading text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.05] text-navy mb-6">
              La protection sociale{" "}
              <span className="gradient-text">ne se subit plus.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10 max-w-xl">
              Elle devient un système pilotable, sûr et lisible — au service de vos collaborateurs et de votre performance.
            </p>
          </FadeIn>

          <FadeIn delay={0.55} className="flex flex-wrap items-center gap-3">
            <Link href="/outils" className="px-7 py-3.5 bg-teal text-white font-semibold rounded-2xl text-[15px] hover:bg-teal-light hover:shadow-lg hover:shadow-teal/10 transition-all">
              Diagnostic gratuit →
            </Link>
            <Link href="#how" className="px-7 py-3.5 bg-white text-navy font-medium rounded-2xl text-[15px] border border-gray-100 hover:border-gray-200 transition-all">
              Comment ça marche
            </Link>
          </FadeIn>
        </div>

        {/* Trust */}
        <FadeIn delay={0.8} className="mt-20 flex flex-wrap items-center gap-6 text-gray-400 text-[13px]">
          <span>ORIAS 17002631</span>
          <span className="w-1 h-1 bg-gray-200 rounded-full" />
          <span>Service France Garantie</span>
          <span className="w-1 h-1 bg-gray-200 rounded-full" />
          <span>Paris · Lyon</span>
        </FadeIn>
      </div>
    </section>
  );
}
