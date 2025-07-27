import React from "react";
import CircularTestimonials from "./testimoaniol";

const testimonials = [
  {
    quote:
      "Experience natural voice conversations with intelligent AI companions tailored to your needs. Build meaningful connections through advanced voice technology powered by VAPI.",
    name: "Wisera",
    designation: "AI Companion",
    src:
      "/1.jpg",
  },
  {
    quote: "SwiftBuy provides a complete e-commerce solution with seamless payment integration and content management. The shopping experience is smooth and user-friendly.",
    name: "SwiftBuy",
   designation: "E-commerce Platform",
    src: "/swiftbuy.png",
  },
  {
   quote: "The headphone showcase website demonstrates excellent frontend development skills with stunning animations and responsive design.",
    name: "Sonic Blend",
    designation: "Product Showcase",
  src: "/headphones.png",
  },
      {
      quote: "CloudHorizon is a powerful image manipulation platform. The integration with Cloudinary API enables real-time image effects and transformations. The UI is intuitive and processing speed is remarkable.",
      name: "CloudHorizon",
      designation: "Image Processing Platform",
      src: "/cloudhorizon.png",
    },
];

export const CircularTestimonialsCard = () => (
  <section className="text-center my-20">
    <h2 className="text-4xl md:text-5xl font-bold dark:text-white mb-4">
            Featured
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8d7aa9] to-[#CBACF9]">
              {" "}Projects
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Explore some of my recent work and achievements
          </p>

    {/* Dark testimonials section */}
    <div className="bg-[#060507] p-16 rounded-lg min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative">
      <div
        className="items-center justify-center relative flex"
        style={{ maxWidth: "1024px" }}
      >
        <CircularTestimonials
          testimonials={testimonials}
          autoplay={true}
          colors={{
            name: "#f7f7ff",
            designation: "#e1e1e1",
            testimony: "#f1f1f7",
            arrowBackground: "#CBACF9",
            arrowForeground: "#f7f7ff",
            arrowHoverBackground: "#f7f7ff",
          }}
          fontSizes={{
            name: "28px",
            designation: "20px",
            quote: "20px",
          }}
        />
      </div>
    </div>
  </section>
);
