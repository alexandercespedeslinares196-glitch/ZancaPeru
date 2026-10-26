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
            ? 'glass-card shadow-card py-3 border-b border-border/60'
            : 'bg-transparent py-5'
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
                <span className={`text-lg sm:text-xl font-black tracking-tight ${isScrolled ? "text-foreground" : "text-white"}`}>Zanca</span>
                <span className={`text-[10px] font-bold ${isScrolled ? "text-border" : "text-white/30"} mx-0.5`}>|</span>
                <span className="text-gradient-cyan text-lg sm:text-xl font-black tracking-tight">Limpieza</span>
              </div>
              <span className={`text-[10px] font-semibold tracking-wider uppercase -mt-1 ${
                isScrolled ? "text-muted-foreground" : "text-ink-300"
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
                className={`text-sm font-medium transition-colors hover:text-primary relative py-1 ${
                  link.highlight
                    ? 'text-primary font-semibold px-3 py-1 rounded-full bg-primary/10 border border-primary/20'
                    : isScrolled
                    ? 'text-muted-foreground hover:text-foreground'
                    : 'text-ink-200 hover:text-white'
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
              className={`hidden md:flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg transition-colors ${
                isScrolled ? "text-foreground hover:bg-muted" : "text-white/90 hover:bg-white/10"
              }`}
            >
              <Phone className="h-3.5 w-3.5 text-aqua-400" />
              <span>{BUSINESS_CONFIG.phone}</span>
            </a>

            <a
              href={getWhatsAppUrl("Hola, Zanca Limpieza. Quisiera una cotización para lavar...")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba5a] text-white text-sm font-bold px-4 py-2.5 rounded-xl flex items-center gap-2 shadow-card hover:scale-105 transition-all"
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
                ? 'border-border text-foreground bg-card'
                : 'border-white/20 text-white bg-black/20'
            }`}
            aria-label="Abrir menú de navegación"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-ink-950/90 backdrop-blur-md lg:hidden pt-24 px-6 pb-8 flex flex-col justify-between">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-aqua-400" />
                <span className="text-xs text-ink-300 font-medium">+10 años de experiencia en Cajamarca</span>
              </div>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-lg font-medium py-2 border-b border-white/5 transition-colors ${
                  link.highlight
                    ? 'text-aqua-400 font-bold flex items-center justify-between'
                    : 'text-ink-200 hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                {link.highlight && (
                  <span className="text-xs bg-brand-500/20 text-aqua-300 px-2.5 py-0.5 rounded-full border border-brand-500/30">
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
              className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-lg text-center"
            >
              <MessageCircle className="h-5 w-5 fill-white" />
              <span>Cotizar por WhatsApp</span>
            </a>

            <p className="text-center text-xs text-ink-400">
              {BUSINESS_CONFIG.phone} • Atención con cita previa
            </p>
          </div>
        </div>
      )}
    </>
  );
};
