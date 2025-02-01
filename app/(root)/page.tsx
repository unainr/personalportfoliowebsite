import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { AuroraBackgroundDemo } from "@/components/AuroraBackgroundDemo";
import { PROJECT_FETCH_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import Experience from "@/components/Experience";
import { Button } from "@/components/ui/MovingBorder";
import { AnimatedTestimonialsDemo } from "@/components/TestimonialsSection";
import ContactForm from "@/components/ContactForm";
import { AboutSection } from "@/components/About";
import Link from "next/link";
export default async function Home() {
	const projects = await client.fetch(PROJECT_FETCH_QUERY);
	return (
		<>
			<AuroraBackgroundDemo />
			<AboutSection />

			{projects?.length > 0 ? (
				<section className="py-20">
					<div className="max-w-6xl mx-auto px-8">
						<div className="text-center mb-16">
							<div>
								<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
									Featured
									<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#CBACF9] to-[#B794F4]">
										{" "}
										Projects
									</span>
								</h2>
							</div>

							<p className="text-gray-400 max-w-2xl mx-auto">
								Explore some of my recent work showcasing web development
								expertise across different industries and technologies.
							</p>
						</div>

						<div
							id="portfolio"
							className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
							{projects.slice(0, 6).map((project: any) => (
								<ProjectsSection key={project._id} project={project} />
							))}
						</div>

						<div className="text-center mt-12">
							<Link href="/project">
								<Button
									className="bg-gradient-to-r from-[#CBACF9] to-[#B794F4]  px-8 py-3 rounded-full 
    transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-medium
    hover:from-[#B794F4] hover:to-[#CBACF9]">
									View All Projects
								</Button>
							</Link>
						</div>
					</div>
				</section>
			) : (
				<div className="min-h-[200px] flex items-center justify-center">
					<p className="text-gray-400 text-lg font-medium">No Projects Found</p>
				</div>
			)}

			<SkillsSection />
			<Experience />
			<AnimatedTestimonialsDemo />
			<ContactForm />
		</>
	);
}

export const revalidate = 60;