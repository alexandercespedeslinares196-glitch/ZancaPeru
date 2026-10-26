import React, { useState } from 'react';
import { CalendarCheck, Truck, Sparkles, Search, Wind, Activity, Sun, Info } from 'lucide-react';
import { METHOD_STEPS } from '../data/content';
import { getWhatsAppUrl } from '../data/config';

export const MethodProcess: React.FC = () => {
  const [viewTab, setViewTab] = useState<'booking' | 'technology'>('booking');

  const bookingSteps = [
    {
      step: "01",
      title: "Solicita tu cotización",
      description: "Contáctanos por WhatsApp o formulario web enviándonos fotos y detalles de tus muebles. Te confirmamos el presupuesto y coordinamos la fecha.",
      icon: CalendarCheck
    },
    {
      step: "02",
      title: "Atención a domicilio con cita previa",
      description: "Llegamos en la fecha y hora programada a tu domicilio en Cajamarca o Baños del Inca con los equipos de extracción y productos ecológicos.",
      icon: Truck
    },
    {
      step: "03",
      title: "Limpieza y cuidado especializado",
      description: "Lavado profundo por inyección y succión según el material. En colchones toma aprox. 1 a 2 horas de lavado; en alfombras 3 a 5 días hábiles con recojo y entrega.",
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
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-widest bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20">
            Proceso Transparente
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight">
            ¿Cómo Trabajamos en Zanca Limpieza?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Metodología profesional de inyección y extracción profunda para el cuidado responsable de tus tapicerías.
          </p>

          {/* Toggle Tab */}
          <div className="inline-flex p-1.5 rounded-2xl bg-muted mt-8 border border-border">
            <button
              type="button"
              onClick={() => setViewTab('booking')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                viewTab === 'booking'
                  ? 'gradient-primary text-white shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              3 Pasos para tu Servicio
            </button>
            <button
              type="button"
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

        {/* Results Disclaimer Banner */}
        <div className="max-w-4xl mx-auto mb-10 bg-muted/70 border border-border rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 text-foreground/90">
          <Info className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm leading-relaxed">
            <strong>Explicación de resultados:</strong> Realizamos una limpieza profunda según el material y el estado del artículo. Algunas manchas antiguas o tratadas previamente pueden no desaparecer por completo.
          </p>
        </div>

        {/* View 1: 3 Steps for Booking */}
        {viewTab === 'booking' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
          <div className="max-w-4xl mx-auto space-y-4">
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
              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a
            href={getWhatsAppUrl("Hola, Zanca Limpieza. Quisiera una cotización para lavar...")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 gradient-primary text-white font-bold px-8 py-3.5 rounded-xl shadow-card hover:scale-105 transition-transform"
          >
            <Sparkles className="h-5 w-5" />
            <span>Coordinar Cita a Domicilio por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
