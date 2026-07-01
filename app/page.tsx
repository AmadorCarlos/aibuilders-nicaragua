import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import {
  About,
  Manifesto,
  Benefits,
  Events,
  Allies,
  Team,
  FinalCTA,
  Footer,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Nav />

      <Hero />

      <main className="relative z-10 border-t border-line bg-ink">
        <About />
        <Manifesto />
        <Benefits />
        <Events />
        <Allies />
        <Team />
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
}
