import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, Phone, Clock } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppUrl } from '../data/config';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Servicios", href: "#servicios" },
    { label: "Resultados", href: "#resultados" },
    { label: "Cotización", href: "#cotizador", highlight: true },
    { label: "Método", href: "#metodo" },
    { label: "Cobertura", href: "#cobertura" },
    { label: "Opiniones", href: "#opiniones" },
    { label: "FAQ", href: "#faq" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200 py-3'
            : 'bg-slate-950/80 backdrop-blur-md border-b border-white/10 py-3.5'
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-6">
          {/* Logo — Zanca | Limpieza */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <span className="text-white font-black text-lg leading-none">Z</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className={`text-lg sm:text-xl font-black tracking-tight ${isScrolled ? "text-slate-900" : "text-white"}`}>
                  Zanca
                </span>
                <span className={`text-[11px] font-bold ${isScrolled ? "text-slate-400" : "text-white/40"} mx-0.5`}>
                  |
                </span>
                <span className={`text-lg sm:text-xl font-black tracking-tight ${isScrolled ? "text-primary" : "text-cyan-400"}`}>
                  Limpieza
                </span>
              </div>
              <span className={`text-[10px] font-bold tracking-wider uppercase -mt-0.5 ${
                isScrolled ? "text-slate-500" : "text-cyan-200"
              }`}>
                Cajamarca y Baños del Inca
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition-colors relative py-1 ${
                  link.highlight
                    ? isScrolled
                      ? 'text-primary font-bold px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/30'
                      : 'text-white font-bold px-3.5 py-1.5 rounded-full bg-cyan-500/25 border border-cyan-400/50 hover:bg-cyan-500/40'
                    : isScrolled
                    ? 'text-slate-700 hover:text-primary'
                    : 'text-white hover:text-cyan-300'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${BUSINESS_CONFIG.phoneRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden md:flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-lg transition-colors ${
                isScrolled ? "text-slate-800 hover:bg-slate-100" : "text-white hover:text-cyan-300 hover:bg-white/10"
              }`}
            >
              <Phone className={`h-3.5 w-3.5 ${isScrolled ? "text-primary" : "text-cyan-400"}`} />
              <span>{BUSINESS_CONFIG.phone}</span>
            </a>

            <a
              href={getWhatsAppUrl("Hola, Zanca Limpieza. Quisiera una cotización para lavar...")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba5a] text-white text-sm font-bold px-4 py-2.5 rounded-xl flex items-center gap-2 shadow-md hover:scale-105 active:scale-95 transition-all"
            >
              <MessageCircle className="h-4 w-4 fill-white" />
              <span>Cotizar por WhatsApp</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-xl border transition-colors ${
              isScrolled
                ? 'border-slate-200 text-slate-800 bg-slate-50'
                : 'border-white/20 text-white bg-white/10'
            }`}
            aria-label="Abrir menú de navegación"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl lg:hidden pt-24 px-6 pb-8 flex flex-col justify-between">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-cyan-400" />
                <span className="text-xs text-white font-semibold">+10 años de experiencia en Cajamarca</span>
              </div>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-lg font-bold py-2 border-b border-white/10 transition-colors ${
                  link.highlight
                    ? 'text-cyan-400 flex items-center justify-between'
                    : 'text-white hover:text-cyan-300'
                }`}
              >
                <span>{link.label}</span>
                {link.highlight && (
                  <span className="text-xs bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full border border-cyan-400/40">
                    Solicitar
                  </span>
                )}
              </a>
            ))}
          </div>

          <div className="pt-6 space-y-3">
            <a
              href={getWhatsAppUrl("Hola, Zanca Limpieza. Quisiera una cotización para lavar...")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-lg text-center text-base"
            >
              <MessageCircle className="h-5 w-5 fill-white" />
              <span>Cotizar por WhatsApp</span>
            </a>

            <p className="text-center text-xs text-slate-300 font-medium">
              {BUSINESS_CONFIG.phone} • Atención con cita previa
            </p>
          </div>
        </div>
      )}
    </>
  );
};
