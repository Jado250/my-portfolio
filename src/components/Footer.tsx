"use client";

import { Mail } from "lucide-react";
import { GithubIcon, WhatsappIcon } from "./icons/BrandIcons";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-mono text-xs text-text-faint">
          <span className="node-dot" />
          Jean de Dieu KWIZERA | © {new Date().getFullYear()}
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => window.location.href = "mailto:kjado250@gmail.com"}
            title="Email kjado250@gmail.com"
            aria-label="Email"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg-panel text-text-muted transition duration-200 hover:border-gold/40 hover:bg-gold/10 hover:text-[#25D366]"
          >
            <Mail size={16} />
          </button>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            aria-label="GitHub"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg-panel text-text-muted transition duration-200 hover:border-gold/40 hover:bg-gold/10 hover:text-[#25D366]"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href="https://wa.me/250789759248"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            aria-label="WhatsApp"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg-panel text-text-muted transition duration-200 hover:border-gold/40 hover:bg-gold/10 hover:text-[#25D366]"
          >
            <WhatsappIcon size={16} />
          </a>
        </div>

        <div className="font-mono text-[11px] text-text-faint">
          Built with Next.js &amp; Tailwind CSS
        </div>
      </div>
    </footer>
  );
}
