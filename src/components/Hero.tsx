"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import RequestConstellation from "@/components/RequestConstellation";
import { profile, proofPoints } from "@/lib/content";

const BOOT_LINE = "connecting to nebiyu@prod...";

function useTypewriter(text: string, speed: number, skip: boolean) {
  // Always start empty so server and client render the same initial markup —
  // `skip` depends on a browser media query and can't be known during SSR.
  const [output, setOutput] = useState("");

  useEffect(() => {
    if (skip) {
      const id = window.setTimeout(() => setOutput(text), 0);
      return () => window.clearTimeout(id);
    }
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setOutput(text.slice(0, i));
      if (i >= text.length) window.clearInterval(id);
    }, speed);
    return () => window.clearInterval(id);
  }, [text, speed, skip]);

  return output;
}

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const typed = useTypewriter(BOOT_LINE, 28, !!reduceMotion);
  const bootDone = typed.length === BOOT_LINE.length;

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 sm:px-10 lg:px-16"
    >
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 py-24 lg:grid-cols-[minmax(0,0.92fr)_minmax(26rem,1.08fr)]">
        <div>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-bg-elevated px-3 py-1 font-mono text-xs text-fg-muted">
            <span>$</span>
            <span>{typed}</span>
            {!bootDone && <span className="animate-pulse text-accent">|</span>}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={
              bootDone || reduceMotion
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 16 }
            }
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="mb-4 flex items-center gap-2 font-mono text-xs text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              request accepted
            </div>

            <p className="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-fg-muted">
              Production trace portfolio
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[0.95] tracking-tight text-fg sm:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-4 font-mono text-sm text-fg-muted sm:text-base">
              {profile.title}
            </p>
            <div className="mt-5 flex flex-wrap gap-2 font-mono text-xs">
              <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-accent">
                {profile.availability}
              </span>
              <span className="rounded-full border border-border bg-bg-elevated px-3 py-1 text-fg-muted">
                {profile.location}
              </span>
            </div>
            <p className="mt-7 max-w-2xl text-lg text-fg-muted sm:text-xl">
              {profile.oneLiner}
            </p>
            <p className="mt-4 max-w-2xl font-mono text-sm text-accent">
              {profile.focus}
            </p>

            <dl className="mt-8 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
              {proofPoints.map((point) => (
                <div
                  key={point.label}
                  className="rounded-lg border border-border bg-bg-elevated/80 p-3"
                >
                  <dt className="font-mono text-[11px] text-fg-muted">
                    {point.label}
                  </dt>
                  <dd className="mt-1 text-2xl font-semibold text-fg">
                    {point.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 flex flex-wrap items-center gap-4 font-mono text-sm">
              <a
                href={`mailto:${profile.email}`}
                className="rounded-md border border-accent/40 bg-accent/10 px-4 py-2 text-accent transition-colors hover:bg-accent/20"
              >
                Email Nebiyu
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-border px-4 py-2 text-fg-muted transition-colors hover:border-accent/50 hover:text-fg"
              >
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-border px-4 py-2 text-fg-muted transition-colors hover:border-accent/50 hover:text-fg"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={
            bootDone || reduceMotion
              ? { opacity: 1, scale: 1, y: 0 }
              : { opacity: 0, scale: 0.96, y: 20 }
          }
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
        >
          <RequestConstellation />
        </motion.div>
      </div>

      <div
        aria-hidden
        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[11px] text-fg-muted/60"
      >
        scroll to trace request ↓
      </div>
    </section>
  );
}
