'use client';

import { useEffect, useRef, useState } from 'react';
import { FaReact, FaNode, FaPython } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss } from 'react-icons/si';

export function InteractiveCube() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [rot, setRot] = useState({ x: -20, y: 20 });
  const dragging = useRef(false);
  const lastPos = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    let mounted = true;
    const tick = () => {
      if (!mounted) return;
      if (!dragging.current) {
        setRot((r) => ({ x: r.x + 0.05, y: r.y + 0.4 }));
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      mounted = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    const onUp = () => (dragging.current = false);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchend', onUp);
    return () => {
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchend', onUp);
    };
  }, []);

  const onPointerDown = (e: React.MouseEvent | React.TouchEvent) => {
    dragging.current = true;
    const point = 'touches' in e ? e.touches[0] : (e as React.MouseEvent);
    lastPos.current = { x: point.clientX, y: point.clientY } as any;
  };

  const onPointerMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!dragging.current) return;
    const point = 'touches' in e ? e.touches[0] : (e as React.MouseEvent);
    const dx = point.clientX - lastPos.current.x;
    const dy = point.clientY - lastPos.current.y;
    lastPos.current = { x: point.clientX, y: point.clientY } as any;
    setRot((r) => ({ x: r.x + dy * 0.3, y: r.y + dx * 0.3 }));
  };

  return (
    <div className="my-12 flex justify-center">
      <style>{`
        .cube-scene { perspective: 900px; }
        .cube { width: 220px; height: 220px; position: relative; transform-style: preserve-3d; transition: transform 120ms linear; }
        .cube-face { position: absolute; width: 200px; height: 200px; left: 10px; top: 10px; display:flex; align-items:center; justify-content:center; border-radius:12px; color: white; font-weight:700; }
        /* Brand-colored faces */
        .face-front  { transform: translateZ(110px); background: #61DAFB; }
        .face-back   { transform: rotateY(180deg) translateZ(110px); background: #000000; }
        .face-right  { transform: rotateY(90deg) translateZ(110px); background: #06B6D4; }
        .face-left   { transform: rotateY(-90deg) translateZ(110px); background: #43853D; }
        .face-top    { transform: rotateX(90deg) translateZ(110px); background: #3178C6; }
        .face-bottom { transform: rotateX(-90deg) translateZ(110px); background: #3776AB; }
        .cube-shadow { position:absolute; left:50%; top:240px; width:260px; height:30px; transform:translateX(-50%); background: radial-gradient(closest-side, rgba(0,0,0,0.45), transparent); filter: blur(12px); opacity:0.6 }
      `}</style>

      <div
        className="cube-scene"
        ref={containerRef}
        onMouseDown={onPointerDown}
        onMouseMove={onPointerMove}
        onTouchStart={onPointerDown}
        onTouchMove={onPointerMove}
      >
        <div className="cube" style={{ transform: `rotateX(${rot.x}deg) rotateY(${rot.y}deg)` }}>
          <div className="cube-face face-front" aria-label="React logo" title="React">
            <FaReact size={56} color="#0f172a" />
          </div>
          <div className="cube-face face-back" aria-label="Next.js logo" title="Next.js">
            <SiNextdotjs size={52} color="#ffffff" />
          </div>
          <div className="cube-face face-right" aria-label="Tailwind CSS logo" title="Tailwind CSS">
            <SiTailwindcss size={52} color="#ffffff" />
          </div>
          <div className="cube-face face-left" aria-label="Node.js logo" title="Node.js">
            <FaNode size={56} color="#ffffff" />
          </div>
          <div className="cube-face face-top" aria-label="TypeScript logo" title="TypeScript">
            <SiTypescript size={56} color="#ffffff" />
          </div>
          <div className="cube-face face-bottom" aria-label="Python logo" title="Python">
            <FaPython size={56} color="#ffffff" />
          </div>
        </div>
        <div className="cube-shadow" />
      </div>
    </div>
  );
}
