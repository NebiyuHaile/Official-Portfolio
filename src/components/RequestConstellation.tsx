"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { systemNodes, type SystemNode } from "@/lib/content";

const links = [
  ["identity", "realtime"],
  ["realtime", "routing"],
  ["identity", "database"],
  ["database", "research"],
  ["routing", "research"],
] as const;

const toneClass: Record<SystemNode["tone"], string> = {
  green: "text-accent border-accent/40 bg-accent/10",
  blue: "text-signal-blue border-signal-blue/40 bg-signal-blue/10",
  amber: "text-signal-amber border-signal-amber/40 bg-signal-amber/10",
};

function nodeById(id: string) {
  return systemNodes.find((node) => node.id === id) ?? systemNodes[0];
}

export default function RequestConstellation() {
  const [activeId, setActiveId] = useState(systemNodes[0].id);
  const reduceMotion = useReducedMotion();
  const activeNode = nodeById(activeId);

  return (
    <div className="request-console" aria-label="Interactive request trace map">
      <div className="request-console__header">
        <span className="request-console__eyebrow">LIVE TRACE</span>
        <span className="request-console__status">request_id: nebiyu-prod-01</span>
      </div>

      <div className="request-map">
        <svg
          aria-hidden="true"
          className="request-map__lines"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {links.map(([from, to], index) => {
            const a = nodeById(from);
            const b = nodeById(to);
            return (
              <motion.line
                key={`${from}-${to}`}
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.7 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.9,
                  delay: reduceMotion ? 0 : 0.25 + index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            );
          })}
        </svg>

        {!reduceMotion && (
          <div aria-hidden className="request-packet">
            <span />
            <span />
            <span />
          </div>
        )}

        {systemNodes.map((node, index) => (
          <motion.button
            key={node.id}
            type="button"
            className={`request-node ${toneClass[node.tone]} ${
              activeId === node.id ? "request-node--active" : ""
            }`}
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
            onMouseEnter={() => setActiveId(node.id)}
            onFocus={() => setActiveId(node.id)}
            onClick={() => setActiveId(node.id)}
            initial={{ opacity: 0, scale: 0.82 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: reduceMotion ? 0 : 0.55,
              delay: reduceMotion ? 0 : 0.55 + index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            aria-pressed={activeId === node.id}
          >
            <span className="request-node__pulse" />
            <span className="request-node__label">{node.label}</span>
            <span className="request-node__metric">{node.metric}</span>
          </motion.button>
        ))}
      </div>

      <motion.div
        key={activeNode.id}
        className="request-inspector"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.28, ease: "easeOut" }}
      >
        <div>
          <span className="request-inspector__label">{activeNode.route}</span>
          <h2>{activeNode.label}</h2>
        </div>
        <p>{activeNode.detail}</p>
      </motion.div>
    </div>
  );
}
