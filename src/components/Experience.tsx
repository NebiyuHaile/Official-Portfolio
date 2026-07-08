import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { experience } from "@/lib/content";

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl px-6 py-24 sm:px-10 lg:px-16"
    >
      <Reveal>
        <SectionHeading index="02" title="Experience" />
      </Reveal>

      <div className="relative border-l border-border pl-8">
        {experience.map((job, i) => (
          <Reveal key={job.id} delay={i * 0.08} className="relative pb-12 last:pb-0">
            <span className="absolute top-1.5 -left-[calc(2rem+3px)] h-2.5 w-2.5 rounded-full border-2 border-accent bg-bg" />
            <div id={job.id} className="scroll-mt-16">
              <div className="flex flex-wrap items-baseline justify-between gap-2 font-mono text-xs text-fg-muted">
                <span>{job.service}</span>
                <span>{job.period}</span>
              </div>
              <h3 className="mt-2 text-xl font-semibold text-fg">{job.role}</h3>
              <p className="font-mono text-sm text-fg-muted">{job.org}</p>
              <ul className="mt-4 space-y-2 text-fg-muted">
                {job.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="text-accent">›</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <span className="mt-4 inline-block rounded border border-accent/30 bg-accent/10 px-2 py-1 font-mono text-xs text-accent">
                {job.attr}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
