import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'p1',
    slug: 'biggie-inventory-agent',
    title: 'Biggie Inventory Agent',
    tagline: 'Agente LLM para gestion inteligente de inventario en retail',
    description:
      'Sistema multi-agente que monitorea niveles de stock en tiempo real, predice quiebres de inventario y genera ordenes de reposicion automaticas usando LLMs con function calling.',
    problem:
      'Biggie opera 200+ sucursales con reposicion manual. El 8% de productos presentan quiebre de stock en horas pico, perdiendo ventas por falta de visibilidad predictiva.',
    solution:
      'Agente autonomo que procesa datos de venta en Supabase, consulta al LLM con herramientas de consulta SQL y genera alertas y ordenes de reposicion en lenguaje natural para los encargados de sucursal.',
    techStack: [
      'Next.js 14',
      'TypeScript',
      'Supabase',
      'Vercel',
      'OpenAI API',
      'DeepSeek API',
      'pnpm',
    ],
    icon: 'inventory',
    links: {
      github: 'https://github.com/PauloFicher/biggie-inventory-agent',
      demo: '',
    },
    category: 'retail',
    azetaCompany: 'Biggie',
    features: [
      'Monitoreo de stock en tiempo real via Supabase Realtime',
      'Agente LLM con herramientas de consulta SQL y generacion de reportes',
      'Prediccion de quiebres de inventario basada en historial de ventas',
      'Dashboard con KPIs: rotacion, quiebres, merma',
      'Sistema de alertas multicanal (WhatsApp, email)',
      'Rate limiting y cache inteligente para optimizar costos de API',
    ],
  },
  {
    id: 'p2',
    slug: 'feedback-analyzer',
    title: 'Customer Feedback Analyzer',
    tagline: 'Analisis de sentimiento y generacion de respuestas automatizadas',
    description:
      'Pipeline que procesa feedback de clientes de las 17 empresas de Azeta, clasifica sentimiento, urgencia y categoria, y genera borradores de respuesta personalizados por marca.',
    problem:
      'Grupo Azeta recibe 10,000+ mensajes de feedback al mes entre encuestas, redes sociales y formularios. El tiempo de respuesta promedio es de 48 horas, cuando el estandar de satisfaccion requiere menos de 4.',
    solution:
      'Sistema que ingesta feedback, lo clasifica con LLM (sentimiento, categoria, urgencia), lo almacena en Supabase, y genera un borrador de respuesta aprobable con el tono de cada marca.',
    techStack: [
      'Next.js 14',
      'TypeScript',
      'Supabase',
      'Vercel',
      'OpenAI API',
      'Anthropic API',
      'pnpm',
    ],
    icon: 'feedback',
    links: {
      github: 'https://github.com/PauloFicher/azeta-feedback-analyzer',
      demo: '',
    },
    category: 'telecom',
    azetaCompany: 'Azeta (Multi-empresa)',
    features: [
      'Clasificador de sentimiento multi-etiqueta (positivo, neutro, negativo, urgente)',
      'Generacion de borrador de respuesta con tono de marca configurable',
      'Dashboard de analisis con filtros por empresa, sucursal, periodo',
      'Exportacion de reportes para gerencia',
      'Manejo de rate limiting con cola de procesamiento',
    ],
  },
  {
    id: 'p3',
    slug: 'onboarding-ocr',
    title: 'Zeta Banco Onboarding OCR',
    tagline: 'KYC automatizado con OCR y validacion documental',
    description:
      'API en Python/FastAPI que procesa documentos de identidad (cedula, pasaporte), extrae datos via OCR, los valida contra la base de RUC de SET y devuelve un score de confianza.',
    problem:
      'Zeta Banco procesa 500+ aperturas de cuenta al mes. Cada una requiere verificacion manual de documentos que toma 20 minutos, con una tasa de error humano del 3%.',
    solution:
      'EndPoint que recibe la imagen del documento, ejecuta OCR con Tesseract + preprocesamiento OpenCV, extrae campos estructurados, valida contra base oficial y devuelve resultado con score de confianza y campos extraidos.',
    techStack: [
      'Python 3.12',
      'FastAPI',
      'OpenCV',
      'Tesseract OCR',
      'Supabase',
      'Anthropic API',
      'Docker',
    ],
    icon: 'ocr',
    links: {
      github: 'https://github.com/PauloFicher/onboarding-ocr',
      demo: '',
    },
    category: 'finanzas',
    azetaCompany: 'Zeta Banco',
    features: [
      'OCR de cedula paraguaya con validacion de formato',
      'Extraccion estructurada: nombre, cedula, fecha nacimiento, direccion',
      'Validacion de autenticidad del documento (liveness detection basica)',
      'Score de confianza 0-100 con umbral configurable',
      'Endpoint unico con documentacion OpenAPI/Swagger',
    ],
  },
  {
    id: 'p4',
    slug: 'contract-intel',
    title: 'Contract Intelligence',
    tagline: 'RAG sobre contratos inmobiliarios con busqueda semantica',
    description:
      'Sistema que indexa contratos de alquiler y compraventa en una base vectorial (pgvector en Supabase), permite busqueda semantica y extrae clausulas relevantes usando RAG.',
    problem:
      'La division inmobiliaria de Azeta gestiona 1,200+ contratos activos. Encontrar una clausula especifica entre todos toma en promedio 45 minutos de busqueda manual en PDFs.',
    solution:
      'Pipeline de ingestion de PDFs que genera embeddings (OpenAI text-embedding-3-small), los almacena en pgvector, y permite busqueda por lenguaje natural: "muestrame todos los contratos con clausula de rescision anticipada mayor a 30 dias".',
    techStack: [
      'Next.js 14',
      'TypeScript',
      'Supabase (pgvector)',
      'Vercel',
      'OpenAI API',
      'LangChain',
      'pnpm',
    ],
    icon: 'contract',
    links: {
      github: 'https://github.com/PauloFicher/contract-intelligence',
      demo: '',
    },
    category: 'inmobiliario',
    azetaCompany: 'Azeta Inmobiliaria',
    features: [
      'Ingestion de PDFs con splitting semantico (no por paginas)',
      'Embeddings con OpenAI text-embedding-3-small (1536 dims)',
      'Busqueda semantica + filtros (fecha, monto, tipo de contrato)',
      'Extraccion de clausulas con LLM (funcion citar fuente)',
      'Row Level Security para acceso por rol (legal, comercial, admin)',
      'Chat historico con memoria de sesion',
    ],
  },
];
