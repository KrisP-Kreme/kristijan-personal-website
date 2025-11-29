import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-foreground font-sans dark:bg-foreground">
        <section id="projects">
          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <h1 className="text-background max-w text-5xl font-bold">
              My projects
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-2 w-full">
              <Link href="/project1">
                <Card className="p-8 w-160 relative h-50 overflow-hidden rounded-none bg-transparent border-none p-0 group cursor-pointer">
                  <Image
                    src="/Openagr.png"
                    alt="Project"
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/80 transition duration-150" />

                  <div className="absolute opacity-0 bottom-0 left-0 p-4 text-white translate-y-4 transition duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    <h3 className="text-2xl font-bold">OpenAgar</h3>
                    <p className="opacity-90">Agar.io clone with bots</p>
                  </div>
                </Card>
              </Link>
              <Link href="/project1">
                <Card className="p-8 w-160 relative h-50 overflow-hidden rounded-none bg-transparent border-none p-0 group cursor-pointer">
                  <Image
                    src="/1200px-HK_Welcome_Image.png"
                    alt="Project"
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/70 transition duration-150" />

                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h3 className="text-2xl font-bold">Banking Application</h3>
                  </div>
                </Card>
              </Link>
              <Link href="/project1">
                <Card className="p-8 w-160 relative h-50 overflow-hidden rounded-none bg-transparent border-none p-0 group cursor-pointer">
                  <Image
                    src="/1200px-HK_Welcome_Image.png"
                    alt="Project"
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/70 transition duration-150" />

                  <div className="absolute opacity-0 bottom-16 left-38 p-4 text-white translate-y-4 transition duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    <h3 className="text-2xl font-bold">Email Generation Platform</h3>
                  </div>
                </Card>
              </Link>
              <Link href="/project1">
                <Card className="p-8 w-160 relative h-50 overflow-hidden rounded-none bg-transparent border-none p-0 group cursor-pointer">
                  <Image
                    src="/1200px-HK_Welcome_Image.png"
                    alt="Project"
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/70 transition duration-150" />

                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h3 className="text-2xl font-bold">Project 1</h3>
                    <p className="opacity-90">This is a card from shadcn</p>
                  </div>
                </Card>
              </Link>
            </div>
          </div>
        </section>
    </div>
  );
}
