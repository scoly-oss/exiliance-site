"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface Step {
  number: string;
  title: string;
  description: string;
}

interface ThreeStepsProps {
  title?: string;
  subtitle?: string;
  steps: Step[];
}

export function ThreeSteps({
  title = "Notre Réponse",
  subtitle = "Méthodologie",
  steps,
}: ThreeStepsProps) {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-medium uppercase tracking-widest">
              {subtitle}
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-4">
              {title}
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-gold/30 via-orange/30 to-gold/30" />

          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.15}>
              <div className="text-center relative">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-gold to-orange text-navy font-heading font-bold text-xl mb-6 relative z-10">
                  {step.number}
                </div>
                <h3 className="font-heading text-xl font-bold mb-3">
                  {step.title}
                </h3>
                <p className="text-cream/50 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
