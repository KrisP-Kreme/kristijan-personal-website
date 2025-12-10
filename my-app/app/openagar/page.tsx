"use client";

import { useState, useEffect } from "react";

export default function OpenAgarPage() {

  const [started, setStarted] = useState(false);

  async function startBots() {
    await fetch("/api/start-bots", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ count: 6 }),
    });

    setStarted(true);
  }

    useEffect(() => {
      const stopBots = () => {
        navigator.sendBeacon("/api/stop-bots");
      };

      window.addEventListener("pagehide", stopBots);
      window.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "hidden") stopBots();
      });

      return () => {
        stopBots();
        window.removeEventListener("pagehide", stopBots);
      };
    }, []);


  return (
    <div className="flex flex-col min-h-screen items-center py-50 justify-center bg-foreground font-sans dark:bg-foreground">

      <h1 className="text-background max-w text-5xl font-bold mb-10">
        OpenAgar Project Page
      </h1>

      <div className="relative max-w-3xl w-full bg-background/10 p-6 rounded-lg shadow-lg">
        {!started && (
          <div className="absolute inset-0 bg-black/70 z-20 flex justify-center items-center">
            <button
              onClick={startBots}
              className="bg-blue-600 text-white px-8 py-4 rounded text-xl hover:bg-blue-700"
            >
              Start Bots & Play
            </button>
          </div>
        )}

        <section id="agar-section">

          <iframe
            id="openagar-frame"
            src="https://keen-radiance-production.up.railway.app"
            width="100%"
            height="900"
            className="rounded"
            style={{ border: "none" }}
          ></iframe>

        </section>
      </div>
    </div>
  );
}
