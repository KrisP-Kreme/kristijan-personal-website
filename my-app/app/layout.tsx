import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavBar } from "./components/nav";
import { Footer } from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kristijan Popordanoski - Software Developer",
  description: "Kristijan Popordanoski portfolio and resume",
  icons: {
    icon: "/site_logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-foreground">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="bg-foreground min-h-screen flex flex-col">
          <NavBar />
          <main className="flex-auto min-w-0 mt-24 px-2 md:px-0">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
