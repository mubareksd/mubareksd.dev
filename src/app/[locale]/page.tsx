import Hero from '@/components/Hero'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <div className="w-full space-y-16 py-16">
      <Hero />
      <Education />
      <Experience />
      {/* <Projects /> */}
      <Contact />
    </div>
  );
}