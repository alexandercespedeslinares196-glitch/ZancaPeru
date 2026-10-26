export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tag: string;
  features: string[];
  icon: string;
  popular?: boolean;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "muebles-tela",
    title: "Muebles de Tela",
    category: "Muebles de tela",
    description: "Limpieza profunda por inyección y extracción para sofás, juegos 3-2-1, seccionales en L y U, y sofá cama.",
    tag: "Hogar & Sala",
    features: [
      "Sofás individuales, 2 y 3 cuerpos",
      "Juegos completos 3-2-1",
      "Muebles seccionales en L y en U",
      "Sofá cama y sillones reclinables",
      "Productos ecológicos que cuidan la fibra"
    ],
    icon: "Armchair",
    popular: true
  },
  {
    id: "colchones",
    title: "Colchones",
    category: "Colchones",
    description: "Limpieza profunda por extracción para colchones de todas las plazas, incluida cuna. Cuidado higiénico para un mejor descanso.",
    tag: "Descanso & Salud",
    features: [
      "Todas las plazas: Cuna, 1 y 1.5 plz, 2 plz, Queen y King",
      "Extracción profunda de suciedad y polvo",
      "Lavado con productos ecológicos y seguros",
      "Tiempo de lavado: aprox. 1 a 2 horas (tiempo de lavado, no de secado)"
    ],
    icon: "Bed",
    popular: true
  },
  {
    id: "sillas",
    title: "Sillas de Comedor y Oficina",
    category: "Sillas",
    description: "Lavado profesional de tapicería en sillas de comedor y sillas de oficina, retirando manchas de comida y uso diario.",
    tag: "Comedor & Oficina",
    features: [
      "Sillas de comedor (asiento y respaldo tapizado)",
      "Sillas ergonómicas y ejecutivas de oficina",
      "Remoción de suciedad acumulada y manchas",
      "Atención para hogares, oficinas y consultorios"
    ],
    icon: "Utensils"
  },
  {
    id: "alfombras",
    title: "Alfombras",
    category: "Alfombras",
    description: "Lavado especializado para alfombras de pelo corto, mediano o largo. Servicio integral con recojo y entrega.",
    tag: "Hogar & Negocios",
    features: [
      "Alfombras de pelo corto, mediano y pelo largo",
      "Limpieza y desmanchado profundo de tejidos",
      "Tiempo de entrega: aprox. 3 a 5 días hábiles",
      "Incluye servicio de recojo y entrega a domicilio"
    ],
    icon: "Layers"
  },
  {
    id: "vehiculos",
    title: "Asientos de Auto",
    category: "Asientos de auto",
    description: "Limpieza profunda de tapicería de asientos para autos sedán, camionetas y SUV directamente a tu domicilio.",
    tag: "Automotriz",
    features: [
      "Vehículos sedán, camionetas y camionetas SUV",
      "Limpieza de asientos delanteros y posteriores",
      "Extracción de polvo, suciedad y manchas",
      "Atención a domicilio en tu cochera con cita previa"
    ],
    icon: "Car"
  },
  {
    id: "muebles-cuero",
    title: "Muebles de Cuero (Siliconado)",
    category: "Muebles de cuero",
    description: "Servicio de siliconado y acondicionamiento protector para nutrir y conservar el cuero (no realizamos lavado al agua de cuero).",
    tag: "Cuidado de Cuero",
    features: [
      "Aplicación de siliconado protector especial",
      "Nutrición de la piel para prevenir resequedad",
      "Devuelve el brillo y la suavidad al material",
      "No se realiza lavado con agua para proteger el cuero"
    ],
    icon: "Shield"
  }
];

export const METHOD_STEPS = [
  {
    step: "01",
    title: "Inspección del Artículo",
    description: "Evaluamos el tipo de fibra o tapiz, el estado de las manchas y las condiciones del artículo para seleccionar el procedimiento adecuado.",
    icon: "Search"
  },
  {
    step: "02",
    title: "Aspirado Inicial Profundo",
    description: "Retiramos residuos sólidos, polvo y partículas superficiales acumuladas antes de iniciar la limpieza húmeda.",
    icon: "Wind"
  },
  {
    step: "03",
    title: "Aplicación de Solución Ecológica",
    description: "Utilizamos productos ecológicos biodegradables que disuelven la suciedad y grasa adherida sin maltratar los tejidos.",
    icon: "Sparkles"
  },
  {
    step: "04",
    title: "Inyección y Extracción Profunda",
    description: "Inyectamos la solución limpiadora y succionamos simultáneamente la suciedad desde el interior de la tapicería.",
    icon: "Activity"
  },
  {
    step: "05",
    title: "Perfumado Opcional y Secado",
    description: "Opcionalmente aplicamos perfumado para dejar una agradable sensación de frescura. El secado se completa de forma natural según el ambiente.",
    icon: "Sun"
  }
];

export const TESTIMONIALS = [
  {
    name: "María Elena García",
    location: "Baños del Inca",
    text: "Excelente servicio a domicilio. Lavaron mi juego de sala y colchón con mucho cuidado y profesionalismo. Llegaron puntuales con cita previa y el resultado fue notable.",
    service: "Juego de Sala y Colchón"
  },
  {
    name: "Carlos Rodríguez",
    location: "Urb. Santa Rosa, Cajamarca",
    text: "Puntuales y cuidadosos al momento de trabajar. El sofá seccional quedó muy limpio y con una sensación de frescura que hacía falta. Totalmente recomendados.",
    service: "Sofá Seccional"
  },
  {
    name: "Patricia Mendoza",
    location: "San Sebastián, Cajamarca",
    text: "Muy buena atención con nuestras sillas de comedor y alfombra. Cumplieron con el recojo y la entrega de la alfombra en los días pactados.",
    service: "Sillas de Comedor y Alfombra"
  },
  {
    name: "Jorge Huamán",
    location: "Cajamarca Centro",
    text: "Excelente trato desde la coordinación por WhatsApp. Solicité el servicio para los asientos de mi camioneta y quedaron impecables.",
    service: "Asientos de Camioneta"
  }
];

export const FAQS = [
  {
    q: "¿Cuánto tiempo toma el servicio de lavado?",
    a: "En colchones, el lavado toma aproximadamente de 1 a 2 horas (este tiempo corresponde estrictamente al lavado, no al secado). En alfombras, el proceso completo con recojo, lavado profundo y entrega toma aproximadamente de 3 a 5 días hábiles."
  },
  {
    q: "¿Cuánto tarda en secar el mueble o colchón?",
    a: "El tiempo de secado no es fijo: depende del tipo de tejido, el clima y la ventilación del espacio. Al utilizar el sistema de extracción profunda retiramos la mayor parte de la humedad, facilitando un secado natural."
  },
  {
    q: "¿Salen todas las manchas al 100%?",
    a: "Realizamos una limpieza profunda según el material y el estado del artículo. Algunas manchas antiguas o tratadas previamente con otros productos pueden no desaparecer por completo, aunque siempre buscamos el mejor resultado posible cuidando la tela."
  },
  {
    q: "¿Cómo solicito una cotización exacta?",
    a: "Puedes usar nuestro formulario web o escribirnos directamente a nuestro WhatsApp (+51 937 712 772). Indícanos qué artículo deseas lavar, en qué zona te encuentras y envíanos una foto del artículo para que nuestro equipo confirme el precio exacto."
  },
  {
    q: "¿Hacen lavado de muebles de cuero?",
    a: "Para muebles de cuero realizamos un servicio de siliconado y acondicionamiento protector que nutre y protege el material contra resequedad. No ofrecemos servicio de lavado con agua para muebles de cuero."
  },
  {
    q: "¿Dónde atienden y cómo se coordina la cita?",
    a: "Atendemos exclusivamente a domicilio en Cajamarca y Baños del Inca, siempre con cita previa programada según disponibilidad. No contamos con local de atención al público."
  }
];

// Opciones dinámicas para la Solicitud de Cotización (sin precios inventados)
export interface QuoteCategoryOption {
  id: string;
  name: string;
  icon: string;
  questionLabel: string;
  itemTypes: { id: string; label: string }[];
  quantityLabel: string;
  specificQuestions?: {
    id: string;
    label: string;
    options: string[];
  }[];
}

export const QUOTE_CATEGORIES: QuoteCategoryOption[] = [
  {
    id: "muebles-tela",
    name: "Muebles de Tela",
    icon: "Armchair",
    questionLabel: "Tipo de mueble de tela:",
    itemTypes: [
      { id: "sofa-1", label: "Sofá individual (1 cuerpo)" },
      { id: "sofa-2", label: "Sofá de 2 cuerpos" },
      { id: "sofa-3", label: "Sofá de 3 cuerpos" },
      { id: "juego-321", label: "Juego completo 3-2-1" },
      { id: "seccional-l", label: "Seccional en L" },
      { id: "seccional-u", label: "Seccional en U" },
      { id: "sofa-cama", label: "Sofá cama" },
      { id: "otro-mueble", label: "Otro modelo de mueble" }
    ],
    quantityLabel: "Cantidad de asientos o piezas:",
    specificQuestions: [
      {
        id: "material",
        label: "¿Conoces el material de la tela? (Opcional)",
        options: [
          "No estoy seguro / Tela común",
          "Lino",
          "Terciopelo / Velvet",
          "Chenille",
          "Microfibra",
          "Cuero sintético / Vinil"
        ]
      }
    ]
  },
  {
    id: "muebles-cuero",
    name: "Muebles de Cuero (Siliconado)",
    icon: "Shield",
    questionLabel: "Tipo de mueble de cuero a siliconar:",
    itemTypes: [
      { id: "cuero-1", label: "Sillón individual de cuero" },
      { id: "cuero-2", label: "Sofá de 2 cuerpos de cuero" },
      { id: "cuero-3", label: "Sofá de 3 cuerpos de cuero" },
      { id: "cuero-juego", label: "Juego completo de cuero" },
      { id: "cuero-seccional", label: "Seccional de cuero" }
    ],
    quantityLabel: "Cantidad de muebles a siliconar:",
    specificQuestions: [
      {
        id: "aclaracion",
        label: "Tratamiento a aplicar:",
        options: [
          "Siliconado y acondicionamiento protector de cuero (no lavado con agua)"
        ]
      }
    ]
  },
  {
    id: "colchones",
    name: "Colchones",
    icon: "Bed",
    questionLabel: "Tamaño / Número de plazas del colchón:",
    itemTypes: [
      { id: "cuna", label: "Cuna de bebé" },
      { id: "col-1", label: "1 plaza o 1.5 plazas" },
      { id: "col-2", label: "2 plazas (estándar)" },
      { id: "col-queen", label: "Queen Size" },
      { id: "col-king", label: "King Size" },
      { id: "varios-col", label: "Varios colchones" }
    ],
    quantityLabel: "Cantidad de colchones:",
    specificQuestions: [
      {
        id: "caras",
        label: "¿Deseas lavar una o ambas caras del colchón?",
        options: [
          "Ambas caras (completo)",
          "Solo 1 cara principal",
          "A consultar según inspección"
        ]
      }
    ]
  },
  {
    id: "sillas",
    name: "Sillas de Comedor y Oficina",
    icon: "Utensils",
    questionLabel: "Tipo de sillas:",
    itemTypes: [
      { id: "sillas-comedor", label: "Sillas de comedor" },
      { id: "sillas-oficina", label: "Sillas de oficina / ergonómicas" },
      { id: "sillones-ejecutivos", label: "Sillones ejecutivos o gerenciales" },
      { id: "butacas", label: "Butacas o banquetas" }
    ],
    quantityLabel: "¿Cuántas sillas necesitas lavar?",
    specificQuestions: [
      {
        id: "partes",
        label: "Partes tapizadas a lavar:",
        options: [
          "Solo asiento tapizado",
          "Asiento y respaldo tapizado",
          "Tapizado integral"
        ]
      },
      {
        id: "material-silla",
        label: "Material del tapiz (si lo conoce):",
        options: [
          "Tela estándar",
          "Malla ergonómica",
          "Terciopelo o lino",
          "No estoy seguro"
        ]
      }
    ]
  },
  {
    id: "alfombras",
    name: "Alfombras",
    icon: "Layers",
    questionLabel: "Medidas aproximadas de la alfombra:",
    itemTypes: [
      { id: "alf-pequena", label: "Pequeña (hasta 1.5 x 1.0 m aprox.)" },
      { id: "alf-mediana", label: "Mediana (hasta 2.0 x 1.5 m aprox.)" },
      { id: "alf-grande", label: "Grande de sala (hasta 3.0 x 2.0 m aprox.)" },
      { id: "alf-pasadizo", label: "Alfombra pasillera / tapete largo" },
      { id: "alf-otra", label: "Otras medidas (indicar en detalles)" }
    ],
    quantityLabel: "Cantidad de alfombras:",
    specificQuestions: [
      {
        id: "tipo-pelo",
        label: "Tipo de pelo de la alfombra:",
        options: [
          "Pelo corto",
          "Pelo mediano",
          "Pelo largo / Shaggy"
        ]
      }
    ]
  },
  {
    id: "vehiculos",
    name: "Asientos de Auto",
    icon: "Car",
    questionLabel: "Tipo de vehículo:",
    itemTypes: [
      { id: "auto-sedan", label: "Auto Sedán / Hatchback" },
      { id: "camioneta-suv", label: "Camioneta SUV (5 asientos)" },
      { id: "camioneta-grande", label: "Camioneta de 3 filas (7-8 asientos)" },
      { id: "camioneta-pick", label: "Camioneta Pick-up" }
    ],
    quantityLabel: "Cantidad de vehículos:",
    specificQuestions: [
      {
        id: "asientos-lavar",
        label: "¿Qué asientos deseas lavar?",
        options: [
          "Todos los asientos (filas completas)",
          "Solo asientos delanteros",
          "Solo asientos posteriores"
        ]
      }
    ]
  }
];
