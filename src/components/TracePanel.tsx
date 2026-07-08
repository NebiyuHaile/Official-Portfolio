"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { traceSpans, type TraceSpan } from "@/lib/content";

type RangeMap = Record<string, [number, number]>;

function defaultRanges(): RangeMap {
  return Object.fromEntries(traceSpans.map((s) => [s.id, s.range]));
}

// Measures each span's real DOM element so the trace maps to actual content
// height instead of guessed fractions. A span is "in flight" from just
// before its element enters the viewport to the moment it fully scrolls
// past — so the bar fills for roughly as long as that content is on screen.
function measureRanges(): RangeMap {
  const doc = document.documentElement;
  const viewportHeight = window.innerHeight;
  const maxScroll = Math.max(1, doc.scrollHeight - viewportHeight);
  const ranges: RangeMap = {};

  for (const span of traceSpans) {
    const el = document.getElementById(span.id);
    if (!el) {
      ranges[span.id] = span.range;
      continue;
    }
    const top = el.getBoundingClientRect().top + window.scrollY;
    const bottom = top + el.offsetHeight;
    const startPx = Math.min(Math.max(top - viewportHeight, 0), maxScroll);
    const endPx = Math.min(Math.max(bottom, 0), maxScroll);
    ranges[span.id] = [startPx / maxScroll, Math.max(endPx / maxScroll, startPx / maxScroll + 0.001)];
  }

  return ranges;
}

function useMeasuredRanges(): RangeMap {
  const [ranges, setRanges] = useState<RangeMap>(defaultRanges);

  useEffect(() => {
    const recalc = () => setRanges(measureRanges());
    recalc();
    const settle = window.setTimeout(recalc, 200);

    let resizeTimer: number;
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(recalc, 150);
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("load", recalc);

    return () => {
      window.clearTimeout(settle);
      window.clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("load", recalc);
    };
  }, []);

  return ranges;
}

function groupSpans(spans: TraceSpan[]): TraceSpan[][] {
  const seen = new Set<string>();
  const rows: TraceSpan[][] = [];
  for (const span of spans) {
    if (seen.has(span.id)) continue;
    if (span.lane !== undefined) {
      const group = spans.filter(
        (s) =>
          s.lane !== undefined &&
          s.range[0] === span.range[0] &&
          s.range[1] === span.range[1]
      );
      group.forEach((g) => seen.add(g.id));
      rows.push(group.sort((a, b) => (a.lane ?? 0) - (b.lane ?? 0)));
    } else {
      seen.add(span.id);
      rows.push([span]);
    }
  }
  return rows;
}

function SpanRow({
  progress,
  span,
  range,
  nested,
}: {
  progress: MotionValue<number>;
  span: TraceSpan;
  range: [number, number];
  nested?: boolean;
}) {
  const [start, end] = range;
  const width = useTransform(progress, [start, end], ["0%", "100%"]);
  const barOpacity = useTransform(
    progress,
    [Math.max(0, start - 0.03), start],
    [0.35, 1]
  );
  const attrOpacity = useTransform(
    progress,
    [start + (end - start) * 0.55, end],
    [0, 1]
  );

  return (
    <div className={nested ? "border-border/60 border-l pl-3" : ""}>
      <div className="flex items-center justify-between gap-2 text-[11px] text-fg-muted">
        <span className="truncate">{span.service}</span>
        <motion.span
          style={{ opacity: attrOpacity }}
          className="whitespace-nowrap text-accent"
        >
          {span.attr}
        </motion.span>
      </div>
      <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-border/70">
        <motion.div
          style={{ width, opacity: barOpacity }}
          className="h-full rounded-full bg-accent"
        />
      </div>
    </div>
  );
}

export default function TracePanel() {
  const { scrollYProgress } = useScroll();
  const [elapsed, setElapsed] = useState("0.00s");
  const [done, setDone] = useState(false);
  const ranges = useMeasuredRanges();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setElapsed(`${(latest * 2.4).toFixed(2)}s`);
    setDone(latest >= 0.985);
  });

  const rows = groupSpans(traceSpans);

  return (
    <aside
      aria-hidden="true"
      className="fixed top-1/2 right-6 z-40 hidden w-72 -translate-y-1/2 flex-col gap-3 rounded-lg border border-border bg-bg-elevated/90 p-4 font-mono shadow-2xl shadow-black/40 backdrop-blur-sm lg:flex"
    >
      <div className="flex items-center justify-between border-b border-border pb-2">
        <div className="flex items-center gap-2">
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-accent"
            animate={{ opacity: [1, 0.35, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="text-[11px] tracking-wide text-fg-muted">
            TRACE nebiyu.dev
          </span>
        </div>
        <span className="text-[11px] text-fg-muted">{elapsed}</span>
      </div>

      <div className="flex max-h-[55vh] flex-col gap-2.5 overflow-hidden">
        {rows.map((row, i) =>
          row.length > 1 ? (
            <div key={i} className="flex flex-col gap-2">
              <span className="text-[10px] tracking-wider text-fg-muted/70 uppercase">
                fan-out · parallel
              </span>
              {row.map((span) => (
                <SpanRow
                  key={span.id}
                  progress={scrollYProgress}
                  span={span}
                  range={ranges[span.id] ?? span.range}
                  nested
                />
              ))}
            </div>
          ) : (
            <SpanRow
              key={row[0].id}
              progress={scrollYProgress}
              span={row[0]}
              range={ranges[row[0].id] ?? row[0].range}
            />
          )
        )}
      </div>

      <div className="flex items-center justify-between border-t border-border pt-2 text-[11px]">
        <span className="text-fg-muted">root: GET /</span>
        <span className={done ? "text-accent" : "text-fg-muted"}>
          {done ? "200 OK" : "…"}
        </span>
      </div>
    </aside>
  );
}
