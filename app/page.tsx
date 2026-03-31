import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { Reviews } from "@/components/Reviews";
import { Services } from "@/components/Services";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Reveal>
          <About />
        </Reveal>
        <Reveal delay={40}>
          <Services />
        </Reveal>
        <Reveal delay={20}>
          <Work />
        </Reveal>
        <Reveal>
          <Reviews />
        </Reveal>
        <Reveal delay={30}>
          <Contact />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
