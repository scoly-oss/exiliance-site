"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface Detail { icon: string; title: string; description: string; }
interface OfferDetailsProps { title: string; subtitle?: string; details: Detail[]; }

export function OfferDetails({ title, subtitle = "Périmètre", details }: OfferDetailsProps) {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 blob-green" />
      <div className="relative max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="max-w-2xl mb-14">
            <div className="pill bg-gold/8 text-gold border border-gold/15 mb-6">{subtitle}</div>
            <h2 className="font-heading text-3xl md:text-[2.5rem] font-bold leading-tight text-navy">{title}</h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {details.map((d, i) => (
            <ScrollReveal key={d.title} delay={i * 0.06}>
              <div className="bento p-6 h-full">
                <div className="text-2xl mb-3">{d.icon}</div>
                <h3 className="font-semibold text-navy text-[16px] mb-1.5">{d.title}</h3>
                <p className="text-gray-600 text-[14px] leading-relaxed">{d.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
