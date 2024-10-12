import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Github, Gitlab, Linkedin, Mail, Twitter, Phone } from 'lucide-react';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section
      id="about"
      className="container flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-12 text-center"
    >
      <div className="w-32 h-32 rounded-full overflow-hidden mb-8 border-4 border-primary">
        <Image
          src="/logo.svg"
          alt="Mubarek Seid Juhar"
          width={128}
          height={128}
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
        {t('title')}
      </h1>
      <p className="mt-4 text-xl text-primary/80">{t('subtitle')}</p>
      <p className="mt-4 max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
        {t('description')}
      </p>
      <div className="mt-8 flex justify-center space-x-4 flex-wrap">
        <Link
          href="https://github.com/mubareksd"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="outline"
            size="icon"
            className="text-primary hover:text-primary hover:border-primary"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Button>
        </Link>
        <Link
          href="https://gitlab.com/mubareksd"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="outline"
            size="icon"
            className="text-primary hover:text-primary hover:border-primary"
          >
            <Gitlab className="h-5 w-5" />
            <span className="sr-only">GitLab</span>
          </Button>
        </Link>
        <Link
          href="https://linkedin.com/in/mubareksd"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="outline"
            size="icon"
            className="text-primary hover:text-primary hover:border-primary"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Button>
        </Link>
        <Link
          href="https://twitter.com/mubareksd"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="outline"
            size="icon"
            className="text-primary hover:text-primary hover:border-primary"
          >
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Button>
        </Link>
        <Link href="mailto:contact@mubareksd.dev">
          <Button
            variant="outline"
            size="icon"
            className="text-primary hover:text-primary hover:border-primary"
          >
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Button>
        </Link>
        <Link href="tel:+251951410010">
          <Button
            variant="outline"
            size="icon"
            className="text-primary hover:text-primary hover:border-primary"
          >
            <Phone className="h-5 w-5" />
            <span className="sr-only">Phone</span>
          </Button>
        </Link>
      </div>
    </section>
  );
}
