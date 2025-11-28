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
                <Card className="p-8 w-140 rounded-none b-80 ease-in-out hover:brightness-12">
                  <CardHeader>
                    <CardTitle>Project</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>This is a card from shadcn</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/project2">
                <Card className="p-8 w-140 rounded-none b-80 ease-in-out hover:brightness-12">
                  <CardHeader>
                    <CardTitle>Project</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>This is a card from shadcn</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/project3">
                <Card className="p-8 w-140 rounded-none b-80 ease-in-out hover:brightness-12">
                  <CardHeader>
                    <CardTitle>Project</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>This is a card from shadcn</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/project4">
                <Card className="p-8 w-140 rounded-none b-80 ease-in-out hover:brightness-12">
                  <CardHeader>
                    <CardTitle>Project</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>This is a card from shadcn</p>
                  </CardContent>
                </Card>
              </Link> 
            </div>
          </div>
        </section>
    </div>
  );
}
