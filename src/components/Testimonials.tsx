import React from 'react';
import { Star, Quote, CheckCircle, ThumbsUp } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

export const Testimonials: React.FC = () => {
  return (
    <section id="opiniones" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-widest bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20">
            Testimonios Verificados
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight">
            Lo que Dicen Nuestros Clientes
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            La confianza de los hogares y empresas en Cajamarca es nuestra mejor carta de presentación.
          </p>

          {/* Google Reviews Badge */}
          <div className="inline-flex items-center gap-3 bg-muted/60 px-4 py-2 rounded-full border border-border mt-6">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400" />
              ))}
            </div>
            <span className="text-xs font-bold text-foreground">
              Calificación 4.9/5 basada en clientes reales
            </span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((review, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-7 shadow-card border border-border flex flex-col justify-between hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 relative group"
            >
              <Quote className="h-8 w-8 text-primary/20 absolute top-5 right-5 pointer-events-none group-hover:text-primary/40 transition-colors" />

              <div>
                {/* Rating stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.stars)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

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
                    <span>Verificado</span>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground">
                  {review.role}
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

        {/* Satisfaction Guarantee Callout */}
        <div className="mt-14 max-w-3xl mx-auto bg-primary/5 rounded-2xl p-6 border border-primary/20 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center shrink-0 shadow-md">
            <ThumbsUp className="h-6 w-6" />
          </div>
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-bold text-foreground">
              Nuestra Garantía de Calidad Zanca Limpieza
            </h4>
            <p className="text-xs text-muted-foreground mt-0.5">
              Si al secar el mueble no estás 100% satisfecho con el resultado, repetimos el lavado sin costo adicional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

