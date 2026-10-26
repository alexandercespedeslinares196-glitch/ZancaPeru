import React from 'react';
import { MapPin, CheckCircle, Navigation, Calendar, Shield } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppUrl } from '../data/config';

export const CoverageCajamarca: React.FC = () => {
  return (
    <section id="cobertura" className="py-24 bg-muted/40 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto bg-card rounded-3xl p-8 sm:p-12 border border-border shadow-card relative overflow-hidden">
          {/* Subtle decorative background blur */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -top-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left info */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-primary uppercase tracking-widest bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20">
                <MapPin className="h-4 w-4" />
                <span>Cobertura Local</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Servicio a Domicilio en <span className="text-gradient">Cajamarca y Baños del Inca</span>
              </h2>

              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Llevamos nuestros equipos de inyección y extracción directamente hasta tu hogar, departamento u oficina previa cita agendada. No necesitas preocuparte por trasladar tus muebles.
              </p>

              {/* Badges of service */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-foreground bg-muted/60 p-3 rounded-xl">
                  <CheckCircle className="h-4 w-4 text-brand-600 shrink-0" />
                  <span>Servicio directo en tu domicilio</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-foreground bg-muted/60 p-3 rounded-xl">
                  <Calendar className="h-4 w-4 text-brand-600 shrink-0" />
                  <span>Atención con cita previa</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-foreground bg-muted/60 p-3 rounded-xl">
                  <Shield className="h-4 w-4 text-brand-600 shrink-0" />
                  <span>Cuidado cuidadoso de tus espacios</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-foreground bg-muted/60 p-3 rounded-xl">
                  <Navigation className="h-4 w-4 text-brand-600 shrink-0" />
                  <span>Atención en casas, departamentos y locales</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={getWhatsAppUrl("Hola, Zanca Limpieza. Quisiera consultar sobre la atención a domicilio en mi zona.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-hover hover:underline transition-all"
                >
                  <span>¿Tienes dudas sobre tu zona? Consúltanos por WhatsApp</span>
                  <Navigation className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Right: Zones chips */}
            <div className="lg:col-span-5 bg-muted/60 rounded-2xl p-6 border border-border">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Zonas de Atención en Cajamarca:</span>
              </h3>

              <div className="flex flex-wrap gap-2">
                {BUSINESS_CONFIG.zones.map((zone) => (
                  <span
                    key={zone}
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-card text-foreground border border-border/80 shadow-xs flex items-center gap-1.5 hover:border-primary/50 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {zone}
                  </span>
                ))}
              </div>

              <div className="mt-6 p-3.5 rounded-xl bg-primary/10 border border-primary/20 text-xs text-primary font-medium text-center">
                🏠 Servicio a domicilio en Cajamarca y Baños del Inca. Atención con cita previa.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
