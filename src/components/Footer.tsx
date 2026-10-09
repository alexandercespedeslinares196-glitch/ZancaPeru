import React from 'react';
import { Phone, MapPin, Clock, ShieldCheck, Heart } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppUrl } from '../data/config';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink-950 text-ink-300 pt-16 pb-12 border-t border-ink-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-ink-800/80">
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
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

            <p className="text-xs sm:text-sm text-ink-400 leading-relaxed">
              Servicio de limpieza profesional de <strong>Zanca Perú</strong> — Soluciones que te conectan. Especialistas certificados en limpieza profunda, desinfección y desmanchado de tapicerías y muebles a domicilio en Cajamarca.
            </p>

            <div className="flex items-center gap-2 text-xs text-aqua-400 pt-1">
              <ShieldCheck className="h-4 w-4" />
              <span>Garantía de Satisfacción 100%</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Navegación Rápida
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-ink-400">
              <li>
                <a href="#servicios" className="hover:text-primary transition-colors">
                  Servicios de Limpieza
                </a>
              </li>
              <li>
                <a href="#resultados" className="hover:text-primary transition-colors">
                  Antes y Después
                </a>
              </li>
              <li>
                <a href="#cotizador" className="hover:text-primary text-aqua-300 font-semibold transition-colors">
                  Cotizador Online en Vivo
                </a>
              </li>
              <li>
                <a href="#metodo" className="hover:text-primary transition-colors">
                  Método de Inyección-Extracción
                </a>
              </li>
              <li>
                <a href="#cobertura" className="hover:text-primary transition-colors">
                  Zonas de Atención en Cajamarca
                </a>
              </li>
              <li>
                <a href="#opiniones" className="hover:text-primary transition-colors">
                  Testimonios de Clientes
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-primary transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Servicios Destacados
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-ink-400">
              <li>Lavado de Colchones Anti-Ácaros</li>
              <li>Limpieza de Sofás y Seccionales</li>
              <li>Lavado y Desinfección de Alfombras</li>
              <li>Limpieza de Sillas de Comedor</li>
              <li>Muebles y Sillas de Oficina</li>
              <li>Tapicería Vehicular a Domicilio</li>
              <li>Tratamiento Anti-Olores de Mascotas</li>
            </ul>
          </div>

          {/* Col 4: Contact & Schedule */}
          <div className="space-y-3.5">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Contacto y Atención
            </h4>

            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-ink-400">
              <MapPin className="h-4 w-4 text-aqua-400 shrink-0 mt-0.5" />
              <span>{BUSINESS_CONFIG.address}</span>
            </div>

            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-ink-400">
              <Phone className="h-4 w-4 text-aqua-400 shrink-0" />
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white font-semibold text-aqua-300 transition-colors"
              >
                {BUSINESS_CONFIG.phone}
              </a>
            </div>

            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-ink-400">
              <Clock className="h-4 w-4 text-aqua-400 shrink-0" />
              <span>{BUSINESS_CONFIG.schedule}</span>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppUrl("¡Hola Zanca Limpieza! Deseo reservar un turno.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block gradient-primary text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-sm hover:scale-105 transition-all"
              >
                Reservar Cita por WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-ink-500 gap-4 text-center sm:text-left">
          <p>
            © {currentYear} {BUSINESS_CONFIG.fullName}. Un servicio de Zanca Perú. Todos los derechos reservados.
          </p>
          <p className="flex items-center justify-center gap-1">
            Limpieza profesional hecha con <Heart className="h-3.5 w-3.5 text-rose-500 fill-rose-500 inline" /> para los hogares de Cajamarca.
          </p>
        </div>
      </div>
    </footer>
  );
};
