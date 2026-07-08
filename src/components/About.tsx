import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { about } from "@/lib/content";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl px-6 py-24 sm:px-10 lg:px-16"
    >
      <Reveal>
        <SectionHeading index="01" title="About" />
      </Reveal>

      <div className="grid gap-10 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <p className="text-lg text-fg-muted sm:text-xl">{about.blurb}</p>
          <ul className="mt-6 space-y-3 text-fg-muted">
            {about.strengths.map((strength) => (
              <li key={strength} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{strength}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-2">
          <div className="rounded-lg border border-border bg-bg-elevated p-6 font-mono text-sm">
            <div className="mb-4 flex items-center gap-2 text-xs text-fg-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              education.json
            </div>
            <dl className="space-y-3">
              <div>
                <dt className="text-fg-muted">degree</dt>
                <dd className="text-fg">{about.degree}</dd>
              </div>
              <div>
                <dt className="text-fg-muted">school</dt>
                <dd className="text-fg">{about.school}</dd>
              </div>
              <div>
                <dt className="text-fg-muted">graduation</dt>
                <dd className="text-accent">{about.grad}</dd>
              </div>
            </dl>
            <div className="mt-5 border-t border-border pt-4">
              <p className="mb-2 text-xs text-fg-muted">coursework</p>
              <div className="flex flex-wrap gap-2">
                {about.coursework.map((course) => (
                  <span
                    key={course}
                    className="rounded border border-border px-2 py-1 text-xs text-fg-muted"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
