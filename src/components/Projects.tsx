import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/lib/content";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-6 py-24 sm:px-10 lg:px-16"
    >
      <Reveal>
        <SectionHeading index="03" title="Projects" />
        <p className="mb-10 -mt-6 font-mono text-xs text-fg-muted">
          fan-out · these three run concurrently in the trace above
        </p>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-6">
        {projects.map((project, i) => (
          <Reveal
            key={project.id}
            delay={i * 0.1}
            className={
              i === 0
                ? "md:col-span-4"
                : i === 1
                  ? "md:col-span-2 md:pt-14"
                  : "md:col-span-3 md:col-start-3"
            }
          >
            <a
              id={project.id}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="group block h-full scroll-mt-16 rounded-lg border border-border bg-bg-elevated/90 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="flex items-center justify-between font-mono text-xs text-fg-muted">
                <span>{project.service}</span>
                <span className="text-accent">{project.attr}</span>
              </div>
              <h3
                className={`mt-3 font-semibold text-fg group-hover:text-accent ${
                  i === 0 ? "text-3xl sm:text-4xl" : "text-lg"
                }`}
              >
                {project.name}
              </h3>
              <p
                className={`mt-3 text-fg-muted ${
                  i === 0 ? "text-base sm:text-lg" : "text-sm"
                }`}
              >
                {project.description}
              </p>
              <div className="mt-4 rounded-md border border-border/80 bg-bg p-3">
                <p className="font-mono text-[11px] uppercase tracking-wide text-accent">
                  recruiter signal
                </p>
                <p className="mt-2 text-sm text-fg-muted">{project.impact}</p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded border border-border px-2 py-1 font-mono text-[11px] text-fg-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <span className="mt-5 inline-block font-mono text-xs text-fg-muted transition-colors group-hover:text-accent">
                inspect codebase →
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
