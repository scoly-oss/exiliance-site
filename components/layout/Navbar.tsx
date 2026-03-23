"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  {
    label: "Offres",
    children: [
      { label: "Prévoyance & Santé", href: "/prevoyance-sante" },
      { label: "Épargne Salariale", href: "/epargne-salariale" },
      { label: "AGIRC-ARRCO", href: "/agirc-arrco" },
      { label: "Package Dirigeants", href: "/package-dirigeants" },
      { label: "IFC", href: "/ifc" },
    ],
  },
  { label: "Simulateurs", href: "/outils" },
  { label: "Équipe", href: "/equipe" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        mounted ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      } ${scrolled ? "bg-white/90 backdrop-blur-xl border-b border-gray-100" : "bg-transparent"}`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-xl bg-teal flex items-center justify-center text-white font-heading font-bold text-sm">
            E
          </div>
          <span className="font-heading text-lg font-bold text-navy group-hover:text-teal transition-colors">
            Exiliance
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button className="px-4 py-2 rounded-xl text-gray-600 hover:text-navy hover:bg-gray-50 transition-all text-[15px] font-medium flex items-center gap-1">
                  {link.label}
                  <svg className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`absolute top-full left-0 mt-1 w-56 bg-white rounded-2xl shadow-lg border border-gray-100 p-1.5 transition-all duration-150 ${
                  dropdownOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"
                }`}>
                  {link.children.map((child) => (
                    <Link key={child.href} href={child.href} className="block px-3.5 py-2.5 rounded-xl text-[14px] text-gray-600 hover:text-teal hover:bg-cream transition-all">
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={link.label} href={link.href!} className="px-4 py-2 rounded-xl text-gray-600 hover:text-navy hover:bg-gray-50 transition-all text-[15px] font-medium">
                {link.label}
              </Link>
            )
          )}
          <Link href="/outils" className="ml-3 px-5 py-2 bg-teal text-white text-[14px] font-semibold rounded-xl hover:bg-teal-light transition-all">
            Diagnostic gratuit
          </Link>
        </div>

        <button className="lg:hidden text-navy p-2 rounded-xl hover:bg-gray-50" onClick={() => setMobileOpen(!mobileOpen)}>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </nav>

      <div className={`lg:hidden bg-white border-b border-gray-100 overflow-hidden transition-all duration-200 ${mobileOpen ? "max-h-[400px]" : "max-h-0"}`}>
        <div className="px-6 py-4 space-y-1">
          {navLinks.map((link) =>
            link.children ? link.children.map((child) => (
              <Link key={child.href} href={child.href} onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 text-gray-600 hover:text-teal text-[15px] rounded-xl hover:bg-cream">
                {child.label}
              </Link>
            )) : (
              <Link key={link.label} href={link.href!} onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 text-gray-600 hover:text-teal text-[15px] rounded-xl hover:bg-cream">
                {link.label}
              </Link>
            )
          )}
          <Link href="/outils" onClick={() => setMobileOpen(false)} className="block text-center mt-3 px-5 py-2.5 bg-teal text-white text-[14px] font-semibold rounded-xl">
            Diagnostic gratuit
          </Link>
        </div>
      </div>
    </header>
  );
}
