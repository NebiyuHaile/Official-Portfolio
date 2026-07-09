"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/lib/content";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const activeProject = projects[activeIndex];

  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16"
    >
      <Reveal>
        <SectionHeading index="03" title="Systems Dossiers" />
        <p className="mb-10 -mt-6 max-w-2xl font-mono text-xs leading-6 text-fg-muted">
          I do not want the work to sit in normal cards. Each project opens like
          a production case file: what I owned, what could break, and what I
          built to make the system hold.
        </p>
      </Reveal>

      <Reveal>
        <div className="project-lab">
          <div className="project-lab__rail" aria-label="Select project dossier">
            {projects.map((project, index) => (
              <button
                id={project.id}
                key={project.id}
                type="button"
                className={`project-tab ${
                  activeIndex === index ? "project-tab--active" : ""
                }`}
                onClick={() => setActiveIndex(index)}
                aria-pressed={activeIndex === index}
              >
                <span>{project.service}</span>
                <strong>{project.name}</strong>
                <small>{project.attr}</small>
              </button>
            ))}
          </div>

          <motion.article
            key={activeProject.id}
            className="project-dossier"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="project-dossier__header">
              <div>
                <p className="project-dossier__eyebrow">
                  active dossier · {activeProject.service}
                </p>
                <h3>{activeProject.name}</h3>
              </div>
              <a href={activeProject.link} target="_blank" rel="noreferrer">
                inspect codebase
              </a>
            </div>

            <p className="project-dossier__description">
              {activeProject.description}
            </p>

            <div className="project-dossier__grid">
              <div className="project-dossier__panel project-dossier__panel--large">
                <span>what I owned</span>
                <p>{activeProject.role}</p>
              </div>
              <div className="project-dossier__panel">
                <span>failure mode</span>
                <p>{activeProject.risk}</p>
              </div>
              <div className="project-dossier__panel">
                <span>proof</span>
                <p>{activeProject.proof}</p>
              </div>
            </div>

            <div className="project-architecture">
              <div className="project-architecture__path" aria-hidden="true">
                {activeProject.architecture.map((step, index) => (
                  <motion.div
                    key={step}
                    className="project-architecture__node"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.35,
                      delay: reduceMotion ? 0 : index * 0.06,
                    }}
                  >
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{step}</strong>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="project-dossier__footer">
              <p>{activeProject.impact}</p>
              <div>
                {activeProject.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          </motion.article>
        </div>
      </Reveal>
    </section>
  );
}
