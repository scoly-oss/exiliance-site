"use client";

import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const stats = [
  { end: 8, suffix: " ans", label: "d'expertise" },
  { end: 200, suffix: "+", label: "entreprises" },
  { end: 15000, suffix: "+", label: "salariés couverts" },
  { end: 98, suffix: "%", label: "renouvellement" },
];

export function StatsCounter() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="section-dark rounded-3xl p-10 md:p-14">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((s) => (
                <AnimatedCounter key={s.label} end={s.end} suffix={s.suffix} label={s.label} light />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
