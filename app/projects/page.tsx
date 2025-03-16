import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

const projects = [
  {
    title: "Hive Mind",
    description:
      "Your personal knowledge hub to store, organize, and retrieve ideas effortlessly. Easily categorize notes, ideas, and files for quick access.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB", "Express.js", "Mongoose"],
    github: "#",
  },
  {
    title: "Dev Blog",
    description: "FullStack Blog App with minimalistic UI.",
    technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Express.js", "Mongoose"],
    github: "#",
  },
  {
    title: "Shortsy",
    description:
      "A full-stack URL shortener with JWT authentication and bcrypt for password hashing. Uses MongoDB as the database and features a clean interface with Shadcn UI.",
    technologies: ["React.js", "Tailwind CSS", "Shadcn/ui", "Node.js", "MongoDB", "Express.js", "Mongoose"],
    github: "#",
  },
  {
    title: "Echo Landing Page",
    description: "Landing page for Echo, an HTTP client for the terminal.",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Shadcn"],
    github: "#",
  },
  {
    title: "Portfolio Website",
    description: "Showcases my projects and skills with a clean, modern design.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    github: "#",
  },
  {
    title: "Food Facts",
    description:
      "A web application allowing users to search for product details using the OpenFoodFacts API and provides a paginated view of product lists.",
    technologies: ["React.js", "Tailwind CSS", "OpenFoodFacts API"],
    github: "#",
  },
  {
    title: "Blogr Landing Page",
    description:
      "A responsive landing page built using React with custom CSS for styling. The page is fully responsive and optimized for different screen sizes.",
    technologies: ["React", "CSS", "JavaScript"],
    github: "#",
  },
  {
    title: "Campus Connect",
    description:
      "A web-based application to help students manage shared resources, plan group activities, and communicate when working on academic projects.",
    technologies: ["React", "Firebase"],
    github: "#",
  },
]

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4 py-8 relative z-10 max-w-3xl">
        <Link href="/" className="inline-flex items-center text-zinc-400 hover:text-white mb-8">
          <ArrowLeft size={16} className="mr-2" />
          Back to Home
        </Link>

        {/* <h1 className="text-3xl font-semibold mb-8">Projects</h1> */}
        <h1 className="text-3xl font-semibold mb-8">
                            <RoughNotation
                              type="highlight"
                              color="#ff4000"
                              show={true}
                              animationDelay={600}
                              strokeWidth={2}
                              padding={[8, 10, 8, 12]}
                            >
                              <span>Projects</span>
                            </RoughNotation>
                          </h1>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={project.title}>
              <div className="mb-6">
                          <h2 className="text-2xl font-medium mb-2 relative inline-block">
                            <RoughNotation
                              type="underline"
                              color="#ff4000"
                              show={true}
                              animationDelay={600}
                              strokeWidth={2}
                              padding={[8, 8, 4, 6]}
                            >
                              <span>{project.title}</span>
                            </RoughNotation>
                          </h2>
                <p className="text-zinc-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-sm text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link href={project.github} className="text-zinc-400 hover:text-white underline underline-offset-4">
                  View on GitHub
                </Link>
              </div>

              {index < projects.length - 1 && <Separator className="bg-zinc-800" />}
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

