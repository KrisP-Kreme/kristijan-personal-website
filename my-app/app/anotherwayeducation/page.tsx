export default function AnotherWayEducationPage() {
  return (
    <div className="flex flex-col min-h-screen items-center py-40 justify-center bg-foreground font-sans dark:bg-foreground">

      <h1 className="text-background max-w text-3xl sm:text-5xl uppercase tracking-[0.15em] sm:tracking-[0.35em] mb-20">
        AnotherWayEducation
      </h1>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg">
        <div className="space-y-8 max-w-7xl w-full">  
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg">
            <div className="flex justify-between items-start mb-4">
              <div className="text-sm uppercase tracking-[0.35em] text-white/60">
                WordPress website built for a life coaching and education agency
              </div>
              <div className="flex flex-col items-end gap-2">
                <p className="text-sm uppercase tracking-[0.35em] text-white/60">
                  Dec 2025 – Feb 2026
                </p>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <h2 className="text-xl sm:text-3xl font-semibold text-white">
                A polished WordPress site with plugin-driven content and bookings
              </h2>
              <a
                href="https://www.anotherwayeducation.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors flex-shrink-0 ml-4"
                title="Visit site"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 3h7v7m0-7L10 14" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21H3V3h9" />
                </svg>
              </a>
            </div>
            <p className="mt-4 text-sm leading-7 text-white/70">
              AnotherWayEducation is a WordPress site for a coaching agency focused on connecting people with psychological and counselling support. The build emphasises easy content management, a fully-featured blog, an integrated book shop with direct buy links, and a counselling booking workflow so users can request appointments with qualified practitioners.
            </p>
            <p className="mt-4 text-sm leading-7 text-white/70">
              I integrated a set of reliable plugins to provide contact forms, e-commerce links for recommended books, and a booking system for counselling sessions. The site maintains a clean visual presentation and straightforward admin experience so the client can update content and manage bookings without developer support.
            </p>
            <p className="mt-4 text-sm leading-7 text-white/70">
              The site features a full blog for publishing wellbeing content, a book shop with direct Amazon links for easy access to recommended titles, and a counselling booking section designed to help users get psychological support from qualified coaches.
            </p>
            <p className="mt-4 text-sm leading-7 text-white/70">
              The build includes attention to responsive layout, plugin compatibility, and content workflows, ensuring the site performs well across devices and keeps the focus on the coaching brand. The site was designed to support long-term growth and simple maintenance while delivering an accessible experience for prospective clients.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 text-sm text-white/75">
              <div>
                <p className="font-medium text-white">Key highlights</p>
                <ul className="mt-2 space-y-2 list-disc list-inside">
                  <li><strong>Blog & book shop</strong>: publishing and Amazon-linked purchase paths.</li>
                  <li><strong>Plugin-driven UX</strong>: forms, scheduling, and client outreach tools.</li>
                  <li><strong>Responsive design</strong>: polished presentation across desktop and mobile.</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-white">Project details</p>
                <ul className="mt-2 space-y-2 list-disc list-inside">
                  <li><strong>Content management</strong>: easy updates for coaching programs and resources.</li>
                  <li><strong>Client handoff</strong>: reliable site setup for long-term maintenance.</li>
                  <li><strong>Counselling booking</strong>: workflow for user support and appointment requests.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-black">
            <div className="relative w-full h-156 bg-slate-950">
              <iframe
                src="https://www.anotherwayeducation.org/"
                title="AnotherWayEducation live preview"
                className="h-full w-full border-none"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
