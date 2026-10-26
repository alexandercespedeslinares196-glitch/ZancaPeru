export const BUSINESS_CONFIG = {
  name: "Zanca Limpieza",
  fullName: "Zanca Limpieza",
  parentBrand: "Zanca Perú",
  parentTagline: "Soluciones que te conectan",
  tagline: "Lavado profesional a domicilio en Cajamarca y Baños del Inca",
  experienceYears: "+10",
  phone: "+51 937 712 772",
  phoneRaw: "51937712772", // Número oficial de WhatsApp
  email: "zancalimpieza@gmail.com",
  city: "Cajamarca",
  coverageArea: "Cajamarca y Baños del Inca",
  country: "Perú",
  attentionMode: "Servicio a domicilio en Cajamarca y Baños del Inca. Atención con cita previa.",
  resultsDisclaimer: "Realizamos una limpieza profunda según el material y el estado del artículo. Algunas manchas antiguas o tratadas previamente pueden no desaparecer por completo.",
  
  // Datos legales del negocio para pie de página y verificación
  legal: {
    commercialName: "ZANCA LIMPIEZA",
    titular: "CHAVARRY ABANTO FIORELLA KATHERINE",
    ruc: "10471365632",
    fiscalAddress: "Av. Vía de Evitamiento Norte 619, interior P12A, Urb. Santa Rosa, Cajamarca",
    fiscalNote: "Domicilio fiscal de referencia administrativa. No es un local de atención al público; el servicio se brinda exclusivamente a domicilio con cita previa."
  },

  // Tiempos transparentes de servicio
  serviceTimes: {
    colchones: "Aproximadamente de 1 a 2 horas de lavado (este tiempo corresponde al lavado, no al secado).",
    alfombras: "Aproximadamente de 3 a 5 días hábiles, incluido recojo y entrega a domicilio."
  },

  // Zonas de cobertura
  zones: [
    "Cajamarca (Centro Histórico)",
    "Baños del Inca",
    "San Sebastián",
    "Chontapaccha",
    "Magna Vallejo",
    "Mollepampa",
    "Santa Apolonia",
    "Pueblo Libre",
    "Urb. Ramón Castilla",
    "Urb. Santa Rosa",
    "Torora",
    "Bellavista",
    "Huambocancha",
    "Casas de campo / Campiña"
  ]
};

export function getWhatsAppUrl(customMessage?: string): string {
  const defaultMsg = "Hola, Zanca Limpieza. Quisiera una cotización para lavar...";
  const text = encodeURIComponent(customMessage || defaultMsg);
  return `https://wa.me/${BUSINESS_CONFIG.phoneRaw}?text=${text}`;
}
