"use client";
import React from "react";
import {
	motion,
	useScroll,
	useTransform,
	useSpring,
	MotionValue,
} from "motion/react";
import Link from "next/link";
import { Button } from "../ui/MovingBorder";

export const HeroParallax = ({
	products,
}: {
	products: {
		title: string;
		link: string;
		thumbnail: string;
	}[];
}) => {
	const firstRow = products.slice(0, 5);
	const secondRow = products.slice(5, 10);
	const thirdRow = products.slice(10, 15);
	const ref = React.useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});

	const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

	const translateX = useSpring(
		useTransform(scrollYProgress, [0, 1], [0, 1000]),
		springConfig
	);
	const translateXReverse = useSpring(
		useTransform(scrollYProgress, [0, 1], [0, -1000]),
		springConfig
	);
	const rotateX = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [15, 0]),
		springConfig
	);
	const opacity = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
		springConfig
	);
	const rotateZ = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [20, 0]),
		springConfig
	);
	const translateY = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
		springConfig
	);
	return (
		<div
			ref={ref}
			className="h-[400vh] py-16 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]">
			<Header />
			<motion.div
				style={{
					rotateX,
					rotateZ,
					translateY,
					opacity,
				}}
				className="">
				<motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
					{firstRow.map((product) => (
						<ProductCard
							product={product}
							translate={translateX}
							key={product.title}
						/>
					))}
				</motion.div>
				<motion.div className="flex flex-row  mb-20 space-x-20 ">
					{secondRow.map((product) => (
						<ProductCard
							product={product}
							translate={translateXReverse}
							key={product.title}
						/>
					))}
				</motion.div>
				<motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
					{thirdRow.map((product) => (
						<ProductCard
							product={product}
							translate={translateX}
							key={product.title}
						/>
					))}
				</motion.div>
			</motion.div>
		</div>
	);
};

export const Header = () => {
	return (
		<div className="max-w-7xl  relative mx-auto py-10 md:py-20  px-4 w-full  left-0 top-0">
			<h1 className="text-2xl md:text-6xl font-bold dark:text-white">
				Full Stack{" "}
				<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#CBACF9] to-[#B794F4] animate-gradient">
					Web Developer
				</span>
			</h1>
			<p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
				I build modern, scalable web applications using React, Next.js,
				Express.js, Laravel, and Node.js. With a focus on clean UI and efficient
				backends, I specialize in Tailwind CSS, Appwrite, Prisma, Drizzle, and
				Supabase. From E-commerce platforms to CMS-driven sites, I deliver
				seamless digital experiences
			</p>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.7, duration: 0.8 }}
				className="flex flex-wrap justify-start gap-4 pt-6">
				<Link href="/project">
					<Button
						className="bg-gradient-to-r z-10 from-[#64557b] to-[#B794F4] text-white  uppercase
                            px-8 py-4 rounded-full shadow-lg transition-all duration-300
                            hover:shadow-[#CBACF9]/50 hover:scale-105 hover:from-[#B794F4] hover:to-[#CBACF9]">
						Explore My Work
					</Button>
				</Link>

				<Link href={"/resumem.pdf"} target="_blank">
					<Button
						className="bg-transparent z-10 border-2 border-[#CBACF9] text-[#CBACF9]
                            uppercase px-8 py-4 rounded-full shadow-lg
                            transition-all duration-300 hover:bg-[#CBACF9]/10 hover:scale-105
                            hover:shadow-[#CBACF9]/25">
						Download CV
					</Button>
				</Link>
			</motion.div>
		</div>
	);
};

export const ProductCard = ({
	product,
	translate,
}: {
	product: {
		title: string;
		link: string;
		thumbnail: string;
	};
	translate: MotionValue<number>;
}) => {
	return (
		<motion.div
			style={{
				x: translate,
			}}
			whileHover={{
				y: -20,
			}}
			key={product.title}
			className="group/product h-96 w-[30rem] relative shrink-0">
			<a href={product.link} className="block group-hover/product:shadow-2xl ">
				<img
					src={product.thumbnail}
					height="600"
					width="600"
					className="object-cover object-left-top absolute h-full w-full inset-0"
					alt={product.title}
				/>
			</a>
			<div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
			<h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
				{product.title}
			</h2>
		</motion.div>
	);
};
