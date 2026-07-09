import Reveal from "@/components/Reveal";
import { traceManifest } from "@/lib/content";

export default function TraceManifest() {
  return (
    <section
      id="manifest"
      className="relative mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16"
    >
      <Reveal>
        <div className="manifest-shell">
          <div className="manifest-shell__intro">
            <p className="font-mono text-xs uppercase tracking-[0.26em] text-accent">
              Execution manifest
            </p>
            <h2>Before the scroll continues, the system declares the route.</h2>
            <p>
              I do not want recruiters to decode a wall of portfolio content.
              This request path makes my signal explicit: identity, production
              evidence, systems depth, and a clear reason to start the
              conversation.
            </p>
          </div>

          <ol className="manifest-grid">
            {traceManifest.map((item, index) => (
              <Reveal
                key={item.command}
                delay={index * 0.08}
                className={index % 2 === 1 ? "manifest-card--lower" : ""}
              >
                <li className="manifest-card">
                  <div className="manifest-card__meta">
                    <span>{item.step}</span>
                    <span>{item.status}</span>
                  </div>
                  <code>{item.command}</code>
                  <h3>{item.label}</h3>
                  <p>{item.output}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </Reveal>
    </section>
  );
}
