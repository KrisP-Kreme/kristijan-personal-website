import Link from 'next/link'
import Image from "next/image";
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const navItems = {
    '/#about': {
        name: 'about',
    },
    '/#projects': {
        name: 'projects',
    },
    '/#experience': {
        name: 'experience',
    },
    '/#resume': {
        name: 'resume',
    }
}

export function NavBar() {
  return (
    <div className="w-full grid grid-cols-3 items-center px-6 fixed top-0">

      <nav className="flex space-x-4 px-6">
        {Object.entries(navItems).map(([path, { name }]) => (
          <Link
            key={path}
            href={path}
            className="text-background transition-all hover:text-neutral-500 dark:hover:text-neutral-200 py-1 px-2"
          >
            {name}
          </Link>
        ))}
      </nav>

      <div className="flex justify-center">
        <div className="relative w-32 h-10 sm:w-60 sm:h-12 md:w-80 md:h-14">
          <Link href="/">
            <Image
              src="/logo.gif"
              alt="Logo"
              fill
              className="object-cover"
            />
          </Link>
        </div>
      </div>

      <div className="flex justify-end space-x-4 px-20">
        <a
          href="https://github.com/KrisP-Kreme"
          target="_blank"
          rel="noopener noreferrer"
          className="text-background transition-all hover:text-neutral-500 dark:hover:text-neutral-200"
          aria-label="GitHub"
        >
          <FiGithub size={24} />
        </a>
        <a
          href="https://linkedin.com/in/kristijanpopordanoski"
          target="_blank"
          rel="noopener noreferrer"
          className="text-background transition-all hover:text-neutral-500 dark:hover:text-neutral-200"
          aria-label="LinkedIn"
        >
          <FiLinkedin size={24} />
        </a>
        <a
          href="mailto:kris.popor@gmail.com"
          className="text-background transition-all hover:text-neutral-500 dark:hover:text-neutral-200"
          aria-label="Email"
        >
          <FiMail size={24} />
        </a>
      </div>
    </div>
  );
}