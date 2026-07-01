import { Isotipo } from "./logo";
import { LUMA_MEETUP_URL } from "@/lib/site";

export function Hero() {
  return (
    <section className="brand-bg relative h-[100dvh] overflow-hidden">
      {/* Isotipo gigante como marca de agua, baja opacidad */}
      <Isotipo className="pointer-events-none absolute -right-40 top-1/2 h-[85vh] w-[85vh] -translate-y-1/2 text-white/[0.04]" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-5 pb-24 md:px-8 md:pb-28">
        <div className="hero-stagger max-w-3xl">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-white/70">
            Workshops · Meetups · Aprendizaje colectivo
          </p>

          <h1 className="mt-6 font-sans text-[clamp(2.5rem,7vw,4.8rem)] font-semibold leading-[1.08] tracking-tight">
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
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 animate-bounce text-white/40">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>
    </section>
  );
}
