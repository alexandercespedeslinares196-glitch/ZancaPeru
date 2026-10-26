import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQS } from '../data/content';
import { getWhatsAppUrl } from '../data/config';

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-card relative">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-widest bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20">
            Preguntas Frecuentes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight">
            Resolvemos tus Dudas
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Todo lo que necesitas saber antes de contratar nuestro servicio de lavado y desinfección a domicilio.
          </p>
        </div>

        {/* Accordion list */}
        <div className="max-w-3xl mx-auto space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-primary/50 bg-primary/[0.02] shadow-sm'
                    : 'border-border bg-background hover:border-muted-foreground/30'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-foreground focus:outline-none"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className={`h-5 w-5 shrink-0 ${isOpen ? 'text-primary' : 'text-muted-foreground'}`} />
                    <span>{faq.q}</span>
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'
                  }`}>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-muted-foreground leading-relaxed border-t border-border/40 pl-12 sm:pl-14">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra query box */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-3">
            ¿Tienes alguna otra consulta no respondida aquí?
          </p>
          <a
            href={getWhatsAppUrl("Hola, Zanca Limpieza. Tengo una consulta sobre el servicio.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-hover hover:underline"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Chatea con nuestro equipo de atención por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};

