export const BUSINESS_CONFIG = {
  name: "Zanca Limpieza",
  fullName: "Zanca Limpieza Cajamarca",
  parentBrand: "Zanca Perú",
  parentTagline: "Soluciones que te conectan",
  tagline: "Limpieza Profesional de Muebles y Tapicería a Domicilio",
  phone: "+51 976 002 892",
  phoneRaw: "51976002892", // Número de WhatsApp para enlaces directos
  email: "contacto@zancaperu.pe",
  city: "Cajamarca",
  country: "Perú",
  schedule: "Lunes a Sábado: 8:00 am - 7:00 pm (Domingos previa coordinación)",
  address: "Servicio a Domicilio en toda la ciudad de Cajamarca y Baños del Inca",
  guaranteeText: "Garantía de Satisfacción del 100%. Si no quedas conforme, repetimos el servicio sin costo adicional.",
  stats: [
    { label: "Muebles Renovados", value: "+1,850", icon: "Sparkles" },
    { label: "Clientes Satisfechos", value: "99.4%", icon: "Smile" },
    { label: "Productos Hipoalergénicos", value: "100%", icon: "Leaf" },
    { label: "Años en Cajamarca", value: "+5 Años", icon: "Clock" }
  ],
  zones: [
    "Centro Histórico",
    "Baños del Inca",
    "San Sebastián",
    "Chontapaccha",
    "Magna Vallejo",
    "Mollepampa",
    "Santa Apolonia",
    "Pueblo Libre",
    "Urb. Ramón Castilla",
    "Torora",
    "Huambocancha",
    "Bellavista"
  ]
};

export function getWhatsAppUrl(customMessage?: string): string {
  const defaultMsg = "¡Hola Zanca Limpieza! 👋 Deseo solicitar una cotización gratuita para la limpieza de mis muebles.";
  const text = encodeURIComponent(customMessage || defaultMsg);
  return `https://wa.me/${BUSINESS_CONFIG.phoneRaw}?text=${text}`;
}
