"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Cpu,
  ChevronDown,
  Wrench,
  Megaphone,
  Briefcase,
} from "lucide-react";
import SectionEyebrow from "./SectionEyebrow";
import AnimatedCounter from "./AnimatedCounter";
import { services } from "@/data/services";

const ICONS: Record<string, React.ReactNode> = {
  "virtual-assistance": <Briefcase size={20} />,
  "digital-operations": <Cpu size={20} />,
  "web-development": <Code2 size={20} />,
  "software-development": <Cpu size={20} />,
  "it-support": <Wrench size={20} />,
  "digital-marketing": <Megaphone size={20} />,
  "business-tech-consulting": <Briefcase size={20} />,
};

const STATS = [
  { to: 3, suffix: "+", label: "Client & personal projects shipped" },
  { to: 8, suffix: "", label: "Technologies used in production" },
  { to: 2, suffix: "+", label: "Years building software" },
  { to: 100, suffix: "%", label: "Commitment on every engagement" },
];

export default function Services() {
  const [isVirtualAssistantOpen, setIsVirtualAssistantOpen] = useState(false);

  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionEyebrow index="02" label="Services" />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl sm:text-4xl font-semibold text-balance max-w-2xl"
        >
          Where I plug into a business.
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-5 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="lg:col-span-1 rounded-2xl border border-border bg-bg-panel p-6 hover:border-gold/40 transition-colors"
            >
              {service.id === "virtual-assistance" ? (
                <button
                  type="button"
                  aria-expanded={isVirtualAssistantOpen}
                  onClick={() => setIsVirtualAssistantOpen((open) => !open)}
                  className="w-full text-left"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="h-10 w-10 rounded-full bg-bg-panel-2 flex items-center justify-center text-gold mb-5">
                      {ICONS[service.id]}
                    </div>
                    <ChevronDown
                      size={17}
                      className={`mt-2 text-text-muted transition-transform ${isVirtualAssistantOpen ? "rotate-180" : ""}`}
                    />
                  </div>
                  <h3 className="font-display font-semibold text-base mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {service.description}
                  </p>
                  {isVirtualAssistantOpen && (
                    <ul className="mt-4 space-y-2 border-t border-border pt-4 text-xs text-text-muted">
                      {[
                        "Email & Calendar Management",
                        "Online Research & Lead Generation",
                        "Data Entry, Excel & Google Sheets",
                        "Customer Support & CRM",
                        "Document & File Management",
                        "AI Tools & Workflow Automation",
                        "Travel Arrangements & Booking",
                        "Administrative Support",
                      ].map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="text-gold">+</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </button>
              ) : (
                <>
                  <div className="h-10 w-10 rounded-full bg-bg-panel-2 flex items-center justify-center text-gold mb-5">
                    {ICONS[service.id]}
                  </div>
                  <h3 className="font-display font-semibold text-base mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {service.description}
                  </p>
                </>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 rounded-2xl border border-border bg-bg-panel p-8 sm:p-10">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <div className="font-display text-3xl sm:text-4xl font-semibold text-gold">
                <AnimatedCounter to={stat.to} suffix={stat.suffix} />
              </div>
              <div className="mt-1.5 text-xs font-mono text-text-muted leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
