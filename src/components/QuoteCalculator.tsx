import React, { useState, useMemo } from 'react';
import {
  FileText,
  MessageCircle,
  Check,
  Plus,
  Minus,
  Camera,
  Calendar,
  MapPin,
  Sparkles,
  Info,
  Shield,
  Armchair,
  Bed,
  Utensils,
  Layers,
  Car
} from 'lucide-react';
import { QUOTE_CATEGORIES, QuoteCategoryOption } from '../data/content';
import { BUSINESS_CONFIG } from '../data/config';

export const QuoteCalculator: React.FC = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("muebles-tela");
  const [selectedItemType, setSelectedItemType] = useState<string>("sofa-3");
  const [quantity, setQuantity] = useState<number>(1);
  const [specificAnswers, setSpecificAnswers] = useState<Record<string, string>>({});
  const [conditionDetails, setConditionDetails] = useState<string>("");
  const [zone, setZone] = useState<string>("Cajamarca (Centro Histórico)");
  const [preferredDate, setPreferredDate] = useState<string>("");
  const [includePerfuming, setIncludePerfuming] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Current category configuration
  const currentCategory: QuoteCategoryOption = useMemo(() => {
    return QUOTE_CATEGORIES.find(c => c.id === selectedCategoryId) || QUOTE_CATEGORIES[0];
  }, [selectedCategoryId]);

  // When switching category, reset item type and specific answers
  const handleCategoryChange = (catId: string) => {
    setSelectedCategoryId(catId);
    const cat = QUOTE_CATEGORIES.find(c => c.id === catId);
    if (cat && cat.itemTypes.length > 0) {
      setSelectedItemType(cat.itemTypes[0].id);
      const initialAnswers: Record<string, string> = {};
      cat.specificQuestions?.forEach(q => {
        initialAnswers[q.id] = q.options[0];
      });
      setSpecificAnswers(initialAnswers);
    }
  };

  const currentItemLabel = useMemo(() => {
    const found = currentCategory.itemTypes.find(i => i.id === selectedItemType);
    return found ? found.label : selectedItemType;
  }, [currentCategory, selectedItemType]);

  const handleSpecificAnswerChange = (questionId: string, answer: string) => {
    setSpecificAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  // Build WhatsApp text and open
  const handleSendQuoteRequest = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    let msg = `Hola, Zanca Limpieza. Quisiera una cotización para lavar:\n\n`;
    msg += `📋 *Servicio:* ${currentCategory.name}\n`;
    msg += `🛋️ *Detalle / Tipo:* ${currentItemLabel}\n`;
    msg += `🔢 *Cantidad:* ${quantity}\n`;

    // Add specific answers (material, plazas, tipo de pelo, etc.)
    if (currentCategory.specificQuestions) {
      currentCategory.specificQuestions.forEach(q => {
        const val = specificAnswers[q.id];
        if (val) {
          msg += `🔹 *${q.label.replace(':', '').replace(' (Opcional)', '')}:* ${val}\n`;
        }
      });
    }

    if (conditionDetails.trim()) {
      msg += `📝 *Estado / Manchas:* ${conditionDetails.trim()}\n`;
    }

    msg += `📍 *Zona:* ${zone}\n`;

    if (preferredDate) {
      msg += `📅 *Fecha de preferencia:* ${preferredDate} (a confirmar disponibilidad)\n`;
    }

    if (includePerfuming) {
      msg += `✨ *Extra opcional:* Deseo incluir perfumado\n`;
    }

    msg += `\n📸 *Adjunto fotos del artículo a continuación para la confirmación de la cotización.*`;

    const url = `https://wa.me/${BUSINESS_CONFIG.phoneRaw}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    setSubmitted(true);
  };

  const getCategoryIcon = (icon: string) => {
    switch (icon) {
      case 'Bed': return <Bed className="h-5 w-5" />;
      case 'Armchair': return <Armchair className="h-5 w-5" />;
      case 'Layers': return <Layers className="h-5 w-5" />;
      case 'Utensils': return <Utensils className="h-5 w-5" />;
      case 'Car': return <Car className="h-5 w-5" />;
      case 'Shield': return <Shield className="h-5 w-5" />;
      default: return <Armchair className="h-5 w-5" />;
    }
  };

  return (
    <section id="cotizador" className="py-24 bg-gradient-to-b from-muted/30 via-background to-muted/30 relative">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-primary uppercase tracking-widest bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20 mb-4">
            <FileText className="h-4 w-4" />
            <span>Cotización sin compromiso</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight mb-4">
            Solicitud de Cotización
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Completa los detalles de lo que necesitas lavar. Nuestro equipo revisará el artículo y te confirmará el precio y la disponibilidad por WhatsApp.
          </p>
        </div>

        {/* Main Form Container */}
        <div className="max-w-4xl mx-auto bg-card rounded-3xl shadow-xl border border-border overflow-hidden">
          {/* Step 1: Category Selector */}
          <div className="bg-muted/40 p-4 sm:p-6 border-b border-border">
            <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
              1. Selecciona qué necesitas lavar o tratar:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
              {QUOTE_CATEGORIES.map(cat => (
                <button
                  type="button"
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`p-3 rounded-xl text-xs font-bold flex flex-col items-center justify-center gap-2 transition-all text-center ${
                    selectedCategoryId === cat.id
                      ? 'gradient-primary text-white shadow-md scale-102 ring-2 ring-primary/40'
                      : 'bg-card text-foreground border border-border hover:border-primary/40'
                  }`}
                >
                  <div className={selectedCategoryId === cat.id ? 'text-white' : 'text-primary'}>
                    {getCategoryIcon(cat.icon)}
                  </div>
                  <span className="leading-tight">{cat.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Form Inputs (Left - 7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Service Disclaimer / Alert for Leather */}
              {selectedCategoryId === 'muebles-cuero' && (
                <div className="p-3.5 rounded-xl bg-primary/10 border border-primary/20 text-xs text-primary leading-relaxed flex items-start gap-2.5">
                  <Shield className="h-4 w-4 shrink-0 mt-0.5" />
                  <span>
                    <strong>Importante:</strong> Para muebles de cuero ofrecemos tratamiento de siliconado y acondicionamiento protector para nutrir el material. No ofrecemos servicio de lavado con agua de cuero.
                  </span>
                </div>
              )}

              {/* Dynamic Item Type */}
              <div>
                <label className="block text-sm font-bold text-foreground mb-2">
                  2. {currentCategory.questionLabel}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentCategory.itemTypes.map(item => (
                    <button
                      type="button"
                      key={item.id}
                      onClick={() => setSelectedItemType(item.id)}
                      className={`p-3 rounded-xl border text-left text-xs sm:text-sm font-medium flex items-center justify-between transition-all ${
                        selectedItemType === item.id
                          ? 'border-primary bg-primary/5 ring-1 ring-primary text-foreground font-semibold'
                          : 'border-border bg-background hover:bg-muted/40 text-foreground/80'
                      }`}
                    >
                      <span>{item.label}</span>
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ml-2 ${
                        selectedItemType === item.id
                          ? 'border-primary bg-primary text-white'
                          : 'border-muted-foreground/40'
                      }`}>
                        {selectedItemType === item.id && <Check className="h-3 w-3 stroke-[3]" />}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-muted/40 border border-border">
                <div>
                  <span className="text-sm font-bold text-foreground block">
                    {currentCategory.quantityLabel}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Indica el número de unidades o piezas
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-9 h-9 rounded-lg bg-card border border-border flex items-center justify-center text-foreground hover:bg-muted font-bold transition-colors"
                    aria-label="Disminuir cantidad"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-8 text-center font-extrabold text-base text-foreground">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-9 h-9 rounded-lg bg-card border border-border flex items-center justify-center text-foreground hover:bg-muted font-bold transition-colors"
                    aria-label="Aumentar cantidad"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Specific Questions based on Category (Material, Plazas, etc.) */}
              {currentCategory.specificQuestions?.map(q => (
                <div key={q.id}>
                  <label className="block text-sm font-bold text-foreground mb-1.5">
                    {q.label}
                  </label>
                  <select
                    value={specificAnswers[q.id] || q.options[0]}
                    onChange={e => handleSpecificAnswerChange(q.id, e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                  >
                    {q.options.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              ))}

              {/* Condition / Stains detail */}
              <div>
                <label className="block text-sm font-bold text-foreground mb-1.5">
                  Estado actual o tipo de manchas:
                </label>
                <textarea
                  rows={2}
                  value={conditionDetails}
                  onChange={e => setConditionDetails(e.target.value)}
                  placeholder="Ej: Manchas de sudor, café, polvo acumulado, manchas tratadas anteriormente, etc."
                  className="w-full px-4 py-2.5 rounded-xl border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-primary focus:outline-none resize-none"
                />
              </div>

              {/* Zone and Preferred Date (in 2 columns) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5 flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-primary" />
                    <span>Zona en Cajamarca / Baños del Inca:</span>
                  </label>
                  <select
                    value={zone}
                    onChange={e => setZone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                  >
                    {BUSINESS_CONFIG.zones.map(z => (
                      <option key={z} value={z}>{z}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5 flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-primary" />
                    <span>Fecha de preferencia:</span>
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={e => setPreferredDate(e.target.value)}
                    className="w-full px-4 py-2 rounded-xl border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                  <span className="text-[11px] text-muted-foreground block mt-1">
                    *Preferencia del cliente. Confirmaremos disponibilidad de día y hora.
                  </span>
                </div>
              </div>

              {/* Extra Optional: Perfuming */}
              <div
                onClick={() => setIncludePerfuming(!includePerfuming)}
                className={`p-3.5 rounded-xl border cursor-pointer flex items-center justify-between text-xs sm:text-sm transition-all ${
                  includePerfuming
                    ? 'border-primary bg-primary/5 ring-1 ring-primary'
                    : 'border-border bg-background hover:bg-muted/30'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                    includePerfuming ? 'border-primary bg-primary text-white' : 'border-muted-foreground/40'
                  }`}>
                    {includePerfuming && <Check className="h-3 w-3 stroke-[3]" />}
                  </div>
                  <div>
                    <span className="font-semibold text-foreground block">
                      Incluir perfumado opcional
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Aroma y frescura agradable para después de la limpieza.
                    </span>
                  </div>
                </div>
                <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-md shrink-0">
                  Opcional
                </span>
              </div>
            </div>

            {/* Summary & Next Steps (Right - 5 cols) */}
            <div className="lg:col-span-5 bg-gradient-to-b from-ink-900 to-ink-950 rounded-2xl p-6 text-white flex flex-col justify-between shadow-lg">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-aqua-400" />
                    <h3 className="font-bold text-base">Resumen de tu Solicitud</h3>
                  </div>
                  <span className="text-[11px] bg-white/10 text-aqua-300 font-bold px-2.5 py-1 rounded-full border border-white/10">
                    A Domicilio
                  </span>
                </div>

                <div className="space-y-3.5 text-xs sm:text-sm text-ink-300 mb-6">
                  <div>
                    <span className="text-ink-400 block text-[11px] uppercase tracking-wider">Servicio:</span>
                    <span className="font-semibold text-white">{currentCategory.name}</span>
                  </div>

                  <div>
                    <span className="text-ink-400 block text-[11px] uppercase tracking-wider">Detalle:</span>
                    <span className="font-semibold text-white">{currentItemLabel} (x{quantity})</span>
                  </div>

                  <div>
                    <span className="text-ink-400 block text-[11px] uppercase tracking-wider">Zona de atención:</span>
                    <span className="font-medium text-white">{zone}</span>
                  </div>

                  {preferredDate && (
                    <div>
                      <span className="text-ink-400 block text-[11px] uppercase tracking-wider">Fecha preferida:</span>
                      <span className="font-medium text-aqua-300">{preferredDate} (sujeta a confirmación)</span>
                    </div>
                  )}

                  {includePerfuming && (
                    <div className="text-xs text-aqua-300 bg-aqua-400/10 p-2 rounded-lg border border-aqua-400/20">
                      ✨ Con perfumado opcional solicitado
                    </div>
                  )}
                </div>

                {/* Important Notice regarding pricing and photos */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-6 space-y-2">
                  <div className="flex items-center gap-2 text-aqua-300 font-bold text-xs uppercase tracking-wider">
                    <Camera className="h-4 w-4" />
                    <span>Envío de fotos requerido</span>
                  </div>
                  <p className="text-xs text-ink-300 leading-relaxed">
                    El equipo de Zanca Limpieza confirma el precio exacto tras revisar el artículo y sus fotos por WhatsApp.
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="space-y-3 pt-2">
                <button
                  type="button"
                  onClick={handleSendQuoteRequest}
                  className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold py-4 px-4 rounded-xl text-base flex items-center justify-center gap-2.5 shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <MessageCircle className="h-5 w-5 fill-white" />
                  <span>Solicitar mi cotización</span>
                </button>

                <p className="text-[11px] text-ink-400 text-center flex items-center justify-center gap-1">
                  <Info className="h-3 w-3 text-aqua-400 shrink-0" />
                  <span>Atención con cita previa. Cotización gratis y sin compromiso.</span>
                </p>

                {submitted && (
                  <div className="p-3 bg-brand-500/20 border border-brand-500/40 rounded-xl text-center text-xs text-white">
                    ✅ ¡WhatsApp abierto! Recuerda adjuntar una foto del artículo para recibir tu presupuesto.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
