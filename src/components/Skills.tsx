import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { skills } from "@/lib/content";

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-6xl px-6 py-24 sm:px-10 lg:px-16"
    >
      <Reveal>
        <SectionHeading index="04" title="Skills" />
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.08}>
            <div className="h-full rounded-lg border border-border bg-bg-elevated p-6">
              <h3 className="mb-4 font-mono text-sm text-accent">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded border border-border px-2.5 py-1 text-sm text-fg-muted transition-colors hover:border-accent/50 hover:text-fg"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
