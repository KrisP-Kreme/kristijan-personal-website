'use client';

import { FaReact, FaNode, FaPython, FaJava, FaDocker, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiCplusplus, SiDotnet, SiSharp, SiJavascript, SiHtml5 } from 'react-icons/si';

const techs = [
  { icon: FaJava, label: 'Java', color: '#007396', delay: 0 },
  { icon: FaPython, label: 'Python', color: '#3776AB', delay: 0.1 },
  { icon: SiSharp, label: 'C#', color: '#239120', delay: 0.2 },
  { icon: SiCplusplus, label: 'C++', color: '#00599C', delay: 0.3 },
  { icon: FaDatabase, label: 'SQL', color: '#CC2927', delay: 0.4 },
  { icon: SiHtml5, label: 'HTML/CSS', color: '#E34C26', delay: 0.5 },
  { icon: SiJavascript, label: 'JavaScript', color: '#F7DF1E', delay: 0.6 },
  { icon: SiTypescript, label: 'TypeScript', color: '#3178C6', delay: 0.7 },
  { icon: FaReact, label: 'React', color: '#61DAFB', delay: 0.8 },
  { icon: SiDotnet, label: '.NET', color: '#512BD4', delay: 0.9 },
  { icon: FaNode, label: 'Node.js', color: '#68A063', delay: 1.0 },
  { icon: FaDocker, label: 'Docker', color: '#2496ED', delay: 1.1 },
];

export function TechStack() {
  return (
    <div className="my-16 w-full">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
      
      <div className="flex flex-wrap justify-center gap-6 items-center px-40">
        {techs.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <div
              key={tech.label}
              className="float-animation"
              style={{
                animationDelay: `${tech.delay}s`,
              }}
            >
              <div className="flex flex-col items-center gap-2 group cursor-pointer">
                <div className="p-4 rounded-lg bg-neutral-800/50 group-hover:bg-neutral-700 transition-all duration-300 transform group-hover:scale-110">
                  <Icon size={32} color={tech.color} />
                </div>
                <p className="text-background text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  {tech.label}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

