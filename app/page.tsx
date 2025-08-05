'use client';
import { Github, Mail, Linkedin, Home, User, Code, Briefcase, Send , Link2, Globe} from 'lucide-react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
// import { GithubGraph } from '@/components/ui/github';
import { useState } from 'react';
import Link from "next/link";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

const skills = {
  Languages: ['Typescript', 'JavaScript', 'HTML', 'CSS', 'SQL'],
  Frameworks: ['React', 'Node.js', 'Express', 'Next.js', 'Mongoose', 'Tailwind CSS'],
  'Dev Tools': ['Git', 'GitHub', 'VS Code', 'Firebase', 'Vercel', 'MongoDB', 'PostgreSQL'],
};

const projects = [
  {
    title: 'Hive Mind',
    description: 'Your personal knowledge hub to store, organize, and retrieve ideas effortlessly. Easily categorize notes, ideas, and files for quick access.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Express.js', 'Mongoose'],
    githubLink: "https://hivee-mind.vercel.app",
    liveLink: 'https://github.com/faizanr27/Hive-Mind-FE',
  },
  {
    title: 'Dev Blog',
    description: 'FullStack Blog App with minimalistic UI.',
    tech: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Express.js', 'Mongoose'],
    githubLink: "https://dev-blogg.vercel.app/",
    liveLink: 'https://github.com/faizanr27/Dev-Blog',
  },
  {
    title: 'Shortsy',
    description: 'A full-stack URL shortener with JWT authentication and bcrypt for password hashing. Uses MongoDB as the database and features a clean interface with Shadcn UI.',
    tech: ['React.js', 'Tailwind CSS', 'Shadcn/ui', 'Node.js', 'MongoDB', 'Express.js', 'Mongoose'],
    githubLink: "https://shrtsy.vercel.app/signin",
    liveLink: 'https://github.com/faizanr27/Shortsy',
  },
  {
    title: 'WEB2MD',
    description: 'This project is a web scraper that uses Puppeteer and Cheerio to extract webpage content, convert it into Markdown, and cache results in Redis for improved performance.',
    tech: ['Node.js', 'Express', 'Redis', 'Puppeteer'],
    githubLink: "https://web2-md.vercel.app/",
    liveLink: 'https://github.com/faizanr27/Web2MD',
  },
];

const navItems = [
  { label: 'Home', link: '/' },
  { label: 'Projects', link: '/projects' },
  { label: 'Contact', link: '/contact' },
];


export default function Homee() {
  const [activeSection, setActiveSection] = useState('Home');

  return (
    <main className="min-h-screen bg-black text-zinc-50 relative overflow-hidden">
      {/* Navigation */}
      <nav className="left-0 right-0 border-zinc-800/50 z-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center h-16 gap-8">
            {navItems.map((item) => (
              <Link key={item.label} href={item.link}>
                <button
                  onClick={() => setActiveSection(item.label)}
                  className={`flex items-center gap-2 px-3 py-2 transition-colors ${
                    activeSection === item.label
                      ? "text-white"
                      : "hover:text-white"
                  }`}
                >
                  <span
                    className={`text-sm ${
                      activeSection === item.label
                        ? "border-b border-orange-400"
                        : ""
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Floating blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div
          className="absolute top-5 right-0 w-[300px] h-[300px] rounded-full bg-[#ff4000] blur-[120px]"
          style={{ animation: "float-blob-1 20s infinite ease-in-out" }}
        />
        <div
          className="absolute bottom-0 left-10 w-[300px] h-[300px] rounded-full bg-[#ff4000] blur-[120px]"
          style={{ animation: "float-blob-2 15s infinite ease-in-out" }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 py-28 -mt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold mb-4 text-white inline-block">
            <RoughNotation
              type="highlight"
              color="#ff4000"
              show={true}
              animationDelay={800}
              strokeWidth={2}
            >
              Faizan Raza
            </RoughNotation>
          </h1>

          <p className="text-xl text-zinc-200 mb-8">
            A front-end developer dedicated to building high-quality,
            scalable web applications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex gap-4 mb-12"
        >
          <Link href="mailto:faizanms025347@gmail.com">
            <Button
              variant="outline"
              className="border-zinc-700 hover:border-zinc-500 hover:bg-black/80 hover:text-white/50 bg-black rounded-lg"
            >
              <Mail className="mr-2 h-4 w-4" />
              Email
            </Button>
          </Link>

          <Link
            href="https://github.com/faizanr27"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="border-zinc-700 hover:border-zinc-500 hover:bg-black/80 hover:text-white/50 bg-black rounded-lg"
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
          </Link>

          <Link
            href="https://www.linkedin.com/in/faizanr27"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="border-zinc-700 hover:border-zinc-500 hover:bg-black/80 hover:text-white/50 bg-black rounded-lg"
            >
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Button>
          </Link>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold mb-6 text-white">Skills</h2>
          <div className="grid gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-lg font-medium mb-3 text-zinc-200">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-[#ff4000] hover:bg-black text-white border-zinc-700 hover:text-zinc-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>
        {/* <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className='text-2xl mb-2 inline-block leading-[1]'>
          <RoughNotation type="box" color='#ff4000' show={true} animationDelay={10} strokeWidth={2}>
            Github Contribution
          </RoughNotation>
          </h2>
          <a href='https://github.com/faizanr27' >
          <GithubGraph
            username="faizanr27"
            blockMargin={2}
            colorPallete={["#2b2b2b", "#4e4e4e", "#707070", "#9b9b9b", "#c7c7c7"]}
            // colorPallete={["#1e1e2f", "#5a3e7a", "#7e5aa2", "#a87cc3", "#d9a9e6"]}
          />
          </a>

        </motion.section> */}
{/*         <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-semibold mb-6 text-white relative inline-block">
            <RoughNotation
              type="circle"
              color="#ff4000"
              show={true}
              animationDelay={600}
              strokeWidth={2}
              padding={[8, 8, 4, 6]}
            >
              <span>Github Contribution</span>
            </RoughNotation>
          </h2>
          <a href="https://github.com/faizanr27">
            <GithubGraph
              username="faizanr27"
              blockMargin={2}
              // colorPallete={["#2b2b2b", "#4e4e4e", "#707070", "#9b9b9b", "#c7c7c7"]}
              colorPallete={[
                "#2b1a0b",
                "#7a3e1d",
                "#b85c2e",
                "#e67342",
                "#ff9248",
              ]}
            />
          </a>
        </motion.section> */}

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-white">Projects</h2>
          <div className="grid gap-6">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="p-6 bg-zinc-900/50 border-zinc-800 backdrop-blur-sm hover:border-zinc-700 transition-colors"
              >
                {/* <h3 className="text-xl font-semibold mb-2 text-white">
                  {project.title}
                </h3> */}
                <h2 className="text-2xl font-semibold mb-6 text-white relative inline-block">
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
                <p className="text-zinc-300 mb-4">{project.description}</p>
                <div className="flex flex-row justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-[#ff4000] hover:bg-black text-white hover:border-zinc-700  hover:text-zinc-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-row gap-2 text-zinc-300">
                    <Link href={project.githubLink}>
                      <Globe
                        size={20}
                        className="hover:scale-125 transition-all"
                      />
                    </Link>
                    <Link href={project.liveLink}>
                      <Github
                        size={20}
                        className="hover:scale-125 transition-all"
                      />
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </motion.section>

        <footer className="mt-20 text-center text-zinc-400">
          © 2025 Faizan Raza. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
