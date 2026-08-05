"use client";

import { Mail } from "lucide-react";
import { GithubIcon } from "./icons/BrandIcons";

function WhatsappIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2.04C6.51 2.04 2.04 6.51 2.04 12S6.51 21.96 12 21.96c1.99 0 3.86-.62 5.42-1.68L22 22l-1.26-3.19A9.905 9.905 0 0021.96 12C21.96 6.51 17.49 2.04 12 2.04Z"
        fill="currentColor"
        fillOpacity="0.08"
      />
      <path
        d="M16.99 7.01c-.38-.37-.89-.58-1.42-.58-.53 0-1.04.21-1.42.58-.38.37-.59.88-.59 1.42 0 .53.21 1.04.59 1.42.38.37.89.58 1.42.58.53 0 1.04-.21 1.42-.58.38-.37.59-.88.59-1.42 0-.54-.21-1.05-.59-1.42ZM9.06 8.06c-.61 0-1.15.27-1.53.71-.39.44-.62 1.02-.62 1.64 0 .62.22 1.2.61 1.64.39.44.92.71 1.53.71.61 0 1.14-.27 1.53-.71.39-.44.61-1.02.61-1.64 0-.62-.22-1.2-.61-1.64-.39-.44-.92-.71-1.53-.71Zm7.9 5.94c-.06-.44-.37-1.14-.8-1.67-.44-.55-1-1.02-1.6-1.35-.6-.32-1.21-.43-1.82-.31-.1.02-.2.05-.31.12l-.91.56c-.3.18-.56.38-.8.58-.47.43-.86.95-1.16 1.5-.31.55-.53 1.14-.66 1.75-.16.78-.12 1.59.1 2.36.22.77.63 1.47 1.18 2.05.55.58 1.2 1.03 1.93 1.3.36.14.74.21 1.12.21.4 0 .8-.06 1.18-.18l.89-.32c.13-.04.25-.12.34-.21.09-.09.16-.2.19-.32l.41-1.52c.07-.24.02-.5-.13-.71l-.72-.96c-.13-.17-.3-.3-.5-.36l-1.02-.33c-.31-.1-.65-.02-.86.2l-.49.51c-.16.17-.4.23-.62.15l-.73-.27a.58.58 0 0 1-.34-.72l.25-.79c.07-.23.21-.44.4-.6.46-.36.92-.76 1.35-1.2.37-.38.82-.8 1.06-1.32.17-.33.18-.72.02-1.06l-.34-1.09c-.16-.51-.64-.8-1.17-.76-.53.04-1.02.28-1.36.68l-.08.1c-.22.28-.43.58-.62.88-.4.64-.77 1.32-1.08 1.99-.49 1.1-.69 2.29-.59 3.48.1 1.19.61 2.33 1.41 3.22.81.91 1.89 1.59 3.09 1.88 1.2.29 2.47.16 3.58-.36 1.05-.48 1.93-1.29 2.49-2.32.56-1.03.77-2.21.6-3.35a5.7 5.7 0 0 0-.64-1.87c-.23-.41-.55-.77-.95-1.03-.39-.26-.84-.4-1.29-.4-.38 0-.76.09-1.1.25l-.84.37c-.44.2-.91.03-1.18-.38Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-mono text-xs text-text-faint">
          <span className="node-dot" />
          Jean de Dieu KWIZERA — © {new Date().getFullYear()}
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => window.location.href = "mailto:kjado250@gmail.com"}
            title="Email kjado250@gmail.com"
            aria-label="Email"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg-panel text-text-muted transition duration-200 hover:border-gold/40 hover:bg-gold hover:text-ink-0"
          >
            <Mail size={16} />
          </button>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            aria-label="GitHub"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg-panel text-text-muted transition duration-200 hover:border-gold/40 hover:bg-gold hover:text-ink-0"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href="https://wa.me/250789759248"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            aria-label="WhatsApp"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg-panel text-text-muted transition duration-200 hover:border-gold/40 hover:bg-gold hover:text-ink-0"
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
