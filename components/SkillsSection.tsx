"use client";
import { motion } from "framer-motion";
import { IconCode, IconDatabase, IconTools } from "@tabler/icons-react";

const skillCategories = [
	{
		title: "Backend Development",
		icon: (
			<IconDatabase className="w-10 h-10 text-[#CBACF9] group-hover:text-[#B794F4]" />
		),
		skills: [
			{ name: "Laravel", level: 90, color: "from-[#CBACF9] to-[#B794F4]" },
			{ name: "Appwrite", level: 78, color: "from-[#B794F4] to-[#A785ED]" },
			{
				name: "MySQL/PostgreSQL",
				level: 85,
				color: "from-[#CBACF9] to-[#A785ED]",
			},
			{
				name: "Node.js/Express",
				level: 80,
				color: "from-[#B794F4] to-[#CBACF9]",
			},
			{ name: "RESTful/", level: 85, color: "from-[#CBACF9] to-[#B794F4]" },
		],
	},
	{
		title: "Frontend Development",
		icon: (
			<IconCode className="w-10 h-10 text-[#CBACF9] group-hover:text-[#B794F4]" />
		),
		skills: [
			{ name: "React.js", level: 88, color: "from-[#B794F4] to-[#A785ED]" },
			{ name: "Next.js", level: 80, color: "from-[#CBACF9] to-[#B794F4]" },
			{ name: "TypeScript", level: 85, color: "from-[#CBACF9] to-[#A785ED]" },
			{
				name: "Tailwind/SCSS",
				level: 90,
				color: "from-[#B794F4] to-[#CBACF9]",
			},
			{ name: "JavaScript", level: 90, color: "from-[#CBACF9] to-[#B794F4]" },
		],
	},
	
];

export function SkillsSection() {
	return (
		<section  className="py-24 bg-gradient-to-br ">
			<div className="max-w-6xl mx-auto px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					className="text-center mb-20">
					<h2 className="text-4xl md:text-5xl font-bold dark:text-white mb-4">
						Technical
						<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#CBACF9] to-[#B794F4]">
							{" "}
							Expertise
						</span>
					</h2>

					<p className=" max-w-2xl mx-auto text-lg">
						Crafting digital experiences with cutting-edge technologies
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 gap-8">
					{skillCategories.map((category, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="group bg-gray-800/20 backdrop-blur-xl rounded-2xl p-8 hover:bg-gray-800/30
                         transition-all duration-300 border border-gray-700/50 hover:border-[#CBACF9]/50
                         hover:shadow-lg hover:shadow-[#CBACF9]/10">
							<div className="flex items-center gap-4 mb-8">
								{category.icon}
								<h3 className="text-2xl font-bold text-white group-hover:text-[#CBACF9] transition-colors">
									{category.title}
								</h3>
							</div>

							<div className="space-y-6">
								{category.skills.map((skill, skillIndex) => (
									<motion.div
										key={skillIndex}
										initial={{ opacity: 0 }}
										whileInView={{ opacity: 1 }}
										transition={{ delay: skillIndex * 0.1 }}
										className="space-y-2">
										<div className="flex justify-between text-sm font-medium">
											<span className="text-gray-200">{skill.name}</span>
											<span className="text-[#CBACF9]">{skill.level}%</span>
										</div>
										<div className="h-2 bg-gray-700/50 rounded-full overflow-hidden">
											<motion.div
												initial={{ width: 0 }}
												whileInView={{ width: `${skill.level}%` }}
												transition={{ duration: 1.5, delay: skillIndex * 0.2 }}
												className={`h-full bg-gradient-to-r ${skill.color} rounded-full
                                  relative before:absolute before:inset-0 before:bg-gradient-to-r
                                  before:from-white/20 before:via-transparent before:to-transparent`}
											/>
										</div>
									</motion.div>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
