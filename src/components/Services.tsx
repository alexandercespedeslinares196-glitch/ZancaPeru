import React from 'react';
import { Bed, Armchair, Layers, Utensils, Briefcase, Car, Check, ArrowRight } from 'lucide-react';
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
      case 'Briefcase':
        return <Briefcase className="h-6 w-6" />;
      case 'Car':
        return <Car className="h-6 w-6" />;
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
            Soluciones de Limpieza Especializada
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Utilizamos tecnología de inyección-succión alemana y fórmulas biodegradables que limpian a fondo sin dañar los tejidos ni decolorar tus muebles.
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
                  Más Solicitado
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
                href={getWhatsAppUrl(`¡Hola Zanca Limpieza! 👋 Me interesa cotizar el servicio para: ${service.title}. ¿Me podrían dar información de precios y disponibilidad?`)}
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

        {/* Banner Callout */}
        <div className="mt-14 bg-gradient-to-r from-ink-900 to-ink-800 rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold mb-1.5">
              ¿Tienes un requerimiento especial o empresa en Cajamarca?
            </h4>
            <p className="text-sm text-ink-300">
              Ofrecemos planes corporativos para oficinas, consultorios médicos, restaurantes y hoteles con factura y atención en horarios flexibles.
            </p>
          </div>
          <a
            href={getWhatsAppUrl("¡Hola Zanca Limpieza! 👋 Requiero una cotización corporativa para mi empresa/local comercial en Cajamarca.")}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap gradient-primary text-white font-bold px-6 py-3.5 rounded-xl text-sm shadow-md hover:scale-105 transition-all"
          >
            Cotización Corporativa
          </a>
        </div>
      </div>
    </section>
  );
};

