import Hero from '@/components/Hero';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import { unstable_setRequestLocale } from 'next-intl/server';

export default function Home({
  params: { locale },
}: {
  params: {
    locale: string;
  };
}) {
  unstable_setRequestLocale(locale);
  return (
    <div className="w-full space-y-16 py-16">
      <Hero />
      <Education />
      <Experience />
      <Skills />
    </div>
  );
}
