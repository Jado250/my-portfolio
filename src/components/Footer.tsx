import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-mono text-xs text-text-faint">
          <span className="node-dot" />
          Jean de Dieu KWIZERA — © {new Date().getFullYear()}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="mailto:kjado250@gmail.com"
            data-cursor-hover
            aria-label="Email"
            className="text-text-muted hover:text-gold transition-colors"
          >
            <Mail size={16} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            aria-label="GitHub"
            className="text-text-muted hover:text-gold transition-colors"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            aria-label="LinkedIn"
            className="text-text-muted hover:text-gold transition-colors"
          >
            <LinkedinIcon size={16} />
          </a>
        </div>

        <div className="font-mono text-[11px] text-text-faint">
          Built with Next.js &amp; Tailwind CSS
        </div>
      </div>
    </footer>
  );
}
