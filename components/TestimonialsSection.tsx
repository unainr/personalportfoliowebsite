import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote: "CloudHorizon is a powerful image manipulation platform. The integration with Cloudinary API enables real-time image effects and transformations. The UI is intuitive and processing speed is remarkable.",
      name: "CloudHorizon",
      designation: "Image Processing Platform",
      rating: 5,
      projectType: "SaaS Image Platform",
      src: "/cloudhorizon.png",
      techStack: ["Next.js", "Cloudinary API", "TailwindCSS", "TypeScript", "Framer Motion"],
      completionYear: "2023"
    },
    {
      quote: "WordSphere delivers a seamless blogging experience with robust authentication and content management. The integration of Clerk and Sanity.io creates a powerful publishing platform.",
      name: "WordSphere",
      designation: "Modern Blog Platform",
      rating: 5,
      projectType: "Content Platform",
      src: "/wordsphere.png",
      techStack: ["Next.js", "Sanity.io", "Clerk", "TailwindCSS", "TypeScript"],
      completionYear: "2023"
    },
    {
      quote: "SwiftBuy provides a complete e-commerce solution with seamless payment integration and content management. The shopping experience is smooth and user-friendly.",
      name: "SwiftBuy",
      designation: "E-commerce Platform",
      rating: 5,
      projectType: "Full-stack E-commerce",
      src: "/swiftbuy.png",
      techStack: ["Next.js", "Sanity.io", "Stripe", "TailwindCSS", "TypeScript"],
      completionYear: "2023"
    },
    {
      quote: "The headphone showcase website demonstrates excellent frontend development skills with stunning animations and responsive design.",
      name: "HeadphoneHub",
      designation: "Product Showcase",
      rating: 5,
      projectType: "Frontend Showcase",
      src: "/headphones.png",
      techStack: ["Next.js", "TailwindCSS", "Framer Motion", "TypeScript"],
      completionYear: "2023"
    }
];



  return <AnimatedTestimonials testimonials={testimonials} />;
}



