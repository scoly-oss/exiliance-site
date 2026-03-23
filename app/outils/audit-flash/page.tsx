import { Metadata } from "next";
import { AuditFlash } from "@/components/simulators/AuditFlash";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = { title: "Audit Flash Protection Sociale" };

export default function AuditFlashPage() {
  return (
    <>
      <section className="relative pt-28 pb-12">
        <div className="absolute inset-0 blob-teal" />
        <div className="relative max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-2xl mb-10">
              <div className="pill bg-teal/5 text-teal border border-teal/10 mb-6">🔍 Audit Flash</div>
              <h1 className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] text-navy mb-4">
                Évaluez votre protection sociale en 3 minutes.
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                12 questions fondées sur le BOSS et le Code de la sécurité sociale. Score instantané + recommandations personnalisées.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <section className="py-12 pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <AuditFlash />
        </div>
      </section>
    </>
  );
}
