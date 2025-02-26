"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution for electronic products, featuring a modern UI and seamless shopping experience.",
    image: "/Assets/dydo 2.png",
    tags: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    title: "Agency Website",
    description: "A dark-themed, modern agency website with dynamic animations and creative portfolio showcase.",
    image: "https://source.unsplash.com/random/800x600?agency",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
  },
  {
    title: "Task Management App",
    description:
      "A minimal, intuitive task management mobile app with calendar integration and team collaboration features.",
    image: "https://source.unsplash.com/random/800x600?task-management",
    tags: ["React Native", "TypeScript", "Node.js"],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-quaternary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-48 md:h-64">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-contain" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-tertiary text-primary px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

