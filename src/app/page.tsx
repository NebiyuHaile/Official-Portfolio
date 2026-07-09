import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TraceManifest from "@/components/TraceManifest";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Activities from "@/components/Activities";
import Contact from "@/components/Contact";
import TracePanel from "@/components/TracePanel";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div aria-hidden className="star-field" />
      <Nav />
      <TracePanel />
      <div className="relative z-10 2xl:pr-[22rem]">
        <Hero />
        <TraceManifest />
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
