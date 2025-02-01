"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = ` I specialize in crafting fast, responsive websites and exploring how AI can shape the future of technology.`;

export function TextGenerateEffectDemo() {
  return (
<div className="relative min-h-screen flex items-center justify-center px-8 ">
      {/* Background Grid */}
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 gap-1 opacity-10" aria-hidden="true">
        {[...Array(144)].map((_, i) => (
          <div key={i} className=" from-transparent to-violet-500" />
        ))}
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 max-w-6xl mx-auto">
        {/* Avatar Section - Left Side */}
        <div className="lg:mt-4">
          <Image
            src="/dark.jpg"
            alt="Avatar"
            className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-3 border-purple-600 shadow-lg hover:border-purple-400 transition-colors"
            width={112}
            height={112}
          />
        </div>

        {/* Content Section - Right Side */}
        <div className="flex-1 space-y-6">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Full Stack Developer
              <span className="block text-purple-400 mt-1">Web Solutions Architect</span>
            </h1>
            <div className="mt-4 text-base md:text-lg text-gray-300">
              <TextGenerateEffect words={words} />
            </div>
          </div>

          {/* Skills Section */}
          <div className="flex flex-wrap gap-2">
            {[
              'Laravel',
              'PHP',
              'WordPress',
              'Next.js',
              'Tailwind CSS',
              'JavaScript',
              'TypeScript'
            ].map((skill) => (
              <span key={skill} className="bg-purple-900/30 text-purple-200 px-3 py-1 rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/Resume.pdf"
              download
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition-all shadow-md inline-block font-medium text-sm"
            >
              Download CV
            </Link>
            <Button className="border-2 border-purple-600 hover:bg-purple-600 hover:text-white px-6 py-2 rounded-full transition-all shadow-md font-medium text-sm">
              View Projects
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-2">
            [Your existing social media links]
          </div>
        </div>
      </div>
    </div>
  );
}
