import React from 'react';
import { Quote, CheckCircle, Info } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

export const Testimonials: React.FC = () => {
  return (
    <section id="opiniones" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-widest bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20">
            Opiniones de Clientes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight">
            Experiencias de Nuestro Servicio
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            La satisfacción y el cuidado de los hogares en Cajamarca y Baños del Inca respaldan nuestro trabajo diario.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((review, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-7 shadow-card border border-border flex flex-col justify-between hover:shadow-card-hover transition-all duration-300 relative group"
            >
              <Quote className="h-8 w-8 text-primary/15 absolute top-5 right-5 pointer-events-none group-hover:text-primary/30 transition-colors" />

              <div>
                {/* Review text */}
                <p className="text-sm text-foreground/90 italic leading-relaxed mb-6">
                  "{review.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-border/60">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-bold text-sm text-foreground">
                    {review.name}
                  </h4>
                  <div className="flex items-center gap-1 text-[11px] text-brand-700 font-semibold bg-brand-50 px-2 py-0.5 rounded-md">
                    <CheckCircle className="h-3 w-3" />
                    <span>Cliente real</span>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground">
                  {review.location}
                </p>

                {review.service && (
                  <span className="inline-block mt-2 text-[11px] font-medium text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                    {review.service}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Results Disclaimer Callout Box (Replacing repeating wash for free) */}
        <div className="mt-14 max-w-3xl mx-auto bg-muted/60 rounded-2xl p-6 border border-border text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 shadow-sm">
            <Info className="h-6 w-6" />
          </div>
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-bold text-foreground">
              Compromiso de Honestidad y Calidad
            </h4>
            <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
              Realizamos una limpieza profunda según el material y el estado del artículo. Algunas manchas antiguas o tratadas previamente pueden no desaparecer por completo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
