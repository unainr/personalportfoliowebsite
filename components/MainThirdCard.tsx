"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
interface Project {
	name: string;
	description: string;
	images: string[];
	projectLink: string;
}

export function ThreeDCardDemo({ project }: { project: Project }) {
	const { name, description, images, projectLink } = project;

	return (
		<CardContainer className="inter-var">
			<CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-6 border flex flex-col justify-between">
				{/* Project Name */}
				<CardItem
					translateZ="50"
					className="text-xl font-bold text-neutral-600 dark:text-white">
					{name.length > 25 ? `${name.substring(0, 25)}...` : name}
				</CardItem>

				{/* Project Description */}
				<CardItem
					as="p"
					translateZ="60"
					className="text-neutral-500 text-sm mt-2 dark:text-neutral-300 flex-grow">
					{description.length > 120
						? `${description.substring(0, 120)}...`
						: description}
				</CardItem>

				{/* Project Image (Fixed Aspect Ratio) */}
				<CardItem translateZ="100" className="w-full mt-4">
					<div className="h-[250px] w-full relative overflow-hidden rounded-xl">
						<Image
							src={images[0]}
							layout="fill" // Ensures the image fully covers the container
							objectFit="cover" // Keeps the image aspect ratio while covering
							className="rounded-xl group-hover/card:shadow-xl"
							alt="thumbnail"
						/>
					</div>
				</CardItem>

				{/* Buttons */}

				<div className="flex justify-between items-center mt-6">
					<CardItem
						translateZ={20}
						as={Link}
						href={projectLink}
						target="__blank"
						className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white flex items-center gap-2">
						Live Preview <ExternalLink size={14} />
					</CardItem>
				</div>
			</CardBody>
		</CardContainer>
	);
}
