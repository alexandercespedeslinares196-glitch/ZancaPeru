import React, { useState } from 'react';
import { CalendarCheck, Truck, Sparkles, Search, Wind, Activity, Sun, ShieldCheck } from 'lucide-react';
import { METHOD_STEPS } from '../data/content';
import { getWhatsAppUrl } from '../data/config';

export const MethodProcess: React.FC = () => {
  const [viewTab, setViewTab] = useState<'booking' | 'technology'>('booking');

  const bookingSteps = [
    {
      step: "01",
      title: "Agenda tu cita",
      description: "Contáctanos por WhatsApp o mediante nuestro formulario web. Te respondemos en minutos para coordinar el horario más cómodo para ti.",
      icon: CalendarCheck
    },
    {
      step: "02",
      title: "Limpieza a domicilio",
      description: "Nuestro equipo certificado llega puntualmente a tu hogar u oficina en Cajamarca con todo el equipo profesional e insumos necesarios.",
      icon: Truck
    },
    {
      step: "03",
      title: "Disfruta un ambiente sano",
      description: "Tus muebles quedan renovados, libres del 99.9% de ácaros, bacterias y malos olores. ¡Listos para usar en solo un par de horas con garantía total!",
      icon: Sparkles
    }
  ];

  const getTechIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search': return <Search className="h-5 w-5" />;
      case 'Wind': return <Wind className="h-5 w-5" />;
      case 'Sparkles': return <Sparkles className="h-5 w-5" />;
      case 'Activity': return <Activity className="h-5 w-5" />;
      case 'Sun': return <Sun className="h-5 w-5" />;
      default: return <Sparkles className="h-5 w-5" />;
    }
  };

  return (
    <section id="metodo" className="py-24 bg-card relative">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-widest bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20">
            Proceso Transparente
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight">
            ¿Cómo Trabajamos en Zanca Limpieza?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Un servicio ágil, confiable y con la máxima tecnología de inyección-extracción profunda para cuidar la salud de tu familia.
          </p>

          {/* Toggle Tab */}
          <div className="inline-flex p-1.5 rounded-2xl bg-muted mt-8 border border-border">
            <button
              onClick={() => setViewTab('booking')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                viewTab === 'booking'
                  ? 'gradient-primary text-white shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              3 Simples Pasos para Agendar
            </button>
            <button
              onClick={() => setViewTab('technology')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                viewTab === 'technology'
                  ? 'gradient-primary text-white shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Tecnología de Lavado (5 Etapas)
            </button>
          </div>
        </div>

        {/* View 1: 3 Steps for Booking (Exact replica of original #proceso) */}
        {viewTab === 'booking' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-8">
            {bookingSteps.map((item, index) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.step}
                  className="relative bg-muted/40 rounded-2xl p-8 border border-border/80 flex flex-col items-center text-center group hover:shadow-card hover:border-primary/40 transition-all duration-300"
                >
                  <div className="absolute -top-4 bg-primary text-white text-xs font-black px-3 py-1 rounded-full shadow-md">
                    PASO {item.step}
                  </div>

                  <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 mt-2 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <IconComp className="h-8 w-8" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>

                  {index < bookingSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30 z-10" />
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* View 2: 5 Steps of deep technological cleaning */}
        {viewTab === 'technology' && (
          <div className="max-w-4xl mx-auto mt-8 space-y-4">
            {METHOD_STEPS.map((step) => (
              <div
                key={step.step}
                className="bg-muted/40 hover:bg-muted/70 p-5 sm:p-6 rounded-2xl border border-border flex flex-col sm:flex-row sm:items-center gap-5 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center font-black text-lg shrink-0 shadow-md">
                  {step.step}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="text-primary">{getTechIcon(step.icon)}</div>
                    <h4 className="font-bold text-base sm:text-lg text-foreground">
                      {step.title}
                    </h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="shrink-0 hidden sm:block">
                  <ShieldCheck className="h-6 w-6 text-brand-500/50" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a
            href={getWhatsAppUrl("¡Hola Zanca Limpieza! 👋 Quiero agendar mi servicio de limpieza a domicilio.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 gradient-primary text-white font-bold px-8 py-3.5 rounded-xl shadow-card hover:scale-105 transition-transform"
          >
            <Sparkles className="h-5 w-5" />
            <span>Agendar Cita en Cajamarca Ahora</span>
          </a>
        </div>
      </div>
    </section>
  );
};

