

export default function OpenAgar() {
    return (
        <div className="flex flex-col min-h-screen items-center py-50 justify-center bg-foreground font-sans dark:bg-foreground">


            <h1 className="text-background max-w text-5xl font-bold mb-10">
                OpenAgar Project Page
            </h1>

            <div className="max-w-3xl w-full bg-background/10 p-6 rounded-lg shadow-lg">

            <h2 className="text-3xl font-semibold text-background mb-4">OpenAgar</h2>
            <img src="/agartest4.png" alt="OpenAgar Screenshot" className="w-full h-auto mb-4 rounded" />
            <p className="text-background mb-4">
                OpenAgar is an Agar.io clone developed in Python, featuring AI-controlled bots that simulate real player behavior. The project showcases skills in game development, AI programming, and network communication.
            </p>
            <h3 className="text-2xl font-semibold text-background mb-2">Features</h3>
            <ul className="list-disc list-inside text-background mb-4">
                <li>Multiplayer gameplay with AI bots</li>
                <li>Realistic bot behavior mimicking human players</li>
                <li>Customizable game settings</li>
            </ul>
            <h3 className="text-2xl font-semibold text-background mb-2">Technologies Used</h3>
            <ul className="list-disc list-inside text-background mb-4">
                <li>Python</li>
                <li>Pygame for graphics rendering</li>
                <li>Socket programming for network communication</li>
            </ul>
            <h3 className="text-2xl font-semibold text-background mb-2">Project Link</h3>
            <a href="https://github.com/yourusername/openagar" className="text-blue-500 hover:underline">
                GitHub Repository
            </a>
            </div>
        </div>
    );
}

