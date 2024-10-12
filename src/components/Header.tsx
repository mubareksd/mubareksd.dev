'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Menu, X, Moon, Sun, Laptop } from 'lucide-react';
import { useTheme } from 'next-themes';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const languageFlags = {
  en: '🇬🇧',
  am: '🇪🇹',
  ti: '🇪🇹',
  ar: '🇸🇦',
};

const sections = [
  'about',
  'education',
  'experience',
  'skills',
  // "projects",
  // "contact"
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const t = useTranslations('header');
  const pathname = usePathname();
  const {
    setTheme,
    // theme
  } = useTheme();

  const switchLocale = (locale: string) => {
    const currentPathname = pathname.replace(/^\/[a-z]{2}/, '');
    window.location.href = `/${locale}${currentPathname}`;
  };

  const getLanguageLabel = (locale: string) => {
    switch (locale) {
      case 'en':
        return 'EN';
      case 'am':
        return 'አማ';
      case 'ti':
        return 'ትግ';
      case 'ar':
        return 'عر';
      default:
        return locale.toUpperCase();
    }
  };

  const currentLocale = pathname.split('/')[1];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const offset = windowHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (
            scrollPosition >= top - offset &&
            scrollPosition < top + height - offset
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => {
    const isActive = activeSection === href.slice(1);
    return (
      <Link
        href={href}
        className={`nav-link transition-colors duration-200 ${
          isActive
            ? 'text-primary font-semibold'
            : 'text-foreground/60 hover:text-foreground/80'
        }`}
      >
        {children}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link className="flex items-center space-x-2" href="/">
          <span className="font-bold text-xl text-primary">MSD</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <NavLink href="#about">{t('about')}</NavLink>
          <NavLink href="#education">{t('education')}</NavLink>
          <NavLink href="#experience">{t('experience')}</NavLink>
          <NavLink href="#skills">{t('skills')}</NavLink>
          {/* <NavLink href="#projects">{t("projects")}</NavLink> */}
          {/* <NavLink href="#contact">{t("contact")}</NavLink> */}
        </nav>
        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme('light')}>
                <Sun className="mr-2 h-4 w-4" />
                <span>{t('theme.light')}</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('dark')}>
                <Moon className="mr-2 h-4 w-4" />
                <span>{t('theme.dark')}</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('system')}>
                <Laptop className="mr-2 h-4 w-4" />
                <span>{t('theme.system')}</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                {languageFlags[currentLocale as keyof typeof languageFlags]}{' '}
                {getLanguageLabel(currentLocale)}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => switchLocale('en')}>
                {languageFlags.en} English
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => switchLocale('am')}>
                {languageFlags.am} አማርኛ
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => switchLocale('ti')}>
                {languageFlags.ti} ትግርኛ
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => switchLocale('ar')}>
                {languageFlags.ar} العربية
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <NavLink href="#about">{t('about')}</NavLink>
            <NavLink href="#education">{t('education')}</NavLink>
            <NavLink href="#experience">{t('experience')}</NavLink>
            <NavLink href="#skills">{t('skills')}</NavLink>
            {/* <NavLink href="#projects">{t("projects")}</NavLink> */}
            {/* <NavLink href="#contact">{t("contact")}</NavLink> */}
            <Button className="bg-primary text-white hover:bg-primary/90">
              {t('downloadCV')}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
