"use client";

import { IconArrowLeft, IconArrowRight, IconStarFilled } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
  rating: number;
  techStack: string[];
  projectType: string;
  completionYear: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold dark:text-white mb-4">
            Featured
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8d7aa9] to-[#CBACF9]">
              {" "}Projects
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Explore some of my recent work and achievements
          </p>
        </motion.div>

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div className="relative h-[400px] lg:h-[600px] w-full overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={active}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    handleNext();
                  } else if (swipe > swipeConfidenceThreshold) {
                    handlePrev();
                  }
                }}
                className="absolute inset-0"
              >
                <Image
                  src={testimonials[active].src}
                  alt={testimonials[active].name}
                  fill
                  className="rounded-2xl object-cover object-center shadow-2xl"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex flex-col justify-center">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
              className="space-y-6"
            >
              <motion.div 
                className="flex gap-1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <IconStarFilled className="w-6 h-6 text-yellow-400" />
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {testimonials[active].name}
                </h3>
                <p className="text-lg text-[#CBACF9]  mt-1">
                  {testimonials[active].designation}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {testimonials[active].projectType} • {testimonials[active].completionYear}
                </p>
              </motion.div>

              <motion.p 
                className="text-xl leading-relaxed text-gray-700 dark:text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {testimonials[active].quote}
              </motion.p>

              <motion.div 
                className="flex flex-wrap gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {testimonials[active].techStack.map((tech, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="px-3 py-1 rounded-full text-sm  bg-[#6f5d8b]"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              <motion.div 
                className="flex gap-4 pt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <button
                  onClick={handlePrev}
                  className="p-3 rounded-full  bg-[#CBACF9]"
                >
                  <IconArrowLeft className="w-6 h-6 text-purple-600 dark:text-white" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-3 rounded-full bg-[#CBACF9]"
                >
                  <IconArrowRight className="w-6 h-6 text-purple-600 dark:text-white" />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
