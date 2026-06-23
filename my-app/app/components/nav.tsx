'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiGithub, FiLinkedin, FiMail, FiMenu, FiX } from 'react-icons/fi';

const navItems = [
  { href: '/#about', name: 'about' },
  { href: '/#projects', name: 'projects' },
  { href: '/#experience', name: 'experience' },
  { href: '/20263%20Kristijan%20Resume.pdf', name: 'resume', external: true },
];

export function NavBar() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <header className="w-full fixed top-0 z-50 border-b border-white/10 bg-foreground/95 backdrop-blur-xl">
      <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            className="flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-background transition hover:bg-white/10 md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          <nav className="hidden md:flex items-center gap-4">
            {navItems.map(({ href, name, external }) => (
              <Link
                key={href}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="text-background transition hover:text-neutral-500 dark:hover:text-neutral-200 py-1 px-2"
              >
                {name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block">
          <div className="relative w-36 h-12 sm:w-44 sm:h-14">
            <Link href="/" className="pointer-events-auto block">
              <Image src="/logo.gif" alt="Logo" fill className="object-contain" />
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-end gap-4">
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://github.com/KrisP-Kreme"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background transition hover:text-neutral-500 dark:hover:text-neutral-200"
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/kristijanpopordanoski"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background transition hover:text-neutral-500 dark:hover:text-neutral-200"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href="mailto:kris.popor@gmail.com"
              className="text-background transition hover:text-neutral-500 dark:hover:text-neutral-200"
              aria-label="Email"
            >
              <FiMail size={20} />
            </a>
          </div>
        </div>
      </div>

      {menuOpen ? (
        <div className="border-t border-white/10 bg-foreground/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-3 px-4 py-4">
            {navItems.map(({ href, name, external }) => (
              <Link
                key={href}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl px-4 py-3 text-white transition hover:bg-white/5"
              >
                {name}
              </Link>
            ))}

            <div className="mt-3 flex items-center gap-4 border-t border-white/10 pt-4">
              <a
                href="https://github.com/KrisP-Kreme"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background transition hover:text-neutral-500"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/kristijanpopordanoski"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background transition hover:text-neutral-500"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href="mailto:kris.popor@gmail.com"
                className="text-background transition hover:text-neutral-500"
                aria-label="Email"
              >
                <FiMail size={20} />
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
