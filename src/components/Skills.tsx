import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslations } from 'next-intl';
import {
  Code2,
  Database,
  Layers,
  Terminal,
  Globe,
  Server,
  FileCode2,
  Cpu,
} from 'lucide-react';

const getIcon = (skill: string) => {
  const lowercaseSkill = skill.toLowerCase();
  if (
    [
      'html5',
      'css3',
      'javascript',
      'typescript',
      'php',
      'python',
      'java',
      'c',
      'c++',
      'dart',
      'bash',
    ].includes(lowercaseSkill)
  ) {
    return <FileCode2 className="h-4 w-4 mr-1" aria-hidden="true" />;
  }
  if (
    [
      'react.js',
      'vue.js',
      'angular',
      'svelte',
      'express.js',
      'nest.js',
      'next.js',
      'nuxt.js',
      'flutter',
      'spring boot',
      'laravel',
      'django',
      'flask',
      'codeigniter',
    ].includes(lowercaseSkill)
  ) {
    return <Layers className="h-4 w-4 mr-1" aria-hidden="true" />;
  }
  if (
    ['linux', 'windows', 'macos', 'ios', 'android'].includes(lowercaseSkill)
  ) {
    return <Cpu className="h-4 w-4 mr-1" aria-hidden="true" />;
  }
  if (
    [
      'docker',
      'kubernetes',
      'aws',
      'azure',
      'google cloud',
      'heroku',
      'digitalocean',
    ].includes(lowercaseSkill)
  ) {
    return <Globe className="h-4 w-4 mr-1" aria-hidden="true" />;
  }
  if (['nginx', 'apache', 'iis'].includes(lowercaseSkill)) {
    return <Server className="h-4 w-4 mr-1" aria-hidden="true" />;
  }
  return <Terminal className="h-4 w-4 mr-1" aria-hidden="true" />;
};

const skillCategories = [
  {
    name: 'Languages',
    items: [
      'Bash',
      'C',
      'C++',
      'CSS3',
      'Dart',
      'HTML5',
      'Java',
      'JavaScript',
      'PHP',
      'Python',
      'TypeScript',
    ],
    icon: Code2,
  },
  {
    name: 'Frameworks',
    items: [
      'CodeIgniter',
      'Express.js',
      'Flask',
      'Frappe',
      'Flutter',
      'Nest.js',
      'Next.js',
      'React.js',
      'Spring Boot',
    ],
    icon: Layers,
  },
  {
    name: 'Databases',
    items: [
      'MongoDB',
      'MySQL',
      'NoSQL',
      'PostgreSQL',
      'Redis',
      'SQL',
      'SQLite',
    ],
    icon: Database,
  },
  {
    name: 'Other',
    items: [
      'Apache',
      'Docker',
      'ERPNext',
      'Git',
      'Github CI/CD',
      'Linux',
      'Nginx',
      'NodeJS',
      'Puppet',
      'Webassembly',
    ],
    icon: Terminal,
  },
];

export default function Skills() {
  const t = useTranslations('skills');

  return (
    <section id="skills" className="container py-12">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center text-primary">
        {t('title')}
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((category, index) => (
          <Card
            key={index}
            className="bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-primary/10 hover:border-primary/30 transition-colors"
          >
            <CardHeader className="flex flex-row items-center space-x-4">
              <category.icon
                className="h-8 w-8 text-primary"
                aria-hidden="true"
              />
              <CardTitle className="text-primary">
                {t(`categories.${index}.name`)}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="flex flex-wrap gap-2">
                {category.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm flex items-center"
                  >
                    {getIcon(item)}
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
