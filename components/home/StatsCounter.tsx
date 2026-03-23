"use client";

import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const stats = [
  { end: 8, suffix: " ans", label: "d'expertise en protection sociale" },
  { end: 200, suffix: "+", label: "entreprises accompagnées" },
  { end: 15000, suffix: "+", label: "salariés couverts" },
  { end: 98, suffix: "%", label: "de clients renouvelés" },
];

export function StatsCounter() {
  return (
    <section className="py-24 relative bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="bg-teal rounded-3xl p-12 md:p-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {stats.map((stat) => (
                <AnimatedCounter
                  key={stat.label}
                  end={stat.end}
                  suffix={stat.suffix}
                  label={stat.label}
                  light
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
