import Reveal from "@/components/Reveal";
import { profile } from "@/lib/content";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-6 py-24 text-center sm:px-10 lg:px-16"
    >
      <Reveal>
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-xs text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          200 OK · connection open
        </div>
        <h2 className="text-3xl font-semibold tracking-tight text-fg sm:text-5xl">
          Want to talk systems with me?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-fg-muted">
          {profile.availability}. Email is the fastest way to reach me, and I
          am ready to talk through how I built the systems above.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 font-mono text-sm">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-md border border-accent/40 bg-accent/10 px-5 py-2.5 text-accent transition-colors hover:bg-accent/20"
          >
            Email Nebiyu
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-border px-5 py-2.5 text-fg-muted transition-colors hover:border-accent/50 hover:text-fg"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-border px-5 py-2.5 text-fg-muted transition-colors hover:border-accent/50 hover:text-fg"
          >
            LinkedIn
          </a>
        </div>
      </Reveal>

      <footer className="mt-24 border-t border-border pt-6 font-mono text-xs text-fg-muted/60">
        © {new Date().getFullYear()} {profile.name} · built solo, shipped end to end
      </footer>
    </section>
  );
}
