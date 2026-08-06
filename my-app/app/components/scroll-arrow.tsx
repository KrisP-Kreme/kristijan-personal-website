'use client';

import { ChevronDown } from "lucide-react";

interface ScrollArrowProps {
  targetId?: string;
  ariaLabel?: string;
  className?: string;
}

export function ScrollArrow({ targetId = "about", ariaLabel = "Scroll down", className = "" }: ScrollArrowProps) {
  const handleClick = () => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(0.5rem); }
        }
        .animate-bounce-custom {
          animation: bounce 2s infinite;
        }
      `}</style>
      <div className={`my-12 flex justify-center ${className}`}>
        <button
          onClick={handleClick}
          className="text-background hover:text-neutral-400 transition-colors cursor-pointer"
          aria-label={ariaLabel}
        >
          <ChevronDown size="2.5rem" className="animate-bounce-custom" />
        </button>
      </div>
    </>
  );
}
