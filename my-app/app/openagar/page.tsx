export default function OpenAgarPage() {

  

  return (
    <div className="flex flex-col min-h-screen items-center py-40 justify-center bg-foreground font-sans dark:bg-foreground">

      <h1 className="text-background max-w text-3xl sm:text-5xl uppercase tracking-[0.15em] sm:tracking-[0.35em] mb-20">
        OpenAgar
      </h1>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg">
        <div className="space-y-8 max-w-7xl w-full">  
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg">
            <div className="flex justify-between items-start mb-4">
              <div className="text-sm uppercase tracking-[0.35em] text-white/60">
                Bot implementation for a web-based multiplayer game
              </div>
              <div className="flex flex-col items-end gap-2">
                <p className="text-sm uppercase tracking-[0.35em] text-white/60">
                  Mar 2025 – Aug 2025
                </p>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <h2 className="text-xl sm:text-3xl font-semibold text-white">
                Rule-based bots designed with a finite state machine model
              </h2>
              <a 
                href="https://github.com/KrisP-Kreme/OpenAgar-GOVLab-RMIT"
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
              During the first half of 2025, I worked on an internship project for a client which involved extending a clone of the popular game Agar.io with AI-controlled bots, titled <strong>OpenAgar</strong>. The goal was to create bots that could interact with human players in a believable way, using a rule-based system to govern their behavior. This would allow the game to be played, even when there were no other human players online.
            </p>
            <p className="mt-4 text-sm leading-7 text-white/70">
              I built the bot AI using an FSM model where each bot can only be in one state at a time and reacts to the game environment based on certain events. I chose this approach after researching alternative algorithms, and the design is based on a state diagram with clearly defined transitions and triggers.
            </p>
            <p className="mt-4 text-sm leading-7 text-white/70">
              The bot starts in Eating state, consuming food cells in its vicinity. If a smaller enemy is detected nearby, it transitions to Attack. In this state, the bot will pursue and attempt to consume the smaller enemy. It can also split its mass in two and launch the other half as a projectile. If a larger enemy appears, it switches to Fleeing, attempting to outrun it. When the bot is eliminated, it moves to Dead, ceasing all activity.
            </p>
            <p className="mt-4 text-sm leading-7 text-white/70">
              The implementation handles events like SmallerEnemyInRange and LargerEnemyInRange to decide the next state. This makes bots behave consistently and adds believable multiplayer interactions.
            </p>
            <p className="mt-4 text-sm leading-7 text-white/70">
              Overall, this project was super fun and a great learning experience in game AI design. Starting was the hardest part, as it always is. Getting familiar with a new codebase and figuring out how to implement a whole different system was daunting, but extremely rewarding. 
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 text-sm text-white/75">
              <div>
                <p className="font-medium text-white">FSM states</p>
                <ul className="mt-2 space-y-2 list-disc list-inside">
                  <li><strong>Eating</strong>: collect food and grow until a target appears.</li>
                  <li><strong>Attack</strong>: chase smaller enemies and try to consume them.</li>
                  <li><strong>Fleeing</strong>: retreat when a larger threat is nearby.</li>
                  <li><strong>Dead</strong>: stop acting after elimination.</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-white">Transition logic</p>
                <ul className="mt-2 space-y-2 list-disc list-inside">
                  <li><strong>Eating → Attack</strong>: SmallerEnemyInRange event triggers an aggressive switch.</li>
                  <li><strong>Eating/Attack → Fleeing</strong>: LargerEnemyInRange causes both states to retreat.</li>
                  <li><strong>Any state → Dead</strong>: The bot enters Dead when it is eliminated.</li>
                  <li><strong>Fleeing → Eating</strong>: Return to food collection when the threat is gone.</li>
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
              <source src="/openagar_vid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
