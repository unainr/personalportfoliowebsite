"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";
import { ContainerTextFlip } from "./ui/container-text-flip";

export function SpotlightNewDemo() {
  return (
    <div className="h-screen w-full rounded-md flex flex-col items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight />
      <div className="px-4 max-w-7xl mx-auto relative z-10 w-full text-center">
        <h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Raza
        </h1>
        
        <div className="mt-2 md:mt-4 flex flex-col md:flex-row items-center justify-center gap-2">
          <p className="text-xl md:text-2xl font-medium text-neutral-300">I build with</p>
          <ContainerTextFlip
            words={["Next.js", "React", "MongoDB", "Prisma", "Tailwind"]}
            className="text-xl md:text-2xl font-bold text-blue-400"
          />
        </div>
        
        <p className="mt-6 font-normal text-base md:text-lg text-neutral-300 max-w-2xl mx-auto">
          Full-stack developer specializing in modern web technologies including
          Next.js, React, MongoDB, Prisma, and Postframe.
        </p>
        
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <span className="px-3 py-1 bg-neutral-800/80 rounded-full text-sm font-medium text-blue-300 border border-blue-900/50">Next.js</span>
          <span className="px-3 py-1 bg-neutral-800/80 rounded-full text-sm font-medium text-blue-400 border border-blue-900/50">React</span>
          <span className="px-3 py-1 bg-neutral-800/80 rounded-full text-sm font-medium text-green-300 border border-green-900/50">MongoDB</span>
          <span className="px-3 py-1 bg-neutral-800/80 rounded-full text-sm font-medium text-purple-300 border border-purple-900/50">Postframe</span>
          <span className="px-3 py-1 bg-neutral-800/80 rounded-full text-sm font-medium text-pink-300 border border-pink-900/50">Prisma</span>
          <span className="px-3 py-1 bg-neutral-800/80 rounded-full text-sm font-medium text-teal-300 border border-teal-900/50">Tailwind CSS</span>
          <span className="px-3 py-1 bg-neutral-800/80 rounded-full text-sm font-medium text-yellow-300 border border-yellow-900/50">TypeScript</span>
        </div>
        
        <div className="mt-12 flex flex-col md:flex-row gap-4 justify-center">
          <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg text-white font-medium hover:from-blue-500 hover:to-blue-700 transition-all shadow-lg shadow-blue-900/20">
            View Projects
          </button>
          <button className="px-6 py-3 bg-transparent rounded-lg text-white font-medium border border-blue-700 hover:bg-blue-900/20 transition-all">
            Contact Me
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <div className="animate-bounce bg-white/10 p-2 w-10 h-10 ring-1 ring-white/20 shadow-lg rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-blue-400" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}