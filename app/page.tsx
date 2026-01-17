import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TechStack } from "@/components/sections/TechStack";
import { Highlights } from "@/components/sections/Highlights";
import { Pillars } from "@/components/sections/Pillars";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TechStack />
        <Highlights />
        <Pillars />
        <Projects />
        <Skills />
        <Experience />
        <Education />
      </main>
      <Footer />
    </>
  );
}
