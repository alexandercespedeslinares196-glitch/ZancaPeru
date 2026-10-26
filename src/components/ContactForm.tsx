import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle, MessageCircle, Info, Camera, Calendar } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/config';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    servicio: 'Muebles de tela',
    cantidad: '1',
    material: '',
    zona: 'Cajamarca (Centro Histórico)',
    estado: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let text = `Hola, Zanca Limpieza. Quisiera una cotización para lavar:\n\n`;
    text += `👤 *Nombre:* ${formData.nombre}\n`;
    text += `🛋️ *Servicio:* ${formData.servicio}\n`;
    text += `🔢 *Cantidad:* ${formData.cantidad}\n`;
    if (formData.material) {
      text += `🧵 *Material:* ${formData.material}\n`;
    }
    text += `📍 *Zona:* ${formData.zona}\n`;
    if (formData.estado) {
      text += `📝 *Estado / Manchas:* ${formData.estado}\n`;
    }
    text += `\n📸 *Adjunto la foto del artículo a continuación para la cotización.*`;

    // Open WhatsApp
    const url = `https://wa.me/${BUSINESS_CONFIG.phoneRaw}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        nombre: '',
        servicio: 'Muebles de tela',
        cantidad: '1',
        material: '',
        zona: 'Cajamarca (Centro Histórico)',
        estado: ''
      });
    }, 7000);
  };

  return (
    <section id="contacto" className="py-24 bg-muted/50 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
          {/* Left Info Column */}
          <div>
            <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-widest bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20">
              Datos de Contacto
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-6 tracking-tight">
              Pide tu Cotización
            </h2>
            <p className="text-base text-muted-foreground mb-8 leading-relaxed">
              Cuéntanos qué artículo necesitas lavar y en qué zona te encuentras. Envíanos una foto por WhatsApp para confirmar tu cotización sin compromiso.
            </p>

            {/* Direct Contact Points */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 text-sm text-foreground bg-card p-4 rounded-xl border border-border shadow-xs">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary mt-0.5">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="font-bold block text-foreground">Modalidad de Atención</span>
                  <span className="text-xs text-muted-foreground leading-relaxed block">
                    {BUSINESS_CONFIG.attentionMode}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4 text-sm text-foreground bg-card p-4 rounded-xl border border-border shadow-xs">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary mt-0.5">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <span className="font-bold block text-foreground">WhatsApp Comercial</span>
                  <a
                    href={`https://wa.me/${BUSINESS_CONFIG.phoneRaw}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-primary font-bold hover:underline block mt-0.5"
                  >
                    {BUSINESS_CONFIG.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 text-sm text-foreground bg-card p-4 rounded-xl border border-border shadow-xs">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary mt-0.5">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="font-bold block text-foreground">Correo Electrónico</span>
                  <a
                    href={`mailto:${BUSINESS_CONFIG.email}`}
                    className="text-xs text-primary font-bold hover:underline block mt-0.5"
                  >
                    {BUSINESS_CONFIG.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 text-sm text-foreground bg-card p-4 rounded-xl border border-border shadow-xs">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary mt-0.5">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <span className="font-bold block text-foreground">Coordinación de Citas</span>
                  <span className="text-xs text-muted-foreground block mt-0.5">
                    Atención previa cita coordinada de acuerdo a disponibilidad.
                  </span>
                </div>
              </div>
            </div>

            {/* Fast WhatsApp Direct Link */}
            <div className="mt-8">
              <a
                href={BUSINESS_CONFIG.phoneRaw ? `https://wa.me/${BUSINESS_CONFIG.phoneRaw}?text=${encodeURIComponent("Hola, Zanca Limpieza. Quisiera una cotización para lavar...")}` : '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-brand-700 bg-brand-50 hover:bg-brand-100 border border-brand-200 px-4 py-2.5 rounded-xl transition-colors"
              >
                <MessageCircle className="h-4 w-4 fill-brand-700" />
                <span>¿Prefieres chatear directo? Escríbenos al WhatsApp</span>
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
                  ¡Solicitud preparada!
                </h3>
                <p className="text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed">
                  Se ha abierto WhatsApp con tus datos. Recuerda adjuntar una foto de tu artículo para que podamos confirmarte la cotización exacta.
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
                    placeholder="Ej. Carmen Chávez"
                  />
                </div>

                {/* Service type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                      ¿Qué necesitas lavar? *
                    </label>
                    <select
                      required
                      value={formData.servicio}
                      onChange={e => setFormData({ ...formData, servicio: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary transition"
                    >
                      <option value="Muebles de tela">Muebles de tela (sofás, 3-2-1, seccional)</option>
                      <option value="Muebles de cuero (Siliconado)">Muebles de cuero (Siliconado)</option>
                      <option value="Colchones">Colchón (cuna, 1-2 plazas, Queen, King)</option>
                      <option value="Sillas de comedor u oficina">Sillas de comedor o de oficina</option>
                      <option value="Alfombras">Alfombras (pelo corto, mediano, largo)</option>
                      <option value="Asientos de auto">Asientos de auto (sedán, camioneta, SUV)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                      Cantidad de piezas / asientos *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.cantidad}
                      onChange={e => setFormData({ ...formData, cantidad: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary transition"
                      placeholder="Ej. 1 sofá de 3 cuerpos / 6 sillas"
                    />
                  </div>
                </div>

                {/* Material & Zone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                      Material si lo conoces (Opcional)
                    </label>
                    <input
                      type="text"
                      value={formData.material}
                      onChange={e => setFormData({ ...formData, material: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary transition"
                      placeholder="Ej. Chenille, lino, cuero, no lo sé"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                      Zona en Cajamarca / Baños del Inca *
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

                {/* Condition details */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                    Estado o tipo de manchas (Opcional)
                  </label>
                  <textarea
                    rows={2}
                    value={formData.estado}
                    onChange={e => setFormData({ ...formData, estado: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary transition resize-none"
                    placeholder="Ej. Manchas de sudor o comida, polvo acumulado, manchas antiguas, etc."
                  />
                </div>

                {/* Photo notice */}
                <div className="p-3 bg-primary/5 border border-primary/20 rounded-xl text-xs text-muted-foreground flex items-center gap-2">
                  <Camera className="h-4 w-4 text-primary shrink-0" />
                  <span>Para confirmar el precio, por favor envíanos una foto del artículo al abrir WhatsApp.</span>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-3.5 px-6 rounded-xl text-base flex items-center justify-center gap-2 shadow-md hover:scale-[1.01] active:scale-[0.98] transition-all"
                >
                  <Send className="h-4 w-4" />
                  <span>Solicitar mi cotización</span>
                </button>

                <p className="text-[11px] text-muted-foreground text-center flex items-center justify-center gap-1 mt-2">
                  <Info className="h-3 w-3 text-primary" />
                  <span>Cotización gratis y sin compromiso. Atención con cita previa.</span>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
