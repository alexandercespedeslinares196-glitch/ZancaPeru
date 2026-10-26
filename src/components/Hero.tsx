import React from 'react';
import { MessageCircle, Sparkles, Leaf, MapPin, Calendar, Clock, FileText } from 'lucide-react';
import { getWhatsAppUrl } from '../data/config';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-slate-950">
      {/* Background Image with Deep Contrast Scrim Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero.jpg"
          alt="Lavado profesional de muebles y tapicería a domicilio en Cajamarca"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.2] contrast-[1.2]"
        />
        {/* Full-coverage dark vignette and deep oceanic overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/75 to-slate-950/95" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-slate-950/60 to-slate-950/90 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 text-center max-w-4xl pt-4 sm:pt-8">
        {/* Experience Pill */}
        <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/90 backdrop-blur-md border border-cyan-400/40 px-4 py-2 text-xs sm:text-sm font-semibold text-white mb-6 shadow-xl">
          <Clock className="h-4 w-4 text-cyan-400" />
          <span>Más de 10 años de experiencia cuidando tus muebles en Cajamarca</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.15] mb-6 drop-shadow-xl">
          Lavado profesional a domicilio en{" "}
          <span className="text-cyan-400 block sm:inline drop-shadow-md">
            Cajamarca y Baños del Inca
          </span>
        </h1>

        {/* Description wrapped in dark glass card for 100% guaranteed legibility */}
        <div className="max-w-3xl mx-auto mb-8 sm:mb-10 bg-slate-950/70 p-5 sm:p-6 rounded-2xl border border-white/15 backdrop-blur-md shadow-2xl">
          <p className="text-base sm:text-lg md:text-xl text-white font-normal leading-relaxed">
            Más de 10 años de experiencia en el lavado y cuidado de tus muebles, llevando limpieza y frescura a tu hogar. Lavamos muebles de tela, colchones, sillas, alfombras y asientos de auto con limpieza profunda por extracción y productos ecológicos. Atendemos con cita previa.
          </p>
        </div>

        {/* CTA Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-5">
          <a
            href={getWhatsAppUrl("Hola, Zanca Limpieza. Quisiera una cotización para lavar...")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold px-8 py-4 rounded-xl text-base sm:text-lg flex items-center justify-center gap-3 shadow-xl hover:scale-105 active:scale-95 transition-all group"
          >
            <MessageCircle className="h-5 w-5 fill-white" />
            <span>Cotizar por WhatsApp</span>
          </a>

          <a
            href="#cotizador"
            className="w-full sm:w-auto bg-slate-900/80 hover:bg-slate-800 text-white font-bold px-7 py-4 rounded-xl text-base sm:text-lg flex items-center justify-center gap-2.5 backdrop-blur-md border border-white/25 transition-all hover:scale-105 shadow-xl"
          >
            <FileText className="h-5 w-5 text-cyan-400" />
            <span>Solicitud de Cotización</span>
          </a>
        </div>

        {/* Required text below main button in a high-contrast badge */}
        <div className="mb-10 inline-block bg-slate-950/80 px-4 py-2 rounded-xl border border-white/10 backdrop-blur-sm shadow-md">
          <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
            Cotización gratis y sin compromiso. Envíanos una foto del artículo y cuéntanos en qué zona te encuentras.
          </p>
        </div>

        {/* Features badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-6 border-t border-white/10 text-xs sm:text-sm text-white">
          <div className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-md border border-slate-700/80 px-3.5 py-2 rounded-xl shadow-md">
            <Sparkles className="h-4 w-4 text-cyan-400 shrink-0" />
            <span className="font-medium">Limpieza profunda por extracción</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-md border border-slate-700/80 px-3.5 py-2 rounded-xl shadow-md">
            <Leaf className="h-4 w-4 text-cyan-400 shrink-0" />
            <span className="font-medium">Productos ecológicos</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-md border border-slate-700/80 px-3.5 py-2 rounded-xl shadow-md">
            <MapPin className="h-4 w-4 text-cyan-400 shrink-0" />
            <span className="font-medium">Servicio a domicilio en Cajamarca y Baños del Inca</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-md border border-slate-700/80 px-3.5 py-2 rounded-xl shadow-md">
            <Calendar className="h-4 w-4 text-cyan-400 shrink-0" />
            <span className="font-medium">Atención con cita previa</span>
          </div>
        </div>
      </div>
    </section>
  );
};
