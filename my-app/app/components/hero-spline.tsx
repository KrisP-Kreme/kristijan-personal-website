'use client';

import React from 'react';

type Props = {
  // Spline embed URL (copy from Spline share > Embed > iframe src)
  src?: string;
  height?: number;
};

export function HeroSpline({ src = '', height = 520 }: Props) {
  return (
    <div className="my-20 w-full flex justify-center items-center">
      <div className="relative w-full max-w-3xl h-auto flex items-center justify-center">
        {src ? (
          <iframe
            title="Spline scene"
            src={src}
            style={{ width: '100%', height, border: 'none' }}
            allowFullScreen
          />
        ) : (
          <div className="w-full h-52 flex flex-col items-center justify-center border-2 border-dashed border-background/20 rounded-md p-6">
            <p className="text-background mb-2">Spline scene not configured.</p>
            <p className="text-background text-sm opacity-70 text-center">To try Spline, paste your Spline embed `src` into <code className="bg-black/20 px-1 rounded">app/components/hero-spline.tsx</code> or pass it as a prop to <code className="bg-black/20 px-1 rounded">&lt;HeroSpline src="..." /&gt;</code>.</p>
          </div>
        )}
      </div>
    </div>
  );
}
