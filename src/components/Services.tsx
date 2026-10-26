import React from 'react';
import { Bed, Armchair, Layers, Utensils, Car, Shield, Check, ArrowRight, Sparkles, Info } from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/content';
import { getWhatsAppUrl } from '../data/config';

export const Services: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bed':
        return <Bed className="h-6 w-6" />;
      case 'Armchair':
        return <Armchair className="h-6 w-6" />;
      case 'Layers':
        return <Layers className="h-6 w-6" />;
      case 'Utensils':
        return <Utensils className="h-6 w-6" />;
      case 'Car':
        return <Car className="h-6 w-6" />;
      case 'Shield':
        return <Shield className="h-6 w-6" />;
      default:
        return <Armchair className="h-6 w-6" />;
    }
  };

  return (
    <section id="servicios" className="py-24 bg-muted/40 relative">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-widest bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight">
            Lavado y Cuidado Profesional
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Limpieza profunda por inyección y extracción con productos ecológicos formulados para renovar la frescura de tus espacios con cita previa a domicilio.
          </p>
        </div>

        {/* Results Disclaimer Banner (Mandatory Notice) */}
        <div className="max-w-4xl mx-auto mb-12 bg-amber-500/10 border border-amber-500/20 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 text-amber-900 dark:text-amber-200">
          <Info className="h-5 w-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm leading-relaxed">
            <strong>Transparencia en los resultados:</strong> Realizamos una limpieza profunda según el material y el estado del artículo. Algunas manchas antiguas o tratadas previamente pueden no desaparecer por completo.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service: ServiceItem) => (
            <div
              key={service.id}
              className={`bg-card rounded-2xl p-7 border transition-all duration-300 flex flex-col justify-between hover:shadow-card-hover group ${
                service.popular
                  ? 'border-primary/50 shadow-card relative ring-1 ring-primary/20'
                  : 'border-border/70 shadow-sm'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 right-6 bg-gradient-to-r from-primary to-accent text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  Muy Solicitado
                </div>
              )}

              <div>
                {/* Header card */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {getIcon(service.icon)}
                  </div>
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-lg">
                    {service.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2.5">
                  {service.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features list */}
                <div className="space-y-2.5 mb-8 pt-4 border-t border-border/50">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/80">
                      <div className="w-4 h-4 rounded-full bg-brand-500/15 text-brand-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="h-3 w-3 stroke-[3]" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <a
                href={getWhatsAppUrl(`Hola, Zanca Limpieza. Quisiera una cotización para lavar: ${service.title}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 border border-primary/30 text-primary bg-primary/5 hover:bg-primary hover:text-white transition-all duration-200"
              >
                <span>Cotizar {service.title}</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Perfumado opcional & Atención Callout */}
        <div className="mt-14 max-w-4xl mx-auto bg-card rounded-2xl p-6 sm:p-8 border border-border flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-aqua-400/10 text-aqua-600 flex items-center justify-center shrink-0 mt-1">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-foreground mb-1">
                Extra opcional: Perfumado de muebles y tapicerías
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Si lo deseas, puedes solicitar el perfumado como un servicio extra opcional para añadir un toque agradable de frescura tras la limpieza profunda. Consulta disponibilidad al solicitar tu cotización.
              </p>
            </div>
          </div>
          <a
            href="#cotizador"
            className="whitespace-nowrap gradient-primary text-white font-bold px-6 py-3 rounded-xl text-sm shadow-md hover:scale-105 transition-all shrink-0"
          >
            Solicitar Cotización
          </a>
        </div>
      </div>
    </section>
  );
};
