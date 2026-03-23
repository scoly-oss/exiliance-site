import { Metadata } from "next";
import { MythesRealites } from "@/components/simulators/MythesRealites";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = { title: "Mythes vs Réalités" };

export default function MythesPage() {
  return (
    <>
      <section className="relative pt-28 pb-12">
        <div className="absolute inset-0 blob-green" />
        <div className="relative max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-2xl mb-10">
              <div className="pill bg-green/8 text-green border border-green/15 mb-6">🎯 Mythes vs Réalités</div>
              <h1 className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] text-navy mb-4">
                Démêlez le vrai du faux.
              </h1>
              <p className="text-gray-600 text-lg">10 affirmations sur la protection sociale. Mythe ou réalité ? Testez vos certitudes !</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <section className="py-12 pb-28"><div className="max-w-6xl mx-auto px-6"><MythesRealites /></div></section>
    </>
  );
}
