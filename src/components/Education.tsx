import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';
import { useTranslations } from 'next-intl';

const educations = [
  {
    key: 'certSE',
    details: ['detail1', 'detail2', 'detail3'],
  },
  {
    key: 'bsc',
    details: ['detail1', 'detail2', 'detail3'],
  },
];

export default function Education() {
  const t = useTranslations('education');

  return (
    <section id="education" className="container py-12">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center text-primary">
        {t('title')}
      </h2>
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        {educations.map((edu, index) => (
          <Card
            key={index}
            className="bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-primary/10 hover:border-primary/30 transition-colors"
          >
            <CardHeader className="flex flex-row items-center space-x-4">
              <GraduationCap
                className="h-8 w-8 text-primary"
                aria-hidden="true"
              />
              <div>
                <CardTitle className="text-primary">
                  {t(`${edu.key}.degree`)}
                </CardTitle>
                <p className="text-sm text-primary/80">
                  {t(`${edu.key}.institution`)}
                </p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary/60 mb-2">
                {t(`${edu.key}.period`)}
              </p>
              <p className="text-sm text-primary/60 mb-4">
                {t(`${edu.key}.location`)}
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                {edu.details.map((detail, idx) => (
                  <li key={idx}>{t(`${edu.key}.${detail}`)}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
