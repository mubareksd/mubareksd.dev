'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';
import { useTranslations } from 'next-intl';

const experiences = [
  {
    company: 'Haron Computer',
    position: 'Lead Software Developer',
    location: 'Addis Ababa, Ethiopia',
    startDate: new Date('2024-02-01'),
    endDate: null,
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
    startDate: new Date('2019-07-01'),
    endDate: new Date('2023-11-30'),
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

  function calculateDuration(startDate: Date, endDate: Date | null) {
    const end = endDate || new Date();
    const diffTime = Math.abs(end.getTime() - startDate.getTime());
    const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365.25));
    const diffMonths = Math.floor(
      (diffTime % (1000 * 60 * 60 * 24 * 365.25)) /
        (1000 * 60 * 60 * 24 * 30.44),
    );
    const diffDays = Math.floor(
      (diffTime % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24),
    );

    const parts = [];
    if (diffYears > 0) {
      parts.push(t('duration.years', { count: diffYears }));
    }
    if (diffMonths > 0) {
      parts.push(t('duration.months', { count: diffMonths }));
    }
    if (diffDays > 0 && diffYears === 0) {
      parts.push(t('duration.days', { count: diffDays }));
    }

    return parts.join(', ');
  }

  return (
    <section id="experience" className="container py-12">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center text-primary">
        {t('title')}
      </h2>
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        {experiences.map((exp, index) => {
          const duration = calculateDuration(exp.startDate, exp.endDate);
          const period = `${t('date', { date: exp.startDate })} - ${exp.endDate ? t('date', { date: exp.endDate }) : t('present')}`;

          return (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-primary/10 hover:border-primary/30 transition-colors"
            >
              <CardHeader className="flex flex-row items-center space-x-4">
                <Briefcase
                  className="h-8 w-8 text-primary"
                  aria-hidden="true"
                />
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
                <p className="text-sm text-primary/60 mb-2">
                  {period} . {duration}
                </p>
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
          );
        })}
      </div>
    </section>
  );
}
