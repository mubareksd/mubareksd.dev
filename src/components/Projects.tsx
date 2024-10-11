import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    link: "#"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management tool for teams with real-time updates.",
    tech: ["Vue.js", "Express", "PostgreSQL", "WebSockets"],
    link: "#"
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing projects and skills.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "#"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="container py-12">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center text-primary">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index} className="bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-primary/10 hover:border-primary/30 transition-colors overflow-hidden group">
            <CardHeader>
              <CardTitle className="text-primary">{project.title}</CardTitle>
              <CardDescription className="text-primary/60">{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                    {tech}
                  </span>
                ))}
              </div>
              <Button variant="outline" className="w-full text-primary border-primary hover:bg-primary hover:text-white transition-colors">
                View Project <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}