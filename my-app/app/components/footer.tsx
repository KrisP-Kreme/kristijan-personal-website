import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-foreground/95 text-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p className="text-sm uppercase tracking-[0.35em] text-white/70">Kristijan Popordanoski</p>
          <p className="text-xs text-white/50">© 2026. All rights reserved.</p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/20263%20Kristijan%20Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10"
          >
            Resume
          </Link>
          <a
            href="https://github.com/KrisP-Kreme"
            target="_blank"
            rel="noopener noreferrer"
            className="text-background transition hover:text-neutral-300"
            aria-label="GitHub"
          >
            <FiGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/kristijanpopordanoski"
            target="_blank"
            rel="noopener noreferrer"
            className="text-background transition hover:text-neutral-300"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={20} />
          </a>
          <a
            href="mailto:kris.popor@gmail.com"
            className="text-background transition hover:text-neutral-300"
            aria-label="Email"
          >
            <FiMail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
