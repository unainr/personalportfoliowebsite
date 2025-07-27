"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "./ui/modetoggle";
import Link from "next/link";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false)

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
			setIsOpen(false);
		}
	};

	  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

	return (
		<nav   className={`fixed top-0 z-50 w-full transition-all duration-200 ${
        isScrolled ? "bg-background/60 backdrop-blur-md" : ""
      }`}>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<div className="flex items-center">
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
					</div>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-8">
						<Link href={'/'}
							className="relative group text-gray-700  dark:text-white transition-all">
							Home
							<span className="absolute left-0 bottom-0.5 w-0 h-[2px] bg-[#CBACF9] transition-all duration-300 group-hover:w-full"></span>
						</Link>

						<button
							onClick={() => scrollToSection("about")}
							className="relative group text-gray-700 dark:text-white transition-all">
							About
							<span className="absolute left-0 bottom-0.5 w-0 h-[2px] bg-[#CBACF9] transition-all duration-300 group-hover:w-full"></span>
						</button>

						<button
							onClick={() => scrollToSection("projects")}
							className="relative group text-gray-700 dark:text-white transition-all">
							Projects
							<span className="absolute left-0 bottom-0.5 w-0 h-[2px] bg-[#CBACF9] transition-all duration-300 group-hover:w-full"></span>
						</button>

						<button
							onClick={() => scrollToSection("services")}
							className="relative group text-gray-700 dark:text-white transition-all">
							Services
							<span className="absolute left-0 bottom-0.5 w-0 h-[2px] bg-[#CBACF9] transition-all duration-300 group-hover:w-full"></span>
						</button>

						<button
							onClick={() => scrollToSection("contact")}
							className="relative group text-gray-700 dark:text-white transition-all">
							Contact
							<span className="absolute left-0 bottom-0.5 w-0 h-[2px] bg-[#CBACF9] transition-all duration-300 group-hover:w-full"></span>
						</button>

						<div className="flex items-center space-x-4">
							<ModeToggle />
						</div>
					</div>

					{/* Mobile Menu Button */}
					<div className="md:hidden">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none">
							{isOpen ? (
								<X className="h-6 w-6" />
							) : (
								<Menu className="h-6 w-6" />
							)}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			<div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
				<div className="px-2 pt-2 pb-3 space-y-1 bg-black/80 backdrop-blur-md">
					<button
						onClick={() => scrollToSection("home")}
						className="block w-full text-left px-3 py-2 rounded-md text-base font-medium">
						Home
					</button>
					<button
						onClick={() => scrollToSection("about")}
						className="block w-full text-left px-3 py-2 rounded-md text-base font-medium">
						About
					</button>
					<button
						onClick={() => scrollToSection("services")}
						className="block w-full text-left px-3 py-2 rounded-md text-base font-medium">
						Services
					</button>
					<button
						onClick={() => scrollToSection("contact")}
						className="block w-full text-left px-3 py-2 rounded-md text-base font-medium">
						Contact
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
