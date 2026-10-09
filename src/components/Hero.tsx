import React from 'react';
import { ShieldCheck, Clock, Leaf, ArrowRight, Calculator, Star } from 'lucide-react';
import { getWhatsAppUrl } from '../data/config';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Dark Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero.jpg"
          alt="Limpieza profesional de muebles en sala limpia"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.45] contrast-[1.15]"
        />
        {/* Subtle cyan and navy ambient gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/60 to-ink-900/40" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 text-center max-w-4xl pt-8 sm:pt-12">
        {/* Certification Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 text-xs sm:text-sm font-medium text-white mb-6 shadow-inner animate-pulseGlow">
          <ShieldCheck className="h-4 w-4 text-aqua-300" />
          <span>Servicio Profesional Certificado a Domicilio en Cajamarca</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
          Renovamos la vida de{" "}
          <span className="text-gradient-cyan block sm:inline">tus muebles</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-ink-200/90 max-w-2xl mx-auto mb-8 sm:mb-10 font-normal leading-relaxed">
          Eliminamos el 99.9% de ácaros, manchas difíciles y malos olores de colchones, alfombras, sillas y muebles. Tu hogar y oficina merecen sentirse como nuevos.
        </p>

        {/* Rating Trust Indicator */}
        <div className="flex items-center justify-center gap-2 mb-8 text-amber-300 text-xs sm:text-sm">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="font-bold text-white ml-1">4.9 / 5</span>
          <span className="text-ink-300">• Más de 450 clientes felices en Cajamarca</span>
        </div>

        {/* CTA Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href={getWhatsAppUrl("¡Hola Zanca Limpieza! 👋 Quisiera solicitar una cotización gratuita para la limpieza de mis muebles.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto gradient-primary text-white font-bold px-8 py-4 rounded-xl text-base sm:text-lg flex items-center justify-center gap-3 shadow-glow hover:scale-105 active:scale-95 transition-all group"
          >
            <span>Solicitar Cotización Gratis</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#cotizador"
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-4 rounded-xl text-base sm:text-lg flex items-center justify-center gap-2.5 backdrop-blur-md border border-white/20 transition-all hover:scale-105"
          >
            <Calculator className="h-5 w-5 text-aqua-300" />
            <span>Calcular Presupuesto</span>
          </a>
        </div>

        {/* 3 Original Trust Pills */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-4 border-t border-white/10 text-xs sm:text-sm text-ink-300">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-aqua-300" />
            <span>100% Garantizado</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-aqua-300" />
            <span>Secado Rápido (2 a 4 hrs)</span>
          </div>
          <div className="flex items-center gap-2">
            <Leaf className="h-4 w-4 text-aqua-300" />
            <span>Productos Ecológicos y Seguros</span>
          </div>
        </div>
      </div>
    </section>
  );
};

