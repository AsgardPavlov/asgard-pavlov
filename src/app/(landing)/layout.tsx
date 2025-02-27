import Navbar from "@/components/navbar";
import {cn} from "@/lib/utils";
import Particles from "@/components/particles";
import React from "react";

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={cn(
        "min-h-svh",
        "overflow-hidden",
        "dark:bg-gradient-to-tl dark:from-black dark:via-zinc-600/20 dark:to-black"
      )}
    >
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />

      <Navbar/>

      <main
        className="max-w-2xl mx-auto py-12 sm:py-40 px-6 space-y-10"
      >
        {children}
      </main>
    </div>
);
}
