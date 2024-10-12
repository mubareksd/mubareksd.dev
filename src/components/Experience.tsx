import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';
import { useTranslations } from 'next-intl';

const experiences = [
  {
    company: 'Haron Computer',
    position: 'Lead Software Developer',
    location: 'Addis Ababa, Ethiopia',
    period: '02/2024 - Present',
    responsibilities: [
      'responsibility1',
      'responsibility2',
      'responsibility3',
      'responsibility4',
      'responsibility5',
    ],
  },
  {
    company: 'Sabawyan Tech',
    position: 'Software Engineer',
    location: 'Mekelle, Tigray, Ethiopia',
    period: '07/2019 - 11/2023',
    responsibilities: [
      'responsibility1',
      'responsibility2',
      'responsibility3',
      'responsibility4',
      'responsibility5',
    ],
  },
];

export default function Experience() {
  const t = useTranslations('experience');

  return (
    <section id="experience" className="container py-12">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center text-primary">
        {t('title')}
      </h2>
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        {experiences.map((exp, index) => (
          <Card
            key={index}
            className="bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-primary/10 hover:border-primary/30 transition-colors"
          >
            <CardHeader className="flex flex-row items-center space-x-4">
              <Briefcase className="h-8 w-8 text-primary" aria-hidden="true" />
              <div>
                <CardTitle className="text-primary">
                  {t(`jobs.${index}.company`)}
                </CardTitle>
                <p className="text-sm text-primary/80">
                  {t(`jobs.${index}.position`)}
                </p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary/60 mb-2">{exp.period}</p>
              <p className="text-sm text-primary/60 mb-4">
                {t(`jobs.${index}.location`)}
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                {exp.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{t(`jobs.${index}.${responsibility}`)}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
