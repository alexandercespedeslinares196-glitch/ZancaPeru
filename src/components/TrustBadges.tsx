import React from 'react';
import { Sparkles, MapPin, Leaf, Clock } from 'lucide-react';

export const TrustBadges: React.FC = () => {
  const highlights = [
    {
      icon: Clock,
      value: "+10 Años",
      title: "Experiencia en Cajamarca",
      desc: "Más de una década brindando cuidado y limpieza especializada a tus muebles."
    },
    {
      icon: MapPin,
      value: "A Domicilio",
      title: "Cajamarca y Baños del Inca",
      desc: "Atención directa en tu hogar u oficina con cita previa coordinada."
    },
    {
      icon: Sparkles,
      value: "Extracción",
      title: "Limpieza Profunda",
      desc: "Lavado por inyección y succión de alta potencia para remover suciedad acumulada."
    },
    {
      icon: Leaf,
      value: "Ecológicos",
      title: "Productos Biodegradables",
      desc: "Insumos seleccionados para el cuidado de los textiles y el entorno familiar."
    }
  ];

  return (
    <section className="relative -mt-10 z-20 container mx-auto px-4">
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
          {highlights.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className={`flex flex-col items-center text-center ${
                  index > 0 ? "pt-6 sm:pt-0 sm:pl-6" : ""
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center mb-3 shadow-sm border border-cyan-100">
                  <IconComponent className="h-6 w-6" />
                </div>
                <span className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  {item.value}
                </span>
                <h4 className="text-sm font-bold text-slate-900 mt-1 mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
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
