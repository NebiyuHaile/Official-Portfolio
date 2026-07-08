import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Activities from "@/components/Activities";
import Contact from "@/components/Contact";
import TracePanel from "@/components/TracePanel";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <TracePanel />
      <div className="lg:pr-[22rem]">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Activities />
        <Contact />
      </div>
    </main>
  );
}
