"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { Formvalidation } from "@/data";
import { motion } from "framer-motion";
import { formAction } from "@/lib/form.action";
import { toast } from "@/hooks/use-toast";
import { ToastAction } from "@radix-ui/react-toast";
import { Loader2 } from "lucide-react";

const ContactForm = () => {
	const [loading, setLoading] = useState(false);
	const form = useForm<z.infer<typeof Formvalidation>>({
		resolver: zodResolver(Formvalidation),
		defaultValues: {
			name: "",
			email: "",
			subject: "",
			message: "",
		},
	});

	// 2. Define a submit handler.
	async function onSubmit(values: z.infer<typeof Formvalidation>) {
		setLoading(true);

		try {
			// Ensure all required values exist
			if (!values.name || !values.email || !values.subject || !values.message) {
				toast({
					variant: "destructive",
					title: "Missing Fields",
					description: "Please fill in all required fields before submitting.",
				});
				setLoading(false);
				return;
			}

			// Create FormData object
			const formData = new FormData();
			formData.append("name", values.name);
			formData.append("email", values.email);
			formData.append("subject", values.subject);
			formData.append("message", values.message);

			// Call the server action
			const response = await formAction(formData);

			if (response.success) {
				toast({
					title: "Form submitted successfully",
					description: "Your form has been submitted successfully.",
				});

				// Reset form fields
				form.reset(); // Ensure `form` exists, or use another method to clear values
			} else {
				toast({
					variant: "destructive",
					title: "Uh oh! Something went wrong.",
					description:
						response.error || "There was a problem with your request.",
					action: <ToastAction altText="Try again">Try again</ToastAction>,
				});
			}
		} catch (error) {
			toast({
				variant: "destructive",
				title: "Uh oh! Something went wrong.",
				description: "There was a problem with your request.",
				action: <ToastAction altText="Try again">Try again</ToastAction>,
			});
		} finally {
			setLoading(false);
		}
	}

	return (
		<div id="contact" className="relative w-full py-20">
			{/* Background Elements */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-purple-400/30 blur-3xl" />
				<div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-purple-600/30 blur-3xl" />
			</div>

			<div className="relative max-w-4xl mx-auto px-4">
				<div className="text-center mb-12">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						className="text-4xl md:text-5xl font-bold dark:text-white">
						Let's Build
						<span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-purple-600 to-purple-800">
							{" "}
							Something Amazing
						</span>
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						className="mt-4 text-lg text-gray-600 dark:text-gray-300">
						Have an idea? I'd love to hear about it.
					</motion.p>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3 }}
					className="backdrop-blur-xl bg-white/10 dark:bg-gray-800/10 border border-gray-200/20 dark:border-gray-700/20 rounded-3xl shadow-2xl">
					<div className="p-8">
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className="space-y-6">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<FormField
										control={form.control}
										name="name"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Name</FormLabel>
												<FormControl>
													<Input placeholder="Enter Your Name" {...field} />
												</FormControl>
												<FormMessage className="text-red-500" />
											</FormItem>
										)}
									/>

									<FormField
										control={form.control}
										name="email"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Email</FormLabel>
												<FormControl>
													<Input placeholder="person@example.com" {...field} />
												</FormControl>
												<FormMessage className="text-red-500" />
											</FormItem>
										)}
									/>
								</div>

								<FormField
									control={form.control}
									name="subject"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Subject</FormLabel>
											<FormControl>
												<Input placeholder="What's this about?" {...field} />
											</FormControl>
											<FormMessage className="text-red-500" />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="message"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Message</FormLabel>
											<FormControl>
												<Textarea
													placeholder="Share your thoughts..."
													{...field}
													className=" rounded-xl min-h-[150px] focus:ring-2 focus:ring-purple-500/50"
												/>
											</FormControl>
											<FormMessage className="text-red-500" />
										</FormItem>
									)}
								/>

								<Button
									type="submit"
									disabled={loading}
									className="w-full bg-gradient-to-r uppercase from-[#8972abfc] via-[#866dab] to-[#bea2e9b1]  text-white  py-4 transition-all duration-300 transform hover:scale-[1.02] focus:scale-[0.98]">
									{loading ? (
										<>
											<Loader2 className="mr-2 h-4 w-4 animate-spin" />
											Submitting...
										</>
									) : (
										"submit"
									)}
								</Button>
							</form>
						</Form>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default ContactForm;
