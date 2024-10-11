import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    company: "Haron Computer PLC",
    position: "Software Engineer",
    period: "Feb 2024 - Present",
    description: "Currently working on cutting-edge software solutions."
  },
  {
    company: "Sabawyan Tech PLC",
    position: "Software Engineer",
    period: "Jul 2019 - Nov 2023",
    description: "Developed and maintained various software projects, improving efficiency and user experience."
  }
]

export default function Experience() {
  return (
    <section id="experience" className="container py-12">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center text-primary">Work Experience</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {experiences.map((exp, index) => (
          <Card key={index} className="bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-primary/10 hover:border-primary/30 transition-colors">
            <CardHeader className="flex flex-row items-center space-x-4">
              <Briefcase className="h-8 w-8 text-primary" />
              <div>
                <CardTitle className="text-primary">{exp.company}</CardTitle>
                <p className="text-sm text-primary/80">{exp.position}</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary/60 mb-2">{exp.period}</p>
              <p className="text-muted-foreground">{exp.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}