import { z } from "zod";

export const workExperience = [
  {
    id: 1,
    title: "Modern Web Development",
    desc: "Building responsive and dynamic websites using React, Next.js, and TypeScript. Creating seamless user experiences with modern UI/UX principles.",
    className: "md:col-span-2",
    thumbnail: "https://www.svgrepo.com/show/354259/react.svg",
  },
  {
    id: 2,
    title: "Frontend Specialist",
    desc: "Crafting pixel-perfect interfaces with Tailwind CSS, Material-UI, and modern JavaScript frameworks. Ensuring cross-browser compatibility and mobile responsiveness.",
    className: "md:col-span-2",
    thumbnail: "https://www.svgrepo.com/show/374146/typescript-official.svg",
  },
  {
    id: 3,
    title: "Backend Development",
    desc: "Developing robust REST APIs and server-side applications using Node.js, Express, and MongoDB. Implementing secure authentication and database management.",
    className: "md:col-span-2",
    thumbnail: "https://www.svgrepo.com/show/378837/node.svg",
  },
  {
    id: 4,
    title: "Performance Optimization",
    desc: "Optimizing web applications for speed and performance. Implementing SEO best practices, caching strategies, and modern web vitals improvements.",
    className: "md:col-span-2",
    thumbnail: "https://www.svgrepo.com/show/354202/postman-icon.svg",
  },
  {
    id: 5,
    title: "API Integration",
    desc: "Seamlessly connecting third-party services and APIs. Building custom integrations for payment gateways, CMS platforms, and external services.",
    className: "md:col-span-2",
    thumbnail: "https://www.svgrepo.com/show/373595/firebase.svg",
  },
  {
    id: 6,
    title: "Database Management",
    desc: "Expert handling of SQL and NoSQL databases including MongoDB, PostgreSQL, and Firebase. Implementing efficient data structures and optimization strategies.",
    className: "md:col-span-2",
    thumbnail: "https://www.svgrepo.com/show/373845/mongo.svg",
  },
];


export const Formvalidation = z.object({
name:z.string().min(3,{message: "Minimum 3 characters." }).max(20,{message: "Maximum 20 characters." }),
email: z.string().email({ message: "Invalid email address" }),
subject: z.string().min(3,{message: "Minimum 3 characters." }).max(20,{message: "Maximum 20 characters." }),
message: z.string().min(10,{message: "Minimum 10 characters." }).max(200,{message: "Maximum 200 characters." }),

});


