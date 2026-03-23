"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface Step { number: string; title: string; description: string; }
interface ThreeStepsProps { title?: string; subtitle?: string; steps: Step[]; }

const colors = ["bg-teal", "bg-gold", "bg-green"];

export function ThreeSteps({ title = "Notre Réponse", subtitle = "Méthodologie", steps }: ThreeStepsProps) {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="max-w-2xl mb-14">
            <div className="pill bg-teal/5 text-teal border border-teal/10 mb-6">{subtitle}</div>
            <h2 className="font-heading text-3xl md:text-[2.5rem] font-bold leading-tight text-navy">{title}</h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.1}>
              <div className="bento p-8 h-full">
                <div className={`w-10 h-10 ${colors[i] || "bg-teal"} rounded-xl flex items-center justify-center text-white font-bold text-sm mb-6`}>
                  {step.number}
                </div>
                <h3 className="font-heading text-lg font-bold text-navy mb-2">{step.title}</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
