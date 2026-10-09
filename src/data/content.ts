export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  tag: string;
  features: string[];
  icon: string;
  popular?: boolean;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "colchones",
    title: "Colchones",
    description: "Eliminamos ácaros, bacterias y alérgenos. Desinfección profunda para un descanso 100% saludable.",
    tag: "Salud & Descanso",
    features: [
      "Extracción profunda de ácaros y células muertas",
      "Eliminación de manchas de sudor y orina",
      "Desodorización y neutralización de olores",
      "Secado rápido con humedad residual mínima"
    ],
    icon: "Bed",
    popular: true
  },
  {
    id: "sofas",
    title: "Sofás y Muebles de Sala",
    description: "Lavado profundo de tapicería en tela, cuero y microfibra. Recuperamos el color original sin desteñir.",
    tag: "Hogar & Confort",
    features: [
      "Tratamiento especial para manchas difíciles",
      "Champú desengrasante biodegradable con pH neutro",
      "Inyección y succión industrial simultánea",
      "Apto para muebles seccionales y sillones reclinables"
    ],
    icon: "Armchair",
    popular: true
  },
  {
    id: "alfombras",
    title: "Alfombras y Tapetes",
    description: "Lavado profesional para hogares y oficinas. Recuperamos colores vivos y eliminamos polvo incrustado.",
    tag: "Residencial & Comercial",
    features: [
      "Aspirado rotativo de alta vibración",
      "Lavado de pelo corto, mediano y alfombras shaggy",
      "Desinfección anti-hongos y anti-humedad",
      "Cuidado delicado de fibras naturales y sintéticas"
    ],
    icon: "Layers"
  },
  {
    id: "sillas",
    title: "Sillas de Comedor",
    description: "Cuidado especializado para telas delicadas. Manchas de alimentos, grasa y uso diario completamente resueltas.",
    tag: "Telas Delicadas",
    features: [
      "Eliminación de manchas de comida, café y salsas",
      "Desmanchado focalizado sin cercos de agua",
      "Protección para estructuras de madera y metal",
      "Ideal para juegos de 4, 6 y 8 sillas"
    ],
    icon: "Utensils"
  },
  {
    id: "oficina",
    title: "Muebles de Oficina",
    description: "Ambientes de trabajo limpios y productivos. Limpieza profunda y sanitización de sillas ergonómicas y paneles.",
    tag: "Productividad",
    features: [
      "Servicio fuera de horario laboral para empresas",
      "Sanitización para alto tráfico de colaboradores",
      "Atención a oficinas, notarías, consultorios y bancos",
      "Facturación para empresas en Cajamarca"
    ],
    icon: "Briefcase"
  },
  {
    id: "vehiculos",
    title: "Tapicería de Autos",
    description: "Limpieza detallada de asientos de autos y camionetas. Retiro de manchas de bebidas, polvo y olores a humedad.",
    tag: "Automotriz",
    features: [
      "Limpieza de asientos delanteros y posteriores",
      "Tratamiento especial para telas y cueros",
      "Eliminación de olores a tabaco y humedad",
      "Atención en tu cochera o domicilio"
    ],
    icon: "Car"
  }
];

export const METHOD_STEPS = [
  {
    step: "01",
    title: "Inspección y Diagnóstico",
    description: "Evaluamos el tipo de fibra textil, estado de las manchas y nivel de suciedad para seleccionar el producto adecuado.",
    icon: "Search"
  },
  {
    step: "02",
    title: "Aspirado Industrial Anti-Ácaros",
    description: "Aspirado de alta potencia para retirar polvo profundo, cabellos, restos sólidos y ácaros antes del lavado húmedo.",
    icon: "Wind"
  },
  {
    step: "03",
    title: "Pre-lavado con Espuma Activa",
    description: "Aplicamos soluciones biodegradables que desprenden la grasa corporal y manchas adheridas a nivel molecular.",
    icon: "Sparkles"
  },
  {
    step: "04",
    title: "Inyección y Extracción Profunda",
    description: "Nuestra máquina Kärcher inyecta agua a presión con desinfectante y succiona al vacío la suciedad acumulada.",
    icon: "Activity"
  },
  {
    step: "05",
    title: "Desodorización y Secado Rápido",
    description: "Aplicamos aromatizante antibacterial neutro. Tu mueble queda listo para usar en solo 2 a 4 horas.",
    icon: "Sun"
  }
];

export const TESTIMONIALS = [
  {
    name: "María García",
    role: "Vecina de Baños del Inca",
    text: "Increíble el cambio en mi colchón. Mis alergias mejoraron desde la primera limpieza. ¡Totalmente recomendados en Cajamarca!",
    stars: 5,
    service: "Limpieza de Colchón Queen"
  },
  {
    name: "Carlos Rodríguez",
    role: "Administrador de Empresa",
    text: "Contratamos el servicio para 40 sillas de oficina en nuestro local del centro. El equipo fue puntual, profesional y los resultados excelentes.",
    stars: 5,
    service: "Sillas de Oficina & Paneles"
  },
  {
    name: "Ana Martínez",
    role: "Diseñadora de Interiores",
    text: "Rescataron una alfombra persa que creí perdida por manchas de vino y tierra. El cuidado con los materiales delicados es impecable.",
    stars: 5,
    service: "Alfombra Tradicional"
  },
  {
    name: "Jorge Mendoza",
    role: "Urb. Ramón Castilla",
    text: "Tengo dos perros y el sofá tenía olor y manchas de patas. Quedó oliendo a limpio y con los colores como el día que lo compramos.",
    stars: 5,
    service: "Sofá Seccional 4 Cuerpos"
  }
];

export const FAQS = [
  {
    q: "¿Cuánto tarda en secar un mueble después de la limpieza?",
    a: "El tiempo de secado varía entre 2 y 4 horas gracias a nuestro sistema de inyección y extracción profunda de alta succión. A diferencia del lavado tradicional con escobilla y manguera, nosotros extraemos el 90% del agua de inmediato."
  },
  {
    q: "¿Los productos que usan son seguros para niños y mascotas?",
    a: "Sí, absolutamente. Todos nuestros químicos de limpieza son biodegradables, hipoalergénicos, sin cloro ni solventes tóxicos, seguros para toda la familia y mascotas."
  },
  {
    q: "¿Cuánto cuesta el servicio de limpieza en Cajamarca?",
    a: "El precio depende del tipo de mueble, tamaño y condición. Por ejemplo, una silla de comedor ronda desde S/ 15, un colchón de 2 plazas desde S/ 70 y un sofá de 3 cuerpos desde S/ 90. ¡Puedes usar nuestro cotizador interactivo o escribirnos al WhatsApp para un presupuesto exacto!"
  },
  {
    q: "¿Trabajan a domicilio en todo Cajamarca?",
    a: "Sí, el 100% de nuestros servicios se realizan a domicilio. Llevamos todos los equipos profesionales a tu hogar, departamento u oficina en Cajamarca ciudad, Baños del Inca y zonas aledañas."
  },
  {
    q: "¿Ofrecen garantía de satisfacción?",
    a: "Absolutamente. Contamos con garantía 100% Zanca Limpieza. Si al secar el mueble notas alguna mancha que no haya salido según lo acordado, repetimos el servicio sin ningún costo adicional."
  },
  {
    q: "¿Necesito preparar algo antes de que llegue el técnico?",
    a: "Solo necesitamos un punto de enchufe eléctrico común (220V) y acceso a agua limpia (un caño o lavadero). Nosotros nos encargamos de mover y proteger el espacio alrededor."
  }
];

// Opciones para el cotizador interactivo
export const CALCULATOR_CATEGORIES = [
  {
    id: "sofa",
    name: "Sofás y Sillones",
    icon: "Armchair",
    items: [
      { id: "sofa-1", name: "Sillón individual (1 cuerpo)", basePrice: 40 },
      { id: "sofa-2", name: "Sofá mediano (2 cuerpos)", basePrice: 70 },
      { id: "sofa-3", name: "Sofá estándar (3 cuerpos)", basePrice: 95 },
      { id: "sofa-l", name: "Sofá seccional en L (4-5 cuerpos)", basePrice: 140 },
      { id: "sofa-xl", name: "Seccional grande + Chaise Longue", basePrice: 180 }
    ]
  },
  {
    id: "colchon",
    name: "Colchones",
    icon: "Bed",
    items: [
      { id: "col-1", name: "Colchón de 1 a 1.5 plazas", basePrice: 55 },
      { id: "col-2", name: "Colchón de 2 plazas", basePrice: 75 },
      { id: "col-queen", name: "Colchón Queen Size", basePrice: 90 },
      { id: "col-king", name: "Colchón King Size", basePrice: 110 }
    ]
  },
  {
    id: "sillas",
    name: "Sillas de Comedor",
    icon: "Utensils",
    items: [
      { id: "silla-4", name: "Juego de 4 sillas tapizadas", basePrice: 50 },
      { id: "silla-6", name: "Juego de 6 sillas tapizadas", basePrice: 75 },
      { id: "silla-8", name: "Juego de 8 sillas tapizadas", basePrice: 95 },
      { id: "silla-ind", name: "Silla individual / de escritorio", basePrice: 15 }
    ]
  },
  {
    id: "alfombra",
    name: "Alfombras",
    icon: "Layers",
    items: [
      { id: "alf-s", name: "Alfombra pequeña (hasta 1.5 x 1 m)", basePrice: 40 },
      { id: "alf-m", name: "Alfombra mediana (hasta 2 x 1.5 m)", basePrice: 65 },
      { id: "alf-l", name: "Alfombra grande de sala (hasta 3 x 2 m)", basePrice: 110 }
    ]
  },
  {
    id: "auto",
    name: "Tapicería de Autos",
    icon: "Car",
    items: [
      { id: "auto-sedan", name: "Auto sedán (todos los asientos)", basePrice: 110 },
      { id: "auto-suv", name: "Camioneta SUV (5 asientos)", basePrice: 140 },
      { id: "auto-van", name: "Camioneta 3 filas (7-8 asientos)", basePrice: 180 }
    ]
  }
];

export const CALCULATOR_EXTRAS = [
  { id: "desinfeccion", name: "Tratamiento bactericida y anti-ácaros UV profundo", price: 15 },
  { id: "mascotas", name: "Neutralizador enzimático de olores de orina / mascotas", price: 20 },
  { id: "teflon", name: "Protector repelente de líquidos y manchas (Teflonado)", price: 35 }
];

