import { Isotipo } from "./logo";
import {
  LUMA_MEETUP_URL,
  allies,
  benefits,
  events,
  team,
} from "@/lib/site";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-brand-blue-soft">
      {children}
    </p>
  );
}

const h2 =
  "font-sans text-[clamp(1.8rem,4.2vw,2.8rem)] font-semibold leading-[1.15] tracking-tight";

/* ————— Quiénes somos — copy oficial del brandbook §01 ————— */
export function About() {
  return (
    <section id="comunidad" className="scroll-mt-24 border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <div className="reveal grid gap-10 md:grid-cols-[1fr_2fr]">
          <div>
            <Eyebrow>Quiénes somos</Eyebrow>
            <Isotipo className="mt-12 hidden h-44 w-44 text-white md:block lg:h-56 lg:w-56" />
          </div>
          <div>
            <h2 className={h2}>
              El punto de encuentro de quienes construyen con IA.
            </h2>
            <p className="mt-8 max-w-2xl text-base font-light leading-relaxed text-muted-fg md:text-lg">
              AI Builders Nicaragua es la nueva comunidad tech que impulsa la
              creación de productos con inteligencia artificial en el país, en
              alianza con Cursor a través de su programa de embajadores.
            </p>
            <p className="mt-5 max-w-2xl text-base font-light leading-relaxed text-muted-fg md:text-lg">
              Somos un ecosistema donde developers, founders, diseñadores y
              builders se reúnen para explorar nuevas herramientas, compartir
              workflows reales y construir productos digitales usando IA como
              su superpoder.
            </p>
            <p className="mt-5 max-w-2xl text-base font-light leading-relaxed text-muted-fg md:text-lg">
              Nuestra filosofía es simple: menos teoría, más ejecución. Pronto
              sumaremos a otras empresas de IA mediante sus programas de
              promoción de tecnología avanzada.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Workshops", "Meetups", "Aprendizaje colectivo"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-line px-4 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-white/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ————— Manifiesto — azul pleno, brandbook §02 ————— */
export function Manifesto() {
  return (
    <section className="border-b border-line bg-brand-blue">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <div className="reveal">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-white/60">
            02 / Nuestra misión · Manifiesto
          </p>
          <p className="mt-10 max-w-4xl font-sans text-[clamp(1.6rem,4vw,2.7rem)] font-semibold leading-[1.25] tracking-tight">
            Creemos que el futuro no se espera:{" "}
            <span className="text-white/60">se construye</span>. Y en Nicaragua
            se construye en comunidad —compartiendo lo que aprendemos, abriendo
            la puerta a quien empieza y llevando la IA a manos de cada builder
            del país.
          </p>
          <Isotipo className="mt-14 h-10 w-10 text-white" />
        </div>
      </div>
    </section>
  );
}

/* ————— Beneficios ————— */
export function Benefits() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <div className="reveal mb-14">
          <Eyebrow>Por qué sumarte</Eyebrow>
          <h2 className={`mt-4 ${h2}`}>Lo que te llevás de la comunidad</h2>
        </div>

        <div className="grid gap-px overflow-hidden rounded-card border border-line bg-line md:grid-cols-2">
          {benefits.map((b) => (
            <article
              key={b.n}
              className="reveal group bg-ink p-8 transition-colors hover:bg-surface md:p-10"
            >
              <p className="font-mono text-[0.7rem] tracking-[0.2em] text-brand-blue-soft">
                / {b.n}
              </p>
              <h3 className="mt-5 font-sans text-xl font-semibold tracking-tight md:text-2xl">
                {b.title}
              </h3>
              <p className="mt-3 max-w-md text-[0.95rem] font-light leading-relaxed text-muted-fg">
                {b.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ————— Eventos: timeline ————— */
const statusStyles: Record<string, { label: string; className: string }> = {
  realizado: {
    label: "Realizado",
    className: "border-white/25 text-white/60",
  },
  proximamente: {
    label: "Próximamente",
    className: "border-brand-blue text-brand-blue-soft",
  },
};

export function Events() {
  return (
    <section id="eventos" className="scroll-mt-24 border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <div className="reveal mb-14">
          <Eyebrow>Agenda</Eyebrow>
          <h2 className={`mt-4 ${h2}`}>Eventos</h2>
        </div>

        <ol className="divide-y divide-line border-y border-line">
          {events.map((event) => {
            const status = statusStyles[event.status];
            return (
              <li key={event.title} className="reveal">
                <div className="grid gap-4 py-8 md:grid-cols-[7rem_1fr_auto] md:items-center md:gap-8">
                  <p className="font-mono text-sm tracking-[0.15em] text-white/85">
                    {event.date}
                  </p>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-sans text-lg font-semibold tracking-tight md:text-xl">
                        {event.title}
                      </h3>
                      <span
                        className={`rounded-full border px-3 py-1 font-mono text-[0.6rem] uppercase tracking-[0.18em] ${status.className}`}
                      >
                        {status.label}
                      </span>
                    </div>
                    <p className="mt-2 max-w-xl text-sm font-light leading-relaxed text-muted-fg">
                      {event.description}
                    </p>
                    <p className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-white/45">
                      {event.location}
                    </p>
                  </div>
                  <div>
                    {event.url ? (
                      <a
                        href={event.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 font-sans text-sm font-medium text-white/85 transition-colors hover:border-brand-blue hover:text-white"
                      >
                        Ver evento <span aria-hidden="true">→</span>
                      </a>
                    ) : (
                      <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-white/35">
                        Registro pronto
                      </span>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

/* ————— Aliados y partners ————— */
export function Allies() {
  return (
    <section id="aliados" className="scroll-mt-24 border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <div className="reveal mb-14">
          <Eyebrow>Aliados</Eyebrow>
          <h2 className={`mt-4 ${h2}`}>Construimos acompañados</h2>
        </div>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-card border border-line bg-line md:grid-cols-4">
          {allies.map((ally) => (
            <div
              key={ally.name}
              className="reveal flex flex-col items-center justify-center gap-4 bg-ink px-6 py-12 text-center transition-colors hover:bg-surface md:py-16"
            >
              {ally.logo ? (
                <span className="flex items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={ally.logo}
                    alt={ally.logoFull ? ally.name : ""}
                    className={`${ally.logoFull ? "h-10 md:h-12" : "h-12 md:h-14"} w-auto max-w-full object-contain mix-blend-screen ${
                      ally.logoInvert ? "invert hue-rotate-180" : ""
                    }`}
                  />
                  {!ally.logoFull && (
                    <span className="font-sans text-2xl font-semibold tracking-tight text-white/80 md:text-3xl">
                      {ally.name}
                    </span>
                  )}
                </span>
              ) : (
                <span className="font-sans text-xl font-semibold tracking-tight text-white/80 md:text-2xl">
                  {ally.name}
                </span>
              )}
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-muted-fg">
                {ally.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ————— Equipo ————— */
export function Team() {
  return (
    <section id="equipo" className="scroll-mt-24 border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <div className="reveal mb-14">
          <Eyebrow>Organizadores</Eyebrow>
          <h2 className={`mt-4 ${h2}`}>Quiénes empujan esto</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {team.map((member) => {
            const initials = member.name
              .split(" ")
              .slice(0, 2)
              .map((w) => w[0])
              .join("");
            return (
              <article key={member.name} className="reveal">
                <div className="brand-bg flex aspect-square items-center justify-center overflow-hidden rounded-card border border-line">
                  {member.photo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="relative z-10 h-full w-full object-cover"
                    />
                  ) : (
                    <span className="relative z-10 font-sans text-6xl font-semibold text-white/90">
                      {initials}
                    </span>
                  )}
                </div>
                <p className="mt-5 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-brand-blue-soft">
                  / {member.n} {member.role}
                </p>
                <h3 className="mt-2 font-sans text-lg font-semibold tracking-tight">
                  {member.name}
                </h3>
              </article>
            );
          })}
        </div>

        <p className="reveal mt-14 max-w-xl text-[0.95rem] font-light leading-relaxed text-muted-fg">
          ¿Querés ayudar a que esto crezca? La comunidad está abierta a nuevos{" "}
          <span className="font-normal text-white">
            organizers, voluntarios y embajadores
          </span>
          . Acercate en el próximo evento y hablemos.
        </p>
      </div>
    </section>
  );
}

/* ————— CTA final ————— */
export function FinalCTA() {
  return (
    <section className="brand-bg-top border-b border-line">
      <div className="relative z-10 mx-auto max-w-6xl px-5 py-28 text-center md:px-8 md:py-40">
        <div className="reveal flex flex-col items-center gap-8">
          <Isotipo className="h-14 w-14 text-white" />
          <h2 className="max-w-2xl font-sans text-[clamp(2rem,5.5vw,3.6rem)] font-semibold leading-[1.1] tracking-tight">
            Construyamos el futuro de la IA en Nicaragua, juntos.
          </h2>
          <p className="max-w-xl text-base font-light leading-relaxed text-white/75 md:text-lg">
            Registrate al próximo evento y conocé a la comunidad en persona.
            Traé tu laptop, tus ideas y las ganas de shipear.
          </p>
          <a
            href={LUMA_MEETUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand-blue px-8 py-4 font-sans text-sm font-semibold text-white shadow-[0_0_40px_rgba(0,17,255,0.45)] transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            Registrarme <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ————— Footer ————— */
export function Footer() {
  return (
    <footer className="bg-ink">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-white/40 md:flex-row md:items-center md:justify-between md:px-8">
        <span>© 2026 AI Builders Nicaragua</span>
        <span>Impulsado por la comunidad · Volcano Labs · Founders Club · Impact Hub Managua</span>
      </div>
    </footer>
  );
}
