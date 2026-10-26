import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { getWhatsAppUrl } from '../data/config';

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotificationBadge, setShowNotificationBadge] = useState(true);

  useEffect(() => {
    // Show popup bubble automatically after 4 seconds to assist user
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      {/* Interactive Chat Bubble Popup */}
      {isOpen && (
        <div className="pointer-events-auto mb-3 w-[310px] sm:w-[340px] bg-card rounded-2xl shadow-2xl border border-border overflow-hidden animate-float">
          {/* Header */}
          <div className="bg-[#25D366] p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-black text-lg">
                  Z
                </div>
                {/* Online indicator */}
                <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-white border-2 border-[#25D366]" />
              </div>

              <div>
                <h4 className="font-bold text-sm leading-tight">Zanca Limpieza</h4>
                <div className="flex items-center gap-1.5 text-[11px] text-white/90">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  <span>WhatsApp Comercial</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                setShowNotificationBadge(false);
              }}
              className="p-1 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-colors"
              aria-label="Cerrar ventana de chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Body message */}
          <div className="p-4 bg-muted/30 text-xs sm:text-sm text-foreground/90 space-y-3">
            <div className="bg-card p-3.5 rounded-xl rounded-tl-none border border-border shadow-xs">
              <p className="leading-relaxed font-medium">
                ¡Hola! 👋 Lavado profesional a domicilio en Cajamarca y Baños del Inca.
              </p>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                Envíanos una foto del artículo que deseas lavar y en qué zona te encuentras para brindarte una cotización sin compromiso.
              </p>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="p-3 bg-card border-t border-border">
            <a
              href={getWhatsAppUrl("Hola, Zanca Limpieza. Quisiera una cotización para lavar...")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-2.5 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all"
            >
              <Send className="h-3.5 w-3.5" />
              <span>Cotizar por WhatsApp</span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Circular Action Button */}
      <button
        type="button"
        onClick={() => {
          setIsOpen(!isOpen);
          setShowNotificationBadge(false);
        }}
        className="pointer-events-auto relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-floating hover:scale-110 active:scale-95 transition-all duration-200 group"
        aria-label="Abrir WhatsApp"
      >
        {/* Pulsating ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 group-hover:opacity-50" />

        <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8 fill-white relative z-10" />

        {/* Unread dot badge */}
        {showNotificationBadge && !isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-rose-500 text-white text-[11px] font-bold rounded-full flex items-center justify-center shadow-md animate-bounce">
            1
          </span>
        )}
      </button>
    </div>
  );
};
