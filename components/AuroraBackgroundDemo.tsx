"use client";

import React from "react";
import {
	FaReact,
	FaNodeJs,
	FaLaravel,
	FaWordpress,
	FaFigma,
} from "react-icons/fa";
import {
	SiNextdotjs,
	SiTailwindcss,
	SiSupabase,
	SiPrisma,
	SiAppwrite,
} from "react-icons/si";
import { motion } from "framer-motion";
import { AuroraBackground } from "./ui/aurora-background";
import Link from "next/link";
import { Button } from "./ui/MovingBorder";

export function AuroraBackgroundDemo() {
	const skills = [
		{ Icon: FaReact, name: "React.js", color: "#61DAFB" },
		{ Icon: SiNextdotjs, name: "Next.js", color: "#ffff" },
		{ Icon: FaNodeJs, name: "Node.js", color: "#339933" },
		{ Icon: FaLaravel, name: "Laravel", color: "#FF2D20" },
		{ Icon: SiSupabase, name: "Supabase", color: "#3FCF8E" },
		{ Icon: SiPrisma, name: "Prisma", color: "#0C344B" },
		{ Icon: SiTailwindcss, name: "Tailwind CSS", color: "#38B2AC" },
		{ Icon: FaWordpress, name: "WordPress", color: "#21759B" },
		{ Icon: FaFigma, name: "Figma", color: "#F24E1E" },
		{ Icon: SiAppwrite, name: "Appwrite", color: "#F02E65" },
	];

	return (
		<AuroraBackground>
			<div  id="home" className="min-h-screen flex items-center justify-center py-20 px-4">
				<div
					
					className="max-w-7xl mx-auto text-center space-y-12">
					<div className="space-y-6">
						<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
							<span className="dark:text-white">Full Stack</span>{" "}
							<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#CBACF9] to-[#B794F4] animate-gradient">
								Web Developer
							</span>
						</h1>

						<p className="font-light text-base sm:text-lg dark:text-white leading-relaxed tracking-wide max-w-3xl mx-auto">
							I specialize in building modern, scalable, and efficient web
							applications using cutting-edge technologies. My expertise spans
							both front-end and back-end development, focusing on React,
							Next.js, Laravel, and Node.js. I create intuitive user interfaces
							with Tailwind CSS and integrate powerful backend solutions using
							Appwrite, Prisma, and Supabase. Whether it's an e-commerce
							platform, a dynamic web app, or a CMS-powered site, I turn ideas
							into seamless digital experiences.
						</p>
					</div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5, duration: 0.8 }}
						className="hidden sm:grid grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-x-8 gap-y-6 max-w-5xl mx-auto">
						{skills.map(({ Icon, name, color }, index) => (
							<motion.div
								key={index}
								whileHover={{ scale: 1.1, y: -5 }}
								className="flex flex-col items-center p-2 rounded-lg transition-all duration-300 dark:text-white hover:shadow-lg hover:shadow-[#CBACF9]/20">
								<Icon
									className="text-3xl sm:text-4xl lg:text-5xl"
									style={{ color }}
								/>
								<p className="font-medium text-xs sm:text-sm mt-2">{name}</p>
							</motion.div>
						))}
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.7, duration: 0.8 }}
						className="flex flex-wrap justify-center gap-4 pt-6">
						<Link href="/project">
							<Button
								className="bg-gradient-to-r from-[#64557b] to-[#B794F4] text-white  uppercase
                px-8 py-4 rounded-full shadow-lg transition-all duration-300
                hover:shadow-[#CBACF9]/50 hover:scale-105 hover:from-[#B794F4] hover:to-[#CBACF9]">
								Explore My Work
							</Button>
						</Link>

						<Link href={"/resume.pdf"} target="_blank">
							<Button
								className="bg-transparent border-2 border-[#CBACF9] text-[#CBACF9]
                uppercase px-8 py-4 rounded-full shadow-lg
                transition-all duration-300 hover:bg-[#CBACF9]/10 hover:scale-105
                hover:shadow-[#CBACF9]/25">
								Download CV
							</Button>
						</Link>
					</motion.div>
				</div>
			</div>
		</AuroraBackground>
	);
}
