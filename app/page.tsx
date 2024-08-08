import { Projects } from "@/components/Projects";
import Hero from "@/components/Hero";
import { AboutMe } from "@/components/AboutMe";
import Footer from "@/components/Footer";



export default function Home() {
  return (
    <main className="font-sfProDisplay font-[500]">
      <Hero />
      <Projects />
      <AboutMe />
      <Footer />
    </main>
  );
}
