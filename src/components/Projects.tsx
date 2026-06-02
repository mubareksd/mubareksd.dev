'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { useTranslations } from 'next-intl';

const projects = [
  {
    title: 'Frappify API',
    description:
      'A centralized proxy backend that securely connects client applications to Frappe sites through a unified API layer.',
    tech: ['Python', 'Flask', 'PostgreSQL', 'JWT'],
    repoUrl: 'https://github.com/frappifyapp/frappify_api',
    liveUrl: 'https://www.api.frappify.mubareksd.dev/',
  },
  {
    title: 'Frappify App',
    description:
      'A Next.js PWA dashboard for interacting with Frappe and ERPNext instances through the Frappify API.',
    tech: ['Next.js', 'TypeScript', 'NextAuth', 'PWA'],
    repoUrl: 'https://github.com/frappifyapp/frappify_app',
    liveUrl: 'https://www.app.frappify.mubareksd.dev/',
  },
  {
    title: 'Frappify Web',
    description:
      'The public-facing platform for managing Frappe site connections, security rules, and gateway access.',
    tech: ['Next.js', 'TypeScript', 'NextAuth'],
    repoUrl: 'https://github.com/frappifyapp/frappify_web',
    liveUrl: 'https://www.frappify.mubareksd.dev/',
  },
  {
    title: 'Frappe Dart',
    description:
      'A Dart wrapper for the Frappe API, enabling seamless communication with Frappe-based systems from Flutter apps.',
    tech: ['Dart', 'Flutter', 'REST API'],
    repoUrl: 'https://github.com/frappifyapp/frappe_dart',
  },
  {
    title: 'Veloce',
    description:
      'A lightweight map app for discovering fuel stations, EV chargers, parking, and car washes using OpenStreetMap.',
    tech: ['Flutter', 'Dart', 'OpenStreetMap'],
    repoUrl: 'https://github.com/mubareksd/veloce',
  },
  {
    title: 'Unfog',
    description:
      'An adventure app inspired by Fog of World: explore a fog-covered map and clear the mist everywhere you have been.',
    tech: ['Flutter', 'Dart', 'Maps'],
    repoUrl: 'https://github.com/mubareksd/unfog',
  },
];

export default function Projects() {
  const t = useTranslations('projects');

  return (
    <section id="projects" className="container py-12 scroll-mt-16">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center text-primary">
        {t('title')}
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card
            key={project.repoUrl}
            className="bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-primary/10 hover:border-primary/30 transition-colors overflow-hidden group"
          >
            <CardHeader>
              <CardTitle className="text-primary">{project.title}</CardTitle>
              <CardDescription className="text-primary/60">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                {project.liveUrl && (
                  <Button
                    asChild
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t('viewLive')}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                )}
                <Button
                  asChild
                  variant="outline"
                  className="w-full text-primary border-primary hover:bg-primary hover:text-white transition-colors"
                >
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.liveUrl ? t('viewSource') : t('viewProject')}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
