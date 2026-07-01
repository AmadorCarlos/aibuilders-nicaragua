import { Lockup } from "./logo";
import { LUMA_MEETUP_URL } from "@/lib/site";

const links = [
  { href: "#comunidad", label: "Comunidad" },
  { href: "#eventos", label: "Eventos" },
  { href: "#aliados", label: "Aliados" },
  { href: "#equipo", label: "Equipo" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#" aria-label="AI Builders Nicaragua — inicio">
          <Lockup />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href={LUMA_MEETUP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-white px-5 py-2 font-sans text-sm font-semibold text-black transition-transform hover:scale-[1.03] active:scale-[0.98]"
        >
          Únete
        </a>
      </nav>
    </header>
  );
}
