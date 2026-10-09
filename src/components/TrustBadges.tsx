import React from 'react';
import { Sparkles, Smile, ShieldCheck, MapPin } from 'lucide-react';

export const TrustBadges: React.FC = () => {
  const stats = [
    {
      icon: Sparkles,
      value: "+1,850",
      title: "Muebles Renovados",
      desc: "Colchones, alfombras, sofás y sillas dejados como nuevos en Cajamarca."
    },
    {
      icon: Smile,
      value: "99.4%",
      title: "Clientes Satisfechos",
      desc: "Garantía total: si no quedas 100% conforme, repetimos el servicio."
    },
    {
      icon: ShieldCheck,
      value: "100% Seguro",
      title: "Bio & Hipoalergénico",
      desc: "Productos biodegradables no dañinos para niños ni mascotas."
    },
    {
      icon: MapPin,
      value: "A Domicilio",
      title: "Todo Cajamarca",
      desc: "Llevamos nuestros equipos industriales hasta la puerta de tu casa."
    }
  ];

  return (
    <section className="relative -mt-8 z-20 container mx-auto px-4">
      <div className="bg-card rounded-2xl shadow-floating border border-border/80 p-6 sm:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-border/60">
          {stats.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className={`flex flex-col items-center text-center ${
                  index > 0 ? "pt-6 sm:pt-0 sm:pl-6" : ""
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-3">
                  <IconComponent className="h-6 w-6" />
                </div>
                <span className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                  {item.value}
                </span>
                <h4 className="text-sm font-bold text-foreground mt-1 mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

