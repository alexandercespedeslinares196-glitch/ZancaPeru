import React from 'react';
import { MessageCircle, Sparkles, Leaf, MapPin, Calendar, Clock, FileText } from 'lucide-react';
import { getWhatsAppUrl } from '../data/config';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Dark Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero.jpg"
          alt="Lavado profesional de muebles y tapicería a domicilio en Cajamarca"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.38] contrast-[1.12]"
        />
        {/* Subtle cyan and navy ambient gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/70 to-ink-900/50" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 text-center max-w-4xl pt-8 sm:pt-12">
        {/* Experience Pill */}
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 text-xs sm:text-sm font-medium text-white mb-6 shadow-inner">
          <Clock className="h-4 w-4 text-aqua-300" />
          <span>Más de 10 años de experiencia cuidando tus muebles en Cajamarca</span>
        </div>

        {/* Main Heading (Exact text requested) */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
          Lavado profesional a domicilio en{" "}
          <span className="text-gradient-cyan block sm:inline">Cajamarca y Baños del Inca</span>
        </h1>

        {/* Description (Exact text requested) */}
        <p className="text-base sm:text-lg md:text-xl text-ink-200/90 max-w-3xl mx-auto mb-8 sm:mb-10 font-normal leading-relaxed">
          Más de 10 años de experiencia en el lavado y cuidado de tus muebles, llevando limpieza y frescura a tu hogar. Lavamos muebles de tela, colchones, sillas, alfombras y asientos de auto con limpieza profunda por extracción y productos ecológicos. Atendemos con cita previa.
        </p>

        {/* CTA Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
          <a
            href={getWhatsAppUrl("Hola, Zanca Limpieza. Quisiera una cotización para lavar...")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-8 py-4 rounded-xl text-base sm:text-lg flex items-center justify-center gap-3 shadow-lg hover:scale-105 active:scale-95 transition-all group"
          >
            <MessageCircle className="h-5 w-5 fill-white" />
            <span>Cotizar por WhatsApp</span>
          </a>

          <a
            href="#cotizador"
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-4 rounded-xl text-base sm:text-lg flex items-center justify-center gap-2.5 backdrop-blur-md border border-white/20 transition-all hover:scale-105"
          >
            <FileText className="h-5 w-5 text-aqua-300" />
            <span>Solicitud de Cotización</span>
          </a>
        </div>

        {/* Required text below main button */}
        <p className="text-xs sm:text-sm text-ink-300 mb-10 max-w-xl mx-auto leading-relaxed">
          Cotización gratis y sin compromiso. Envíanos una foto del artículo y cuéntanos en qué zona te encuentras.
        </p>

        {/* Features badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-4 border-t border-white/10 text-xs sm:text-sm text-ink-300">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-aqua-300" />
            <span>Limpieza profunda por extracción</span>
          </div>
          <div className="flex items-center gap-2">
            <Leaf className="h-4 w-4 text-aqua-300" />
            <span>Productos ecológicos</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-aqua-300" />
            <span>Servicio a domicilio en Cajamarca y Baños del Inca</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-aqua-300" />
            <span>Atención con cita previa</span>
          </div>
        </div>
      </div>
    </section>
  );
};
