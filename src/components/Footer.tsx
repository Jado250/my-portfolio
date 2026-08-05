"use client";

import { Mail } from "lucide-react";
import { GithubIcon } from "./icons/BrandIcons";

function WhatsappIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2.002C6.063 2.002 1.5 6.566 1.5 12.547c0 2.162.68 4.16 1.853 5.82L1.5 22.5l4.499-1.226c1.56.904 3.284 1.388 5.037 1.388 5.977 0 10.54-4.564 10.54-10.546S18.016 2.002 12.04 2.002Zm5.902 14.552a8.117 8.117 0 0 1-5.38 2.334c-1.426 0-2.824-.374-4.045-1.085l-.289-.168-2.668.726.713-2.603-.187-.297A8.082 8.082 0 0 1 4.13 10.56c0-4.47 3.64-8.1 8.341-8.1 4.602 0 8.34 3.628 8.34 8.1 0 2.166-.846 4.2-2.3 5.682Zm-3.164-1.803c-.15-.074-.886-.437-1.02-.486-.134-.05-.232-.074-.33.075-.098.15-.38.486-.466.586-.086.099-.172.111-.322.037-.15-.074-.635-.236-1.21-.737-.45-.397-.753-.886-.84-1.035-.088-.149-.01-.229.066-.303.067-.066.15-.175.225-.262.074-.088.1-.149.15-.248.05-.099.025-.186-.012-.26-.037-.074-.332-.797-.455-1.095-.123-.298-.25-.258-.348-.264-.098-.012-.212-.012-.325-.012-.112 0-.262.037-.4.186-.137.149-.518.517-.518 1.257 0 .74.53 1.457.604 1.56.074.099 1.012 1.544 2.748 2.238 1.33.559 1.481.569 1.986.475.505-.093 1.61-.658 1.842-1.294.233-.637.233-1.184.163-1.3-.07-.118-.256-.186-.406-.26Zm1.321-2.295c-.038-.063-.138-.098-.288-.174-.15-.075-.887-.436-1.024-.486-.138-.05-.238-.074-.34.074-.102.149-.385.487-.472.586-.088.1-.175.111-.325.037-.15-.074-.64-.236-1.255-.737-.524-.442-.878-.986-.98-1.135-.103-.15-.011-.231.075-.304.077-.066.157-.173.235-.262.078-.088.1-.148.15-.247.05-.099.025-.186-.013-.26-.037-.075-.335-.803-.46-1.102-.125-.299-.256-.29-.35-.295-.092-.01-.207-.01-.319-.01-.112 0-.262.037-.4.186-.14.148-.523.515-.523 1.256 0 .74.53 1.457.603 1.56.072.1 1.01 1.544 2.747 2.239 1.33.558 1.484.569 1.99.475.506-.093 1.611-.658 1.844-1.294.234-.637.234-1.185.165-1.302-.072-.118-.258-.186-.408-.26Zm0 0" />
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
            className="text-text-muted hover:text-gold transition-colors cursor-pointer"
          >
            <Mail size={16} />
          </button>
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
            href="https://wa.me/250789759248"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            aria-label="WhatsApp"
            className="text-[#25D366] hover:text-[#128C7E] transition-colors"
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
