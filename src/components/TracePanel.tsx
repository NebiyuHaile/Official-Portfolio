"use client";

import { useMemo, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { traceSpans, type TraceSpan } from "@/lib/content";

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

function findActiveSpan(progress: number) {
  return (
    traceSpans.find(
      (span) => progress >= span.range[0] && progress <= span.range[1]
    ) ?? traceSpans[traceSpans.length - 1]
  );
}

function SpanRow({
  progress,
  span,
  nested,
  active,
}: {
  progress: MotionValue<number>;
  span: TraceSpan;
  nested?: boolean;
  active: boolean;
}) {
  const [start, end] = span.range;
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
    <div
      className={`trace-row ${nested ? "trace-row--nested" : ""} ${
        active ? "trace-row--active" : ""
      }`}
    >
      <div className="trace-row__meta">
        <span className="trace-row__service">{span.service}</span>
        <motion.span
          style={{ opacity: attrOpacity }}
          className="trace-row__attr"
        >
          {span.attr}
        </motion.span>
      </div>
      <div className="trace-row__bar">
        <motion.div
          style={{ width, opacity: barOpacity }}
          className="trace-row__fill"
        />
      </div>
      <div className="trace-row__label">{span.label}</div>
    </div>
  );
}

export default function TracePanel() {
  const { scrollYProgress } = useScroll();
  const [elapsed, setElapsed] = useState("0.00s");
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const totalProgress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setProgress(latest);
    setElapsed(`${(latest * 2.4).toFixed(2)}s`);
    setDone(latest >= 0.985);
  });

  const rows = useMemo(() => groupSpans(traceSpans), []);
  const activeSpan = findActiveSpan(progress);
  const completedCount = traceSpans.filter(
    (span) => progress > span.range[1]
  ).length;

  return (
    <aside
      aria-hidden="true"
      className="trace-panel"
    >
      <div className="trace-panel__header">
        <div>
          <span className="trace-panel__kicker">LIVE REQUEST TRACE</span>
          <strong>nebiyu.dev</strong>
        </div>
        <div className="trace-panel__clock">
          <motion.span
            className="trace-panel__pulse"
            animate={{ opacity: [1, 0.35, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
          <span>{elapsed}</span>
        </div>
      </div>

      <div className="trace-panel__summary">
        <div>
          <span>active span</span>
          <strong>{activeSpan.service}</strong>
        </div>
        <div>
          <span>completed</span>
          <strong>
            {completedCount}/{traceSpans.length}
          </strong>
        </div>
        <div>
          <span>status</span>
          <strong className={done ? "text-accent" : ""}>
            {done ? "200 OK" : "streaming"}
          </strong>
        </div>
      </div>

      <div className="trace-panel__global">
        <motion.div style={{ width: totalProgress }} />
      </div>

      <div className="trace-panel__rows">
        {rows.map((row, i) =>
          row.length > 1 ? (
            <div key={i} className="trace-fanout">
              <span className="trace-fanout__label">
                fan-out · parallel
              </span>
              {row.map((span) => (
                <SpanRow
                  key={span.id}
                  progress={scrollYProgress}
                  span={span}
                  nested
                  active={activeSpan.id === span.id}
                />
              ))}
            </div>
          ) : (
            <SpanRow
              key={row[0].id}
              progress={scrollYProgress}
              span={row[0]}
              active={activeSpan.id === row[0].id}
            />
          )
        )}
      </div>

      <div className="trace-panel__footer">
        <span>root: GET /</span>
        <span>{activeSpan.label}</span>
      </div>
    </aside>
  );
}
