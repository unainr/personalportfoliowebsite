"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowUp } from "lucide-react";
import { BsWhatsapp, BsGithub, BsLinkedin, BsTwitter, BsInstagram } from "react-icons/bs";
import { useEffect, useState } from "react";

export function Footer() {
	const [showScrollButton, setShowScrollButton] = useState(false);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	useEffect(() => {
		const handleScroll = () => {
			setShowScrollButton(window.scrollY > 300);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			<footer className="bg-black/20 backdrop-blur-lg border-t border-gray-800">
				<div className="max-w-7xl mx-auto px-6 py-12">
					<div className="flex flex-col md:flex-row justify-between items-center gap-8">
						<Link href="/" className="text-2xl font-bold">
							<span className="font-black flex items-center gap-1">
								<span className=" dark:text-gray-500">{"</>"}</span>
								<span>
									<span className="text-gray-900 dark:text-white">Port</span>
									<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#CBACF9] to-[#B794F4]">
										folio
									</span>
								</span>
							</span>
						</Link>

						<div className="flex items-center gap-6">
							<Link
								href="https://github.com/unainr"
								target="_blank"
								className="text-gray-400 hover:text-[#CBACF9] transition-colors">
								<BsGithub className="text-2xl" />
							</Link>
							<Link
								href="https://www.linkedin.com/in/muhammad-unain7/"
								target="_blank"
								className="text-gray-400 hover:text-[#CBACF9] transition-colors">
								<BsLinkedin className="text-2xl" />
							</Link>
							<Link
								href="https://www.instagram.com/un_r_7/"
								target="_blank"
								className="text-gray-400 hover:text-[#CBACF9] transition-colors">
								<BsInstagram className="text-2xl" />
							</Link>
						</div>

						<p className="text-gray-400 text-sm">© 2025 All rights reserved</p>
					</div>
				</div>
			</footer>

			<Link
				href="https://wa.me/+923089469544"
				target="_blank"
				className="fixed bottom-8 left-8 z-50 bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300">
				<BsWhatsapp className="text-white text-3xl" />
			</Link>

			<button
				onClick={scrollToTop}
				className={`fixed bottom-8 right-8 z-50 bg-[#CBACF9] p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300 ${
					showScrollButton ? "opacity-100 visible" : "opacity-0 invisible"
				}`}>
				<ArrowUp className="text-white text-2xl" />
			</button>
		</>
	);
}
