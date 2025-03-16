import Link from "next/link";
import { ArrowLeft, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4 py-8 relative z-10 max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center text-zinc-400 hover:text-white mb-8"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Home
        </Link>

        <h1 className="text-3xl font-semibold mb-8">
          <RoughNotation
            type="highlight"
            color="#ff4000"
            show={true}
            animationDelay={600}
            strokeWidth={2}
            padding={[8, 10, 8, 12]}
          >
            <span>Contact Me</span>
          </RoughNotation>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-medium mb-4">Get in Touch</h2>
            <p className="text-zinc-400 mb-6">
              Feel free to reach out through the platforms below or send an
              email. I'm always open to discussing new projects, creative ideas,
              or opportunities.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:faizanms025347@gmail.com"
                className="flex items-center text-zinc-400 hover:text-white transition-colors"
              >
                <Mail size={18} className="mr-3" />
                faizanms025347@gmail.com
              </a>
              <a
                href="https://github.com/faizanr27"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-zinc-400 hover:text-white transition-colors"
              >
                <Github size={18} className="mr-3" />
                faizanr27
              </a>
              <a
                href="https://www.linkedin.com/in/faizan-raza-3b3a22203/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-zinc-400 hover:text-white transition-colors"
              >
                <Linkedin size={18} className="mr-3" />
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-4">Send a Message</h2>
            <form
              action="https://formsubmit.co/faizanms025347@gmail.com"
              method="POST"
              className="space-y-4"
            >
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="bg-zinc-900/50 border-zinc-800 focus-visible:ring-zinc-700"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="bg-zinc-900/50 border-zinc-800 focus-visible:ring-zinc-700"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  className="bg-zinc-900/50 border-zinc-800 focus-visible:ring-zinc-700 min-h-[120px]"
                />
              </div>

              <input type="text" name="_honey" style={{ display: "none" }} />

              <input type="hidden" name="_captcha" value="false" />

              <Button className="w-full bg-zinc-800 hover:bg-zinc-700 text-white">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
