import Image from "next/image";
import { Isotipo } from "./logo";
import { LUMA_MEETUP_URL } from "@/lib/site";
import communityPhoto from "@/public/community/meetup-comunidad.webp";

export function Hero() {
  return (
    <section className="brand-bg relative min-h-[100dvh] overflow-hidden lg:h-[100dvh]">
      {/* Isotipo gigante como marca de agua, baja opacidad */}
      <Isotipo className="pointer-events-none absolute -right-40 top-1/2 h-[85vh] w-[85vh] -translate-y-1/2 text-white/[0.04]" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-start px-5 pb-12 pt-28 md:px-8 lg:justify-end lg:pb-28 lg:pt-0">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_clamp(280px,28vw,420px)] lg:items-center lg:gap-[clamp(2.5rem,4vw,4rem)]">
          <div className="hero-stagger max-w-3xl">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-white/70">
              Workshops · Meetups · Aprendizaje colectivo
            </p>

            <h1 className="mt-6 font-sans text-[clamp(2.5rem,7vw,4.8rem)] font-semibold leading-[1.08] tracking-tight lg:text-[clamp(2.5rem,4.7vw,4.25rem)]">
              Somos la comunidad de quienes{" "}
              <span className="text-brand-blue [text-shadow:0_0_60px_rgba(0,17,255,0.6)]">
                construyen con IA
              </span>{" "}
              en Nicaragua.
            </h1>

            <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-white/75 md:text-lg">
              El punto de encuentro de los capítulos locales de las herramientas
              que están cambiando el mundo —empezando por Cursor— para hostear
              sus workshops y meetups en el país.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={LUMA_MEETUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-brand-blue px-7 py-3.5 font-sans text-sm font-semibold text-white shadow-[0_0_40px_rgba(0,17,255,0.45)] transition-transform hover:scale-[1.03] active:scale-[0.98]"
              >
                Únete a la comunidad
              </a>
              <a
                href="#eventos"
                className="rounded-[18px] border border-white/20 bg-white/5 px-7 py-3.5 font-sans text-sm font-medium text-white/85 backdrop-blur-sm transition-colors hover:bg-white/10 hover:text-white"
              >
                Ver eventos
              </a>
            </div>
          </div>

          <figure className="hero-photo relative m-0 aspect-square overflow-hidden rounded-[var(--radius-card)] bg-surface shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_24px_60px_-20px_rgba(0,17,255,0.55)]">
            <Image
              src={communityPhoto}
              alt="Miembros de AI Builders Nicaragua posando juntos durante un meetup de la comunidad en Managua"
              width={768}
              height={768}
              sizes="(min-width:1024px) 420px, calc(100vw - 40px)"
              preload
              className="h-full w-full object-cover"
            />
          </figure>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 animate-bounce text-white/40 lg:block">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>
    </section>
  );
}
