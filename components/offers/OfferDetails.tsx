"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface Detail {
  icon: string;
  title: string;
  description: string;
}

interface OfferDetailsProps {
  title: string;
  subtitle?: string;
  details: Detail[];
}

export function OfferDetails({
  title,
  subtitle = "Points de vigilance",
  details,
}: OfferDetailsProps) {
  return (
    <section className="py-24 relative">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-teal/5 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-teal text-sm font-medium uppercase tracking-widest">
              {subtitle}
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-4 text-navy">
              {title}
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {details.map((detail, i) => (
            <ScrollReveal key={detail.title} delay={i * 0.1}>
              <div className="card rounded-2xl p-6 h-full transition-all">
                <div className="text-2xl mb-4">{detail.icon}</div>
                <h3 className="font-heading text-lg font-bold mb-2 text-navy">
                  {detail.title}
                </h3>
                <p className="text-slate text-sm leading-relaxed">
                  {detail.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
