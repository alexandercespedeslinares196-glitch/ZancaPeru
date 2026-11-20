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
  resultsDisclaimer: "Realizamos una limpieza profunda según el material y el estado del artículo. Las manchas se atenúan entre un 50% y un 90% según el caso, nunca al 100%. Lo que sí garantizamos al 100% es la desinfección.",
  paymentMethod: "Yape al 937 712 772",
  catalogUrl: "https://conexigo.com/p/the-best-cleaning-company-in-cajamarca",
  social: {
    facebook: "https://www.facebook.com/zancalimpieza",
    instagram: "https://www.instagram.com/zancalimpieza"
  },
  
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
    muebles: "Aproximadamente de 2 a 3 horas de lavado.",
    sillonUnAsiento: "Entre 30 minutos y 1 hora de lavado.",
    sillasComedor: "Aproximadamente 2 horas de lavado.",
    alfombras: "Aproximadamente de 3 a 5 días hábiles, incluido recojo y entrega a domicilio."
  },

  // Zonas de cobertura: 24 sectores urbanos de Cajamarca según el PDU,
  // más Baños del Inca (distrito aparte que también se atiende)
  zones: [
    "San Sebastián",
    "San José",
    "San Pedro",
    "Cumbe Mayo",
    "Pueblo Nuevo",
    "Chontapaccha",
    "La Colmena",
    "La Merced",
    "Pueblo Libre",
    "San Antonio",
    "Las Torrecitas",
    "Santa Elena",
    "San Martín",
    "Mollepampa",
    "San Vicente",
    "El Estanco",
    "Lucmacucho",
    "La Florida",
    "Nuevo Cajamarca",
    "Urubamba",
    "La Tulpuna",
    "Samana Cruz",
    "La Paccha",
    "Villa Huacariz",
    "Baños del Inca"
  ]
};

export function getWhatsAppUrl(customMessage?: string): string {
  const defaultMsg = "Hola, Zanca Limpieza. Quisiera una cotización para lavar...";
  const text = encodeURIComponent(customMessage || defaultMsg);
  return `https://wa.me/${BUSINESS_CONFIG.phoneRaw}?text=${text}`;
}
