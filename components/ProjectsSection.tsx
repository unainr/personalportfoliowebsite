"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { Button } from "./ui/MovingBorder";
import Link from "next/link";

interface Project {
	name: string;
	description: string;
	images: string[];
	projectLink: string;
}

export function ProjectsSection({ project }: { project: Project }) {
	const { name, description, images, projectLink } = project;

	return (
		<div id="projects"
			className="group relative  rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
			<div className="relative h-56 overflow-hidden">
				<Image
					src={images[0]}
					alt={name}
					fill
					className="object-cover group-hover:scale-110 transition-transform duration-500"
					quality={90}
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
			</div>

			<div className="p-6 relative">
				<h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-purple-400 bg-clip-text text-transparent">
					{name}
				</h3>
				<p className=" mb-4 line-clamp-3">{description}</p>
				<Link href={projectLink} target="_blank" rel="noopener noreferrer">
					<Button
						className="bg-gradient-to-r from-[#6a5983] to-[#7f5db8] text-white px-6 py-2
   
   ">
						View Project
					</Button>
				</Link>
			</div>
		</div>
	);
}
