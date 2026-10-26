import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, MoveHorizontal, CheckCircle2, Info } from 'lucide-react';

interface ComparisonItem {
  id: string;
  name: string;
  image: string;
  beforeFilter?: string;
  details: string;
  highlight: string;
}

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("sofa");
  const containerRef = useRef<HTMLDivElement>(null);

  const comparisons: ComparisonItem[] = [
    {
      id: "sofa",
      name: "Muebles de Tela",
      image: "/before-after.jpg",
      beforeFilter: "sepia(0.35) saturate(0.55) brightness(0.65) contrast(1.2)",
      details: "Remoción profunda de acumulación de suciedad y polvo en tapicería de sala.",
      highlight: "Limpieza profunda de fibras"
    },
    {
      id: "colchon",
      name: "Colchón",
      image: "/hero.jpg",
      beforeFilter: "sepia(0.45) saturate(0.5) brightness(0.6) contrast(1.25)",
      details: "Extracción profunda de suciedad y neutralización de olores en colchón.",
      highlight: "Cuidado higiénico del descanso"
    },
    {
      id: "silla",
      name: "Sillas de Comedor",
      image: "/before-after.jpg",
      beforeFilter: "sepia(0.5) saturate(0.6) brightness(0.6) contrast(1.3)",
      details: "Limpieza focalizada de derrames y suciedad de uso diario sin dañar el tejido.",
      highlight: "Tapizado fresco y limpio"
    }
  ];

  const currentComparison = comparisons.find(c => c.id === activeTab) || comparisons[0];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 5) percentage = 5;
    if (percentage > 95) percentage = 95;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging && e.buttons !== 1) return;
    handleMove(e.clientX);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <section id="resultados" className="py-24 bg-card relative select-none">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-primary uppercase tracking-widest bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20 mb-4">
            <Sparkles className="h-4 w-4" />
            <span>Resultados Visibles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight mb-4">
            Antes y Después del Lavado
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Desliza la barra para observar el cambio tras la limpieza profunda por extracción.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {comparisons.map((item) => (
              <button
                type="button"
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setSliderPosition(50);
                }}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  activeTab === item.id
                    ? 'gradient-primary text-white shadow-md scale-105'
                    : 'bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Comparison Container */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-ink-900 aspect-[16/10] sm:aspect-[16/9] cursor-ew-resize group touch-none"
            onMouseMove={handleMouseMove}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onTouchMove={handleTouchMove}
            onClick={(e) => handleMove(e.clientX)}
          >
            {/* AFTER Image (Clean / Full Background) */}
            <img
              src={currentComparison.image}
              alt="Resultado después de la limpieza profesional"
              className="w-full h-full object-cover object-center pointer-events-none"
              loading="lazy"
            />

            {/* AFTER Badge */}
            <div className="absolute top-5 right-5 bg-brand-600/90 text-white text-xs sm:text-sm font-black tracking-wider px-3.5 py-1.5 rounded-full shadow-lg backdrop-blur-sm z-10 flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4" />
              <span>DESPUÉS</span>
            </div>

            {/* BEFORE Image (Overlay with clipping width) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={currentComparison.image}
                alt="Estado del mueble antes de la limpieza"
                className="w-full h-full object-cover object-center pointer-events-none"
                style={{
                  filter: currentComparison.beforeFilter || "sepia(0.4) saturate(0.5) brightness(0.65) contrast(1.2)",
                  width: `${(100 / sliderPosition) * 100}%`,
                  maxWidth: 'none'
                }}
                loading="lazy"
              />

              {/* BEFORE Badge */}
              <div className="absolute top-5 left-5 bg-ink-950/85 text-white text-xs sm:text-sm font-black tracking-wider px-3.5 py-1.5 rounded-full shadow-lg backdrop-blur-sm z-10">
                ANTES
              </div>
            </div>

            {/* Slider Divider Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl pointer-events-none transition-transform"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Draggable Circle Handle */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-primary flex items-center justify-center slider-handle shadow-2xl group-hover:scale-110 transition-transform">
                <MoveHorizontal className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
            </div>

            {/* Subtle bottom helper caption */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-ink-950/70 text-white/90 text-xs px-4 py-1.5 rounded-full backdrop-blur-md pointer-events-none hidden sm:flex items-center gap-2">
              <MoveHorizontal className="h-3.5 w-3.5 text-aqua-400" />
              <span>Desliza para comparar el antes y después</span>
            </div>
          </div>

          {/* Details below image */}
          <div className="mt-6 bg-muted/50 rounded-2xl p-5 border border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <span className="text-xs font-bold text-primary uppercase tracking-wide">
                Detalle del trabajo: {currentComparison.name}
              </span>
              <p className="text-sm text-foreground font-medium mt-0.5">
                {currentComparison.details}
              </p>
            </div>
            <div className="bg-brand-500/10 text-brand-700 px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap border border-brand-500/20">
              ✓ {currentComparison.highlight}
            </div>
          </div>

          {/* Disclaimer under slider */}
          <div className="mt-3 text-center sm:text-left text-xs text-muted-foreground flex items-center gap-2 px-1">
            <Info className="h-3.5 w-3.5 text-primary shrink-0" />
            <span>Realizamos una limpieza profunda según el material y el estado del artículo. Algunas manchas antiguas o tratadas previamente pueden no desaparecer por completo.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
