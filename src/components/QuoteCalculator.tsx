import React, { useState, useMemo } from 'react';
import { Calculator, MessageCircle, Check, Plus, Minus, Sparkles, HelpCircle } from 'lucide-react';
import { CALCULATOR_CATEGORIES, CALCULATOR_EXTRAS } from '../data/content';
import { BUSINESS_CONFIG } from '../data/config';
import { formatPrice } from '../lib/utils';

export const QuoteCalculator: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("sofa");
  const [selectedItem, setSelectedItem] = useState<string>("sofa-3");
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [district, setDistrict] = useState<string>("Centro Histórico");

  // Get current category and its items
  const currentCategoryObj = useMemo(() => {
    return CALCULATOR_CATEGORIES.find(c => c.id === selectedCategory) || CALCULATOR_CATEGORIES[0];
  }, [selectedCategory]);

  // Current selected item data
  const currentItemObj = useMemo(() => {
    const found = currentCategoryObj.items.find(i => i.id === selectedItem);
    return found || currentCategoryObj.items[0];
  }, [currentCategoryObj, selectedItem]);

  // Toggle extra service
  const toggleExtra = (id: string) => {
    setSelectedExtras(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  // Price Calculation in Peruvian Soles (S/)
  const { baseTotal, extrasTotal, grandTotal } = useMemo(() => {
    const base = currentItemObj ? currentItemObj.basePrice * quantity : 0;
    const extras = selectedExtras.reduce((sum, extraId) => {
      const extra = CALCULATOR_EXTRAS.find(e => e.id === extraId);
      return sum + (extra ? extra.price * quantity : 0);
    }, 0);
    return {
      baseTotal: base,
      extrasTotal: extras,
      grandTotal: base + extras
    };
  }, [currentItemObj, quantity, selectedExtras]);

  // Generate WhatsApp Message with full quote details
  const handleWhatsAppQuote = () => {
    const extrasNames = selectedExtras
      .map(id => CALCULATOR_EXTRAS.find(e => e.id === id)?.name)
      .filter(Boolean)
      .join(", ");

    let msg = `¡Hola Zanca Limpieza! 👋 Calculé un presupuesto en su cotizador web:\n\n`;
    msg += `📋 *Servicio:* ${currentItemObj.name}\n`;
    msg += `🔢 *Cantidad:* ${quantity}\n`;
    if (extrasNames) {
      msg += `✨ *Extras:* ${extrasNames}\n`;
    }
    msg += `📍 *Ubicación en Cajamarca:* ${district}\n`;
    msg += `💰 *Total Estimado:* ${formatPrice(grandTotal)}\n\n`;
    msg += `¿Me confirman disponibilidad de fecha y hora para agendar mi servicio a domicilio? Muchas gracias.`;

    const url = `https://wa.me/${BUSINESS_CONFIG.phoneRaw}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="cotizador" className="py-24 bg-gradient-to-b from-muted/30 via-background to-muted/30 relative">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-primary uppercase tracking-widest bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20 mb-4">
            <Calculator className="h-4 w-4" />
            <span>Presupuesto Inmediato</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight mb-4">
            Cotizador Online en Tiempo Real
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Calcula el valor aproximado de tu servicio en segundos y resérvalo directamente por WhatsApp sin compromiso ni costos ocultos.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="max-w-4xl mx-auto bg-card rounded-3xl shadow-xl border border-border overflow-hidden">
          {/* Step 1: Category Selector */}
          <div className="bg-muted/40 p-4 sm:p-6 border-b border-border">
            <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
              1. Selecciona la categoría de mueble
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
              {CALCULATOR_CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setSelectedItem(cat.items[0].id);
                  }}
                  className={`p-3 rounded-xl text-xs sm:text-sm font-bold flex flex-col items-center justify-center gap-1.5 transition-all text-center ${
                    selectedCategory === cat.id
                      ? 'gradient-primary text-white shadow-md scale-105'
                      : 'bg-card text-foreground border border-border hover:border-primary/40'
                  }`}
                >
                  <span>{cat.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Options Column (Left) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Item selection */}
              <div>
                <label className="block text-sm font-bold text-foreground mb-2">
                  2. Tipo específico y tamaño:
                </label>
                <div className="space-y-2">
                  {currentCategoryObj.items.map(item => (
                    <div
                      key={item.id}
                      onClick={() => setSelectedItem(item.id)}
                      className={`p-3.5 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${
                        selectedItem === item.id
                          ? 'border-primary bg-primary/5 shadow-sm ring-1 ring-primary'
                          : 'border-border hover:border-muted-foreground/30 bg-background'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                          selectedItem === item.id
                            ? 'border-primary bg-primary text-white'
                            : 'border-muted-foreground/40'
                        }`}>
                          {selectedItem === item.id && <Check className="h-3 w-3 stroke-[3]" />}
                        </div>
                        <span className="text-sm font-semibold text-foreground">
                          {item.name}
                        </span>
                      </div>
                      <span className="text-sm font-bold text-primary">
                        {formatPrice(item.basePrice)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-muted/40 border border-border">
                <div>
                  <span className="text-sm font-bold text-foreground block">
                    Cantidad de piezas o muebles
                  </span>
                  <span className="text-xs text-muted-foreground">
                    ¿Cuántas unidades necesitas lavar?
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-9 h-9 rounded-lg bg-card border border-border flex items-center justify-center text-foreground hover:bg-muted font-bold transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-8 text-center font-extrabold text-base text-foreground">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-9 h-9 rounded-lg bg-card border border-border flex items-center justify-center text-foreground hover:bg-muted font-bold transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Extras */}
              <div>
                <label className="block text-sm font-bold text-foreground mb-2">
                  Tratamientos adicionales opcionales:
                </label>
                <div className="space-y-2">
                  {CALCULATOR_EXTRAS.map(extra => {
                    const isChecked = selectedExtras.includes(extra.id);
                    return (
                      <div
                        key={extra.id}
                        onClick={() => toggleExtra(extra.id)}
                        className={`p-3 rounded-xl border cursor-pointer flex items-center justify-between text-xs sm:text-sm transition-all ${
                          isChecked
                            ? 'border-accent bg-accent/5 ring-1 ring-accent'
                            : 'border-border bg-background hover:bg-muted/30'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <div className={`w-4 h-4 rounded border flex items-center justify-center ${
                            isChecked
                              ? 'border-accent bg-accent text-white'
                              : 'border-muted-foreground/40'
                          }`}>
                            {isChecked && <Check className="h-3 w-3 stroke-[3]" />}
                          </div>
                          <span className="font-medium text-foreground">{extra.name}</span>
                        </div>
                        <span className="font-bold text-accent shrink-0 ml-2">
                          +{formatPrice(extra.price)}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* District selection */}
              <div>
                <label className="block text-sm font-bold text-foreground mb-2">
                  Ubicación en Cajamarca (Movilidad incluida):
                </label>
                <select
                  value={district}
                  onChange={e => setDistrict(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm font-medium focus:ring-2 focus:ring-primary focus:outline-none"
                >
                  {BUSINESS_CONFIG.zones.map(z => (
                    <option key={z} value={z}>{z}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Summary Column (Right) */}
            <div className="lg:col-span-5 bg-gradient-to-b from-ink-900 to-ink-950 rounded-2xl p-6 text-white flex flex-col justify-between shadow-lg">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-aqua-400" />
                    <h3 className="font-bold text-base">Resumen Estimado</h3>
                  </div>
                  <span className="text-[11px] bg-brand-500/20 text-aqua-300 font-bold px-2.5 py-1 rounded-full border border-brand-500/30">
                    Cajamarca
                  </span>
                </div>

                <div className="space-y-3 text-sm text-ink-300 mb-6">
                  <div className="flex justify-between">
                    <span>{currentItemObj.name} (x{quantity}):</span>
                    <span className="font-semibold text-white">{formatPrice(baseTotal)}</span>
                  </div>

                  {selectedExtras.length > 0 && (
                    <div className="flex justify-between text-xs text-aqua-300">
                      <span>Tratamientos adicionales ({selectedExtras.length}):</span>
                      <span className="font-semibold">+{formatPrice(extrasTotal)}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-xs text-ink-400">
                    <span>Movilidad a {district}:</span>
                    <span className="text-aqua-400 font-bold uppercase">GRATIS</span>
                  </div>

                  <div className="flex justify-between text-xs text-ink-400">
                    <span>Garantía de satisfacción:</span>
                    <span className="text-aqua-400 font-bold">INCLUIDA</span>
                  </div>
                </div>

                {/* Grand Total */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-6 text-center">
                  <span className="text-xs text-ink-400 uppercase tracking-wider font-semibold block mb-1">
                    Costo Total Estimado
                  </span>
                  <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-aqua-300 to-brand-300">
                    {formatPrice(grandTotal)}
                  </div>
                  <span className="text-[11px] text-ink-400 block mt-1">
                    *Precio referencial sujeto a inspección textil previa.
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <div className="space-y-3">
                <button
                  onClick={handleWhatsAppQuote}
                  className="w-full gradient-primary hover:opacity-95 text-white font-extrabold py-4 px-4 rounded-xl text-base flex items-center justify-center gap-2.5 shadow-glow hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <MessageCircle className="h-5 w-5 fill-white" />
                  <span>Pedir este Presupuesto por WhatsApp</span>
                </button>

                <div className="flex items-center justify-center gap-1.5 text-ink-400 text-xs text-center">
                  <HelpCircle className="h-3.5 w-3.5" />
                  <span>Te responderemos en menos de 10 minutos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

