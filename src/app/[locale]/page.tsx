import Hero from '@/components/Hero';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import { setRequestLocale } from 'next-intl/server';

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <div className="w-full space-y-16 py-16">
      <Hero />
      <Education />
      <Experience />
      <Projects />
      <Skills />
    </div>
  );
}
