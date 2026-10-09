import React, { useState } from 'react';
import { Send, Phone, Clock, MapPin, CheckCircle, MessageCircle, AlertCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/config';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    mueble: '',
    telefono: '',
    zona: 'Centro Histórico',
    mensaje: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let text = `¡Hola Zanca Limpieza! 👋 Deseo solicitar una cotización con los siguientes datos:\n\n`;
    text += `👤 *Nombre:* ${formData.nombre}\n`;
    text += `🛋️ *Mueble a limpiar:* ${formData.mueble}\n`;
    text += `📱 *Teléfono de contacto:* ${formData.telefono}\n`;
    text += `📍 *Ubicación en Cajamarca:* ${formData.zona}\n`;
    if (formData.mensaje) {
      text += `💬 *Detalles adicionales:* ${formData.mensaje}\n`;
    }
    text += `\n¿Me podrían brindar información de disponibilidad y cotización exacta?`;

    // Open WhatsApp
    const url = `https://wa.me/${BUSINESS_CONFIG.phoneRaw}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        nombre: '',
        mueble: '',
        telefono: '',
        zona: 'Centro Histórico',
        mensaje: ''
      });
    }, 6000);
  };

  return (
    <section id="contacto" className="py-24 bg-muted/50 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
          {/* Left Info Column */}
          <div>
            <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-widest bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20">
              Contacto Directo
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-6 tracking-tight">
              Pide tu Presupuesto Gratis
            </h2>
            <p className="text-base text-muted-foreground mb-8 leading-relaxed">
              Cuéntanos qué necesitas limpiar y te enviaremos una cotización personalizada sin compromiso. Llevamos equipos de última generación hasta la comodidad de tu hogar.
            </p>

            {/* Direct Contact Points */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-sm text-foreground bg-card p-4 rounded-xl border border-border shadow-xs">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="font-bold block text-foreground">Servicio a Domicilio</span>
                  <span className="text-xs text-muted-foreground">{BUSINESS_CONFIG.address}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-foreground bg-card p-4 rounded-xl border border-border shadow-xs">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <span className="font-bold block text-foreground">Teléfono & WhatsApp</span>
                  <a
                    href={`https://wa.me/${BUSINESS_CONFIG.phoneRaw}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-primary font-bold hover:underline"
                  >
                    {BUSINESS_CONFIG.phone} (Respuesta en minutos)
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-foreground bg-card p-4 rounded-xl border border-border shadow-xs">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <span className="font-bold block text-foreground">Horario de Atención</span>
                  <span className="text-xs text-muted-foreground">{BUSINESS_CONFIG.schedule}</span>
                </div>
              </div>
            </div>

            {/* Fast WhatsApp Direct Link */}
            <div className="mt-8">
              <a
                href={`https://wa.me/${BUSINESS_CONFIG.phoneRaw}?text=${encodeURIComponent("¡Hola Zanca Limpieza! 👋 Deseo información para limpiar mis muebles.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-brand-700 bg-brand-50 hover:bg-brand-100 border border-brand-200 px-4 py-2.5 rounded-xl transition-colors"
              >
                <MessageCircle className="h-4 w-4 fill-brand-700" />
                <span>¿Prefieres chatear directo? Haz clic aquí para WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="bg-card rounded-3xl p-7 sm:p-9 shadow-card border border-border/80 relative">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center mx-auto">
                  <CheckCircle className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  ¡Solicitud enviada con éxito!
                </h3>
                <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                  Se ha generado tu mensaje a WhatsApp. Te responderemos inmediatamente con tu presupuesto personalizado.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Envíanos tus datos para cotizar
                </h3>

                {/* Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                    Tu Nombre Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={e => setFormData({ ...formData, nombre: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary transition"
                    placeholder="Ej. Juan Pérez"
                  />
                </div>

                {/* Item type */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                    ¿Qué necesitas limpiar? *
                  </label>
                  <select
                    required
                    value={formData.mueble}
                    onChange={e => setFormData({ ...formData, mueble: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary transition"
                  >
                    <option value="">Selecciona un tipo de mueble</option>
                    <option value="Colchón">Colchón (1, 1.5, 2 plazas o King)</option>
                    <option value="Sofá de Sala">Sofá de Sala / Mueble seccional</option>
                    <option value="Alfombra">Alfombra / Tapete</option>
                    <option value="Sillas de Comedor">Juego de Sillas de Comedor</option>
                    <option value="Sillas de Oficina">Muebles / Sillas de Oficina</option>
                    <option value="Asientos de Vehículo">Asientos y Tapicería de Auto</option>
                    <option value="Varios Muebles">Paquete de Varios Muebles</option>
                  </select>
                </div>

                {/* Phone & District in 2 columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.telefono}
                      onChange={e => setFormData({ ...formData, telefono: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary transition"
                      placeholder="Ej. 976 123 456"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                      Zona en Cajamarca
                    </label>
                    <select
                      value={formData.zona}
                      onChange={e => setFormData({ ...formData, zona: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary transition"
                    >
                      {BUSINESS_CONFIG.zones.map(z => (
                        <option key={z} value={z}>{z}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Extra details message */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                    Detalles o manchas especiales (Opcional)
                  </label>
                  <textarea
                    rows={2}
                    value={formData.mensaje}
                    onChange={e => setFormData({ ...formData, mensaje: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary transition resize-none"
                    placeholder="Ej. Manchas de café en el respaldo, olor a mascota, etc."
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full gradient-primary hover:opacity-95 text-white font-bold py-3.5 px-6 rounded-xl text-base flex items-center justify-center gap-2 shadow-md hover:scale-[1.01] active:scale-[0.98] transition-all"
                >
                  <Send className="h-4 w-4" />
                  <span>Enviar y Recibir Cotización en WhatsApp</span>
                </button>

                <p className="text-[11px] text-muted-foreground text-center flex items-center justify-center gap-1 mt-2">
                  <AlertCircle className="h-3 w-3 text-primary" />
                  <span>Tus datos son 100% privados. No enviamos spam.</span>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

