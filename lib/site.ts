/**
 * Datos reales del sitio — fuente: CLAUDE.md.
 * El link de WhatsApp/Discord de la comunidad aún no existe (Pendientes §3);
 * todos los CTA de "únete" usan el Luma del evento como fallback.
 */
export const LUMA_MEETUP_URL = "https://luma.com/nrt2dela";

export type EventStatus = "realizado" | "proximamente";

export interface CommunityEvent {
  date: string; // formato mono: "JUL 01"
  title: string;
  description: string;
  location: string;
  status: EventStatus;
  url?: string;
}

export const events: CommunityEvent[] = [
  {
    date: "JUL 01",
    title: "Primer Meetup · Cursor Managua",
    description:
      "El arranque de la comunidad: quiénes somos, beneficios, what's new in Cursor y networking.",
    location: "Impact Hub Managua · 6:00 PM",
    status: "realizado",
    url: LUMA_MEETUP_URL,
  },
  {
    date: "AGO",
    title: "Cursor Hackathon",
    description:
      "Construí en equipo durante la jornada y presentá tu proyecto con IA.",
    location: "Por confirmar",
    status: "proximamente",
  },
  {
    date: "AGO",
    title: "Cursor Café",
    description:
      "Co-work, demos cortas y networking en un ambiente relajado.",
    location: "Por confirmar",
    status: "proximamente",
  },
];

export const benefits = [
  {
    n: "01",
    title: "Aprendizaje práctico",
    body: "Workshops, demos y workflows reales en Cursor y otras herramientas de IA.",
  },
  {
    n: "02",
    title: "Comunidad y networking",
    body: "Conectá con developers, founders y builders que ya construyen con IA en Nicaragua.",
  },
  {
    n: "03",
    title: "Acceso a herramientas",
    body: "Beneficios, créditos y novedades de Cursor y de los futuros aliados de IA.",
  },
  {
    n: "04",
    title: "Eventos y swag",
    body: "Meetups presenciales y online, contenido exclusivo y merch de Cursor y partners.",
  },
];

export interface TeamMember {
  n: string;
  name: string;
  role: string;
  /** Ruta de la foto en /public (ej. "/team/leandro.jpg"). Sin foto, se muestran las iniciales. */
  photo?: string;
}

export const team: TeamMember[] = [
  {
    n: "01",
    name: "Leandro Gómez Cano",
    role: "Cursor Ambassador",
    photo: "/team/leandro.jpg",
  },
  { n: "02", name: "Carlos Amador", role: "Organizer", photo: "/team/carlos.jpg" },
  { n: "03", name: "Rodolfo Andino", role: "Organizer", photo: "/team/rodolfo.jpg" },
];

export interface Ally {
  name: string;
  tag: string;
  body: string;
  /** Ruta del logo en /public (ej. "/logos/cursor.svg"). Sin archivo, se muestra el wordmark en texto. */
  logo?: string;
  /** true si el logo ya incluye el nombre (lockup completo) — no se repite el texto al lado. */
  logoFull?: boolean;
  /** true si el logo es para fondo claro — se invierte con CSS para el fondo oscuro. */
  logoInvert?: boolean;
}

export const allies: Ally[] = [
  {
    name: "Cursor",
    tag: "Aliado fundador",
    body: "El IDE agéntico que cambia la forma de construir, vía su programa de embajadores.",
    logo: "/logos/cursor.png",
  },
  {
    name: "Founders Club",
    tag: "Aliado de comunidad",
    body: "Conectando a la comunidad con el ecosistema emprendedor local.",
    logo: "/logos/founders-club.png",
    logoFull: true,
    logoInvert: true,
  },
  {
    name: "Volcano Labs",
    tag: "Aliado tecnológico",
    body: "Apoya la presencia digital de la comunidad — un esfuerzo comunitario, no comercial.",
    logo: "/logos/volcano-labs.png",
    logoFull: true,
  },
  {
    name: "Impact Hub Managua",
    tag: "Sede",
    body: "Host físico de los meetups presenciales de la comunidad.",
    logo: "/logos/impact-hub.png",
    logoFull: true,
  },
];

/** Partners colaboradores en fase piloto (sección "acceso a herramientas"). */
export const pilotPartners = [
  "Wispr Flow",
  "Exa",
  "Netlify",
  "Eleven Labs",
  "Fal.ai",
];
