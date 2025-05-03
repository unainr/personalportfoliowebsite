"use client";

import React from "react";
import { GradientHeading } from "@/components/testing/gradient-heading";
import { LogoCarousel } from "@/components/testing/logo-carousel";
import { allLogos } from "@/lib";
import Link from "next/link";


export function LogoCarouselDemo() {
  return (
    <div className="space-y-8 py-24">
      <div className="mx-auto flex w-full max-w-screen-lg flex-col items-center space-y-8">
        <div className="text-center">
        <GradientHeading size={'xs'} variant="secondary">
  Passionate minds build the future
</GradientHeading>
<Link href="/project">
  <GradientHeading size="xl">Explore <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#CBACF9] to-[#B794F4] animate-gradient">
					My Work
				</span></GradientHeading>
</Link>

        </div>

        <LogoCarousel columnCount={3} logos={allLogos} /> 
      </div>
    </div>
  );
}
