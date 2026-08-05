"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BOOT_LINES = [
  "booting kernel",
  "mounting /skills",
  "linking frontend <-> backend",
  "connecting database",
  "compiling projects",
  "system ready",
];

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("booted")) {
      // Skip the boot animation on repeat visits within the same tab session.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(false);
      return;
    }

    const start = Date.now();
    const duration = 1800;
    let raf: number;

    const tick = () => {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);
      setLineIndex(
        Math.min(
          BOOT_LINES.length - 1,
          Math.floor((pct / 100) * BOOT_LINES.length)
        )
      );
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setVisible(false);
          sessionStorage.setItem("booted", "1");
        }, 350);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="status"
          aria-label="Loading site"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--ink-0)] text-[#eceee7]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
        >
          <div className="w-[280px] sm:w-[340px] font-mono text-xs">
            <div className="flex items-center gap-2 mb-6">
              <span className="node-dot" />
              <span className="tracking-[0.25em] text-[10px] text-[#9aa2ae]">
                JDK / SYSTEM BOOT
              </span>
            </div>

            <div className="space-y-1.5 h-[132px]">
              {BOOT_LINES.slice(0, lineIndex + 1).map((line, i) => (
                <div key={line} className="flex items-center gap-2 text-[#9aa2ae]">
                  <span className="text-[var(--gold)]">
                    {i === lineIndex && progress < 100 ? ">" : "✓"}
                  </span>
                  <span>{line}</span>
                </div>
              ))}
            </div>

            <div className="mt-5 h-[2px] w-full bg-[#1e2530] overflow-hidden rounded-full">
              <motion.div
                className="h-full bg-gradient-to-r from-[var(--gold)] to-[var(--signal)]"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="mt-2 flex justify-between text-[10px] text-[#616b78]">
              <span>KWIZERA.SYS</span>
              <span>{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
