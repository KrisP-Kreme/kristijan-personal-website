import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <section id="projects">
          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <h1 className="max-w text-5xl font-bold">
              My projects
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-2 w-full">
              <Link href="/project1">
                <Card className="p-8 w-160 relative h-50 overflow-hidden rounded-none group cursor-pointer">
                  <Image
                    src="/1200px-HK_Welcome_Image.png"
                    alt="Project"
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/80 transition duration-500" />

                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h3 className="text-2xl font-bold">OpenAgar</h3>
                  </div>
                </Card>
              </Link>
              <Link href="/project1">
                <Card className="p-8 w-160 relative h-50 overflow-hidden rounded-none group cursor-pointer">
                  <Image
                    src="/1200px-HK_Welcome_Image.png"
                    alt="Project"
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/80 transition duration-500" />

                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h3 className="text-2xl font-bold">Banking Application</h3>
                  </div>
                </Card>
              </Link>
              <Link href="/project1">
                <Card className="p-8 w-160 relative h-50 overflow-hidden rounded-none group cursor-pointer">
                  <Image
                    src="/1200px-HK_Welcome_Image.png"
                    alt="Project"
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/80 transition duration-500" />

                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h3 className="text-2xl font-bold">Email Generation Platform</h3>
                  </div>
                </Card>
              </Link>
              <Link href="/project1">
                <Card className="p-8 w-160 relative h-50 overflow-hidden rounded-none group cursor-pointer">
                  <Image
                    src="/1200px-HK_Welcome_Image.png"
                    alt="Project"
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/80 transition duration-500" />

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
