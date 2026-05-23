# P0 - Portfolio Hub | AI Automation Specialist

Landing page profesional para postulacion como Especialista en Automatizacion con IA en el Grupo Azeta (Paraguay).

## ① Objetivo de negocio

**Problema del Grupo Azeta:** Con 17 empresas en retail, finanzas, telecomunicaciones e inmobiliario, el grupo necesita un especialista que automatice procesos criticos con IA. Esta landing centraliza 4 proyectos que demuestran capacidad inmediata de impacto en cada vertical.

**Proposito del P0:** Ser el hub que presenta los 4 proyectos de automatizacion con IA, posicionando al candidato como un AI Automation Specialist listo para resolver problemas reales del grupo.

## ② Arquitectura tecnica

```
Cliente (Browser)
    |
    v
Next.js 14 (Vercel Edge)
    |
    +-- SSG: Hero, Proyectos (estatico, velocidad maxima)
    +-- API Route: /api/contact -> Supabase (contact_messages)
    +-- Rate Limiting: in-memory middleware (5 req/min por IP)
    |
    v
Supabase
    +-- contact_messages (RLS: insert anon, select authenticated)
```

**Decisiones tecnicas:**
- **pnpm** exclusivo (nunca npm). Workspaces preparados para monorepo con P1-P4.
- **SSG para contenido estatico**: los proyectos no cambian frecuentemente; pre-renderizados en build.
- **API Route sin ORM**: supabase-js directamente con validacion manual (sin Zod para mantener el bundle ligero).
- **Rate limiting en memoria**: suficiente para un portfolio. Si escala, mover a Upstash Redis.
- **No hay auth de usuario final**: solo el formulario de contacto usa Supabase (anon insert con RLS).

## ③ Estructura de carpetas

```
P0-landing/
  src/
    app/
      api/contact/route.ts    # Endpoint de contacto con validacion
      layout.tsx              # Root layout + metadata SEO
      page.tsx                # Home: Hero + ProjectsGrid + TechStack + Contact
      globals.css             # Tailwind imports + scrollbar + selection
    components/
      Navbar.tsx              # Nav fija con links y mobile toggle
      Hero.tsx                # Hero section con preview de 4 proyectos
      ProjectCard.tsx         # Card individual de proyecto
      ProjectsGrid.tsx        # Grid de los 4 proyectos
      TechStack.tsx           # Stack tecnologico por categoria
      ContactSection.tsx      # Formulario de contacto con estados
      Footer.tsx              # Links y copyright
    lib/
      supabase.ts             # Cliente Supabase (anon key, no persiste sesion)
      projects-data.ts        # Datos estaticos de P1-P4
    types/
      index.ts                # Interfaces: Project, ContactFormData
    middleware.ts             # Rate limiting para /api/*
  supabase/
    schema.sql                # Migracion: contact_messages + RLS
  .env.example                # Variables de entorno requeridas
  package.json                # Dependencias (pnpm)
  next.config.mjs             # CSP headers + image remote patterns
  tailwind.config.ts          # Custom colors (azeta-*), animaciones
  tsconfig.json               # Strict TS config
  README.md                   # Este archivo
```

## ④ Supabase schema

Ver `supabase/schema.sql`.

Tabla unica: `contact_messages`.
- RLS habilitado: insert anonimo, select solo authenticated.
- Cleanup opcional via `pg_cron` (descomentar en schema.sql).

## ⑤ Variables de entorno (.env.example)

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
NEXT_PUBLIC_SITE_URL=https://pauloesp-ai-portfolio.vercel.app
```

## ⑥ Pasos de deploy a produccion

### 1. Supabase
```bash
# 1. Crear proyecto en https://supabase.com
# 2. Ir a SQL Editor y ejecutar supabase/schema.sql
# 3. Copiar URL y ANON_KEY de Settings > API
```

### 2. Vercel
```bash
# 1. Crear proyecto en https://vercel.com
# 2. Conectar con el repo de GitHub
# 3. Framework: Next.js
# 4. Root Directory: P0-landing
# 5. Environment Variables: las 3 de .env.example
# 6. Build Command: pnpm build (Vercel detecta pnpm por packageManager)
# 7. Deploy
```

### 3. Local
```bash
cd P0-landing
pnpm install
cp .env.example .env.local  # editar con valores reales
pnpm dev                     # http://localhost:3000
```

## ⑦ Argumentos de entrevista

### Elevator pitch (30 segundos)
> "Construi este portfolio con 4 proyectos de IA que atacan problemas reales de cada vertical del Grupo Azeta. Biggie necesita un agente de inventario, Zeta Banco necesita KYC automatizado, la inmobiliaria necesita RAG sobre contratos, y atencion al cliente necesita analisis de sentimiento. Cada proyecto esta en mi GitHub, documentado y listo para adaptarse a produccion."

### Preguntas esperadas y respuestas

**"Por que Next.js y no un backend tradicional?"**
> "Next.js me da SSG para la landing (gratis en Vercel, 0 servidor), API Routes para el formulario, y es el mismo stack que uso en los proyectos P1, P2 y P4. Un solo lenguaje en todo el portfolio. Para P3 uso Python porque OCR requiere OpenCV/Tesseract."

**"Por que Supabase y no PostgreSQL directo?"**
> "Supabase me da PostgreSQL real, RLS declarativo, Realtime (WebSockets) para el agente de inventario, y pgvector para el RAG de contratos. Todo en un solo servicio con pricing que escala por uso, no por servidor."

**"Como manejas la seguridad de las API keys de OpenAI/Anthropic?"**
> "En P1, P2 y P4 las API keys son server-side environment variables. Nunca se exponen al cliente. En P3 (Python), se usa python-dotenv. El rate limiting en middleware protege contra abuso de endpoints que llaman LLMs."

**"Que pasa si el LLM alucina en el agente de inventario?"**
> "El agente tiene tools de consulta SQL directa. El LLM no 'inventa' datos de stock: usa function calling para ejecutar SELECT reales contra Supabase. Lo unico que genera es el texto de resumen. Ademas, cada tool_response se loguea para auditoria."

### Por que vos sobre otros candidatos
- **5+ anos de experiencia real full-stack** en produccion (Nestle, Tigo).
- **Stack moderno comprobado**: Next.js 14 + Supabase + Vercel en proyectos reales.
- **Agentes con MCP y RAG**: no solo "probe ChatGPT", hiciste arquitecturas de agentes con tools, skills, y RAG en produccion.
- **Entendes el negocio**: cada proyecto esta pensado para una empresa especifica del grupo, con metricas y problemas reales.
- **Homelab propio corriendo IA**: demostras pasion real, no solo interes academico.
