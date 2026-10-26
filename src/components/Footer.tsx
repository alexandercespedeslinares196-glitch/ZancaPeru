import React from 'react';
import { Phone, Mail, Calendar, Building2 } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppUrl } from '../data/config';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink-950 text-ink-300 pt-16 pb-12 border-t border-ink-800">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Main 4-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-ink-800/80">
          
          {/* Col 1: Brand & Presentation (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center shadow-md">
                <span className="text-white font-black text-base leading-none">Z</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-black tracking-tight text-white">Zanca</span>
                <span className="text-white/25 text-sm font-bold">|</span>
                <span className="text-gradient-cyan text-xl font-black tracking-tight">Limpieza</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-ink-300 leading-relaxed">
              Más de 10 años de experiencia en el lavado y cuidado de tus muebles, llevando limpieza y frescura a tu hogar. Especialistas en limpieza profunda por extracción y productos ecológicos.
            </p>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-aqua-300 leading-relaxed">
              <strong>Servicio a domicilio en Cajamarca y Baños del Inca.</strong> Atención con cita previa.
            </div>
          </div>

          {/* Col 2: Business & Legal Data (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider mb-2">
              <Building2 className="h-4 w-4 text-aqua-400" />
              <span>Datos del Negocio</span>
            </div>

            <div className="space-y-2 text-xs text-ink-300">
              <div>
                <span className="text-ink-400 block text-[11px] uppercase tracking-wider">Nombre comercial:</span>
                <span className="font-bold text-white">{BUSINESS_CONFIG.legal.commercialName}</span>
              </div>

              <div>
                <span className="text-ink-400 block text-[11px] uppercase tracking-wider">Titular:</span>
                <span className="font-medium text-white">{BUSINESS_CONFIG.legal.titular}</span>
              </div>

              <div>
                <span className="text-ink-400 block text-[11px] uppercase tracking-wider">RUC:</span>
                <span className="font-mono font-bold text-aqua-300">{BUSINESS_CONFIG.legal.ruc}</span>
              </div>

              <div>
                <span className="text-ink-400 block text-[11px] uppercase tracking-wider">Domicilio fiscal:</span>
                <span className="text-ink-300 block leading-tight">{BUSINESS_CONFIG.legal.fiscalAddress}</span>
                <span className="text-[10px] text-ink-400 italic block mt-1 leading-normal">
                  *Referencia fiscal y administrativa. No es un local de atención al público; el servicio se brinda exclusivamente a domicilio con cita previa.
                </span>
              </div>
            </div>
          </div>

          {/* Col 3: Services (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-2">
              Nuestros Servicios
            </h4>
            <ul className="space-y-2 text-xs text-ink-300">
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Muebles de tela
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Muebles de cuero (siliconado)
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Colchones (incluye cuna)
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Sillas de comedor y oficina
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Alfombras (recojo y entrega)
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Asientos de auto (sedán/SUV)
                </a>
              </li>
              <li>
                <span className="text-aqua-400">
                  Perfumado (extra opcional)
                </span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & WhatsApp (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-2">
              Contacto y Cotizaciones
            </h4>

            <div className="flex items-start gap-2.5 text-xs text-ink-300">
              <Phone className="h-4 w-4 text-aqua-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-ink-400 block text-[11px]">WhatsApp comercial:</span>
                <a
                  href={`https://wa.me/${BUSINESS_CONFIG.phoneRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-white hover:text-aqua-300 transition-colors text-sm"
                >
                  {BUSINESS_CONFIG.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-xs text-ink-300">
              <Mail className="h-4 w-4 text-aqua-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-ink-400 block text-[11px]">Correo electrónico:</span>
                <a
                  href={`mailto:${BUSINESS_CONFIG.email}`}
                  className="font-medium text-white hover:text-aqua-300 transition-colors"
                >
                  {BUSINESS_CONFIG.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-xs text-ink-300">
              <Calendar className="h-4 w-4 text-aqua-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-ink-400 block text-[11px]">Atención:</span>
                <span className="text-ink-200">Con cita previa coordinada</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppUrl("Hola, Zanca Limpieza. Quisiera una cotización para lavar...")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-md transition-all hover:scale-105"
              >
                <Phone className="h-3.5 w-3.5" />
                <span>Cotizar por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Results notice & Legal Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-ink-400 gap-4 text-center sm:text-left">
          <p>
            © {currentYear} {BUSINESS_CONFIG.legal.commercialName} • RUC {BUSINESS_CONFIG.legal.ruc} • Titular: {BUSINESS_CONFIG.legal.titular}. Todos los derechos reservados.
          </p>
          <p className="text-[11px] text-ink-400">
            Servicio profesional a domicilio en Cajamarca y Baños del Inca con cita previa.
          </p>
        </div>
      </div>
    </footer>
  );
};
