"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log({ name, email, message })
  }

  return (
    <section id="contact" className="container py-12">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center text-primary">Get in Touch</h2>
      <Card className="max-w-md mx-auto bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-primary/10">
        <CardHeader>
          <CardTitle className="text-primary">Contact Me</CardTitle>
          <CardDescription className="text-primary/60">Fill out the form below to send me a message.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="border-primary/20 focus:border-primary"
              />
            </div>
            <div>
              <Input
                
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border-primary/20 focus:border-primary"
              />
            </div>
            <div>
              <Textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="border-primary/20 focus:border-primary"
              />
            </div>
            <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90">Send Message</Button>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}