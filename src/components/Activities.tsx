import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { activities } from "@/lib/content";

export default function Activities() {
  return (
    <section
      id="activities"
      className="mx-auto max-w-6xl px-6 py-24 sm:px-10 lg:px-16"
    >
      <Reveal>
        <SectionHeading index="05" title="Activities" />
      </Reveal>

      <Reveal delay={0.05}>
        <div className="flex flex-wrap gap-3 font-mono text-sm">
          {activities.map((activity) => (
            <span
              key={activity}
              className="rounded-full border border-border bg-bg-elevated px-4 py-2 text-fg-muted transition-colors hover:border-accent/50 hover:text-fg"
            >
              {activity}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
