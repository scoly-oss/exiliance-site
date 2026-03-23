import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Exiliance | Protection Sociale Pilotée, Sécurisée, Performante",
    template: "%s | Exiliance",
  },
  description:
    "Courtage et conseil en assurance de personnes : santé, prévoyance, épargne salariale, retraite. Une protection sociale sur-mesure pour les entreprises.",
  keywords: [
    "protection sociale",
    "courtage assurance",
    "prévoyance",
    "santé entreprise",
    "épargne salariale",
    "AGIRC-ARRCO",
    "IFC",
    "package dirigeants",
  ],
  openGraph: {
    title: "Exiliance | Protection Sociale Pilotée",
    description:
      "Transformez vos obligations sociales en leviers de performance.",
    url: "https://exiliance.com",
    siteName: "Exiliance",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${playfair.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-cream text-navy">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
