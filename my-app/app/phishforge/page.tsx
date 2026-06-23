export default function PhishForgePage() {

  

  return (
    <div className="flex flex-col min-h-screen items-center py-40 justify-center bg-foreground font-sans dark:bg-foreground">

      <h1 className="text-background max-w text-3xl sm:text-5xl uppercase tracking-[0.15em] sm:tracking-[0.35em] mb-20">
        Phish Forge
      </h1>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg">
        <div className="space-y-8 max-w-7xl w-full">  
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg">
            <div className="flex justify-between items-start mb-4">
              <div className="text-sm uppercase tracking-[0.35em] text-white/60">
                AI-powered OSINT system for security awareness testing
              </div>
              <div className="flex flex-col items-end gap-2">
                <p className="text-sm uppercase tracking-[0.35em] text-white/60">
                  Nov 2025 – Present
                </p>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <h2 className="text-xl sm:text-3xl font-semibold text-white">
                Web-based phishing simulation powered by LLM intelligence
              </h2>
                <a 
                href="https://github.com/KrisP-Kreme/Phish-Forge"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors flex-shrink-0 ml-4"
                title="View on GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
            <p className="mt-4 text-sm leading-7 text-white/70">
              Phish Forge is a web-based OSINT system designed to automate security awareness testing by analyzing web domains and generating realistic phishing simulations. The platform leverages LLM-driven intelligence gathering to identify legal entities, business partners, and technology stacks from open data sources, enabling organizations to test their security posture in realistic scenarios.
            </p>
            <p className="mt-4 text-sm leading-7 text-white/70">
              The system implements prompt pipelines that intelligently extract organizational data and relationships from various sources. This information is then used to craft authentic-looking phishing emails complete with extracted branding elements and design patterns from real websites. The core architecture uses React with the App Router, Tailwind CSS for styling, and tRPC to ensure type-safe API communication with the backend.
            </p>
            <p className="mt-4 text-sm leading-7 text-white/70">
              The application provides a three-step workflow for launching phishing campaigns. First, users select a target domain and the AI discovers potential partner organizations to simulate realistic attack vectors. Second, the system generates authentic phishing emails with real-time HTML and CSS extraction, ensuring brand-matched styling for maximum realism. Finally, campaigns are deployed to selected targets with real-time tracking of user engagement and automated notifications.
            </p>
            <p className="mt-4 text-sm leading-7 text-white/70">
              A key technical achievement is the automated generation of structured JSON from LLM outputs, which feeds into dynamic rendering engines supporting both LaTeX and HTML email views. This dual-format approach ensures compatibility across different email clients while maintaining visual fidelity. The application is deployed on Vercel with serverless functions handling the heavy lifting of domain analysis and email generation.
            </p>
            <p className="mt-4 text-sm leading-7 text-white/70">
              This project combines security, AI, and web development in a unique way. The challenge of accurately simulating real-world phishing attempts while maintaining ethical guidelines has been incredibly rewarding, and the ability to help organizations improve their security awareness through realistic testing makes this work particularly meaningful.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3 text-sm text-white/75">
              <div>
                <p className="font-medium text-white">Step 01: Choose Target</p>
                <ul className="mt-2 space-y-2 list-disc list-inside">
                  <li><strong>AI Partner Discovery</strong>: Identify organizations to simulate.</li>
                  <li><strong>Domain Analysis</strong>: Automated OSINT gathering.</li>
                  <li><strong>Target Selection</strong>: Intelligent pairing for realism.</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-white">Step 02: Craft Email</p>
                <ul className="mt-2 space-y-2 list-disc list-inside">
                  <li><strong>Real-time Extraction</strong>: HTML/CSS from target sites.</li>
                  <li><strong>Brand Matching</strong>: Authentic styling replicated.</li>
                  <li><strong>LLM Generation</strong>: Context-aware email content.</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-white">Step 03: Deploy Campaign</p>
                <ul className="mt-2 space-y-2 list-disc list-inside">
                  <li><strong>Campaign Deployment</strong>: Scheduled phishing launches.</li>
                  <li><strong>Click Tracking</strong>: Real-time engagement metrics.</li>
                  <li><strong>Auto-Notifications</strong>: User awareness reporting.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-black">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto"
            >
              <source src="/phishforge_vid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
