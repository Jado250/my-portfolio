"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionEyebrow from "./SectionEyebrow";
import { projects, projectCategories, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

export default function Projects() {
  const [filter, setFilter] = useState<(typeof projectCategories)[number]>(
    "All"
  );

  const filtered = useMemo<Project[]>(
    () =>
      filter === "All"
        ? projects
        : projects.filter((p) => p.category === filter),
    [filter]
  );

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionEyebrow index="03" label="Selected Work" />

        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl sm:text-4xl font-semibold text-balance max-w-xl"
          >
            Systems built for real problems.
          </motion.h2>

          <div
            role="tablist"
            aria-label="Filter projects by category"
            className="flex flex-wrap gap-2 font-mono text-xs"
          >
            {projectCategories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={filter === cat}
                onClick={() => setFilter(cat)}
                data-cursor-hover
                className={cn(
                  "px-4 py-2 rounded-full border transition-colors",
                  filter === cat
                    ? "border-gold bg-gold text-ink-0"
                    : "border-border text-text-muted hover:text-text"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <LayoutGroup>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group relative rounded-2xl border border-border bg-bg-panel p-6 sm:p-7 flex flex-col overflow-hidden"
                >
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gold/5 group-hover:bg-gold/10 transition-colors" />

                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-signal border border-signal/30 rounded-full px-2.5 py-1">
                      {project.category}
                    </span>
                    <span className="font-mono text-[11px] text-text-faint">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed mb-3">
                    {project.description}
                  </p>
                  <p className="text-xs text-text-faint leading-relaxed mb-6">
                    <span className="text-gold font-mono">Problem: </span>
                    {project.problem}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-1.5 mb-5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono rounded-full bg-bg-panel-2 px-2.5 py-1 text-text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    data-cursor-hover
                    onClick={() =>
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-text group-hover:text-gold transition-colors self-start"
                  >
                    Discuss a similar build
                    <ArrowUpRight
                      size={15}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </button>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </LayoutGroup>
      </div>
    </section>
  );
}
