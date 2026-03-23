"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  {
    label: "Nos Offres",
    children: [
      { label: "Prévoyance & Santé", href: "/prevoyance-sante" },
      { label: "Épargne Salariale", href: "/epargne-salariale" },
      { label: "AGIRC-ARRCO", href: "/agirc-arrco" },
      { label: "Package Dirigeants", href: "/package-dirigeants" },
      { label: "IFC", href: "/ifc" },
    ],
  },
  { label: "Outils & Simulateurs", href: "/outils" },
  { label: "L'Équipe", href: "/equipe" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        mounted ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      } ${scrolled ? "glass py-3" : "bg-transparent py-5"}`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold to-orange flex items-center justify-center font-heading text-navy font-bold text-xl">
            E
          </div>
          <span className="font-heading text-xl font-bold text-cream group-hover:text-gold transition-colors">
            Exiliance
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button className="text-cream/70 hover:text-gold transition-colors text-sm font-medium flex items-center gap-1">
                  {link.label}
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`absolute top-full left-0 mt-2 w-64 glass rounded-xl p-2 transition-all duration-200 ${
                    dropdownOpen
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 translate-y-2 pointer-events-none"
                  }`}
                >
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-3 rounded-lg text-sm text-cream/70 hover:text-gold hover:bg-white/5 transition-all"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href!}
                className="text-cream/70 hover:text-gold transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/outils"
            className="ml-4 px-6 py-2.5 bg-gradient-to-r from-gold to-orange text-navy font-semibold text-sm rounded-full hover:shadow-lg hover:shadow-gold/20 transition-all hover:scale-105"
          >
            Diagnostic Gratuit
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-cream"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden glass mt-2 mx-4 rounded-xl overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4 space-y-2">
          {navLinks.map((link) =>
            link.children ? (
              link.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-cream/70 hover:text-gold text-sm rounded-lg hover:bg-white/5"
                >
                  {child.label}
                </Link>
              ))
            ) : (
              <Link
                key={link.label}
                href={link.href!}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-cream/70 hover:text-gold text-sm rounded-lg hover:bg-white/5"
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/outils"
            onClick={() => setMobileOpen(false)}
            className="block text-center mt-4 px-6 py-3 bg-gradient-to-r from-gold to-orange text-navy font-semibold text-sm rounded-full"
          >
            Diagnostic Gratuit
          </Link>
        </div>
      </div>
    </header>
  );
}
