export default function BankingApplicationPage() {
  return (
    <div className="flex flex-col min-h-screen items-center py-40 justify-center bg-foreground font-sans dark:bg-foreground">

      <h1 className="text-background max-w text-3xl sm:text-5xl uppercase tracking-[0.15em] sm:tracking-[0.35em] mb-20">
        Banking Application
      </h1>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg">
        <div className="space-y-8 max-w-7xl w-full">  
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg">
            <div className="flex justify-between items-start mb-4">
              <div className="text-sm uppercase tracking-[0.35em] text-white/60">
                Full-stack Internet Banking system (customer + admin portals)
              </div>
              <div className="flex flex-col items-end gap-2">
                <p className="text-sm uppercase tracking-[0.35em] text-white/60">
                  Aug 2025 – Oct 2025
                </p>
              </div>
            </div>

            <div className="flex justify-between items-start">
              <h2 className="text-xl sm:text-3xl font-semibold text-white">
                ASP.NET Core MVC banking app with EF Core and REST APIs
              </h2>
                <a 
                href="https://github.com/KrisP-Kreme/banking-app"
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
              Developed a production-oriented Internet Banking application built with ASP.NET Core and EF Core (Code-First). The solution includes separate Customer and Admin portals, an Admin Web API, and a payment scheduler that persists across server restarts. Core features cover authentication, deposits, withdrawals, transfers, account statements and profile management.
            </p>

            <p className="mt-4 text-sm leading-7 text-white/70">
              The backend uses EF Core Code-First models and migrations for database generation, and data access is organized with the Repository pattern. External integrations include RESTful calls using System.Net.Http.HttpClient with strongly-typed JSON deserialization using generic helpers.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 text-sm text-white/75">
              <div>
                <p className="font-medium text-white">Key features</p>
                <ul className="mt-2 space-y-2 list-disc list-inside">
                  <li><strong>Authentication:</strong> login, logout and session management for customers.</li>
                  <li><strong>Accounts:</strong> view balances across accounts after login.</li>
                  <li><strong>Transactions:</strong> Deposit, Withdraw, Transfer with confirmation page.</li>
                  <li><strong>Statements:</strong> paged transaction history, 4 per page, sorted newest first.</li>
                  <li><strong>Profile:</strong> view and edit profile, change password separately.</li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-white">Backend & Admin</p>
                <ul className="mt-2 space-y-2 list-disc list-inside">
                  <li><strong>EF Core Code-First</strong>: Models, DbContext and Migrations included.</li>
                  <li><strong>BillPay Scheduler</strong>: persistent scheduled payments that survive server restarts.</li>
                  <li><strong>Admin portal</strong>: separate site for payee management and blocking scheduled payments.</li>
                  <li><strong>Admin API</strong>: Web API implemented with Repository pattern and documented endpoints.</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 text-sm text-white/70">
              <p className="font-medium text-white">Implementation notes</p>
              <ul className="mt-2 space-y-2 list-disc list-inside">
                <li>REST calls use <strong>HttpClient</strong> with generic JSON deserializers for type-safety.</li>
                <li>Server-side validation applied via data annotations on models; formatted display in tables.</li>
                <li>Transactions include ID, type, account, destination account, amount, timestamp (DD/MM/YYYY, h:mm AM/PM) and comment; displayed in a tabular, paged view.</li>
                <li>Scheduled payments are executed automatically and marked Blocked/Failed when appropriate; admins can block/unblock via the Admin portal.</li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
