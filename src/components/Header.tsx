"use client"

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { Button } from "@/components/ui/button"
import { Menu, X, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const t = useTranslations('header')
  const pathname = usePathname()
  const { setTheme, theme } = useTheme()

  const switchLocale = (locale: string) => {
    const currentPathname = pathname.replace(/^\/[a-z]{2}/, '')
    window.location.href = `/${locale}${currentPathname}`
  }

  const getLanguageLabel = (locale: string) => {
    switch (locale) {
      case 'en': return 'EN'
      case 'am': return 'አማ'
      case 'ti': return 'ትግ'
      case 'ar': return 'عر'
      default: return locale.toUpperCase()
    }
  }

  const currentLocale = pathname.split('/')[1]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link className="flex items-center space-x-2" href="/">
          <span className="font-bold text-xl text-primary">MSD</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="#about" className="nav-link">{t('about')}</Link>
          <Link href="#education" className="nav-link">{t('education')}</Link>
          <Link href="#experience" className="nav-link">{t('experience')}</Link>
          <Link href="#projects" className="nav-link">{t('projects')}</Link>
          <Link href="#contact" className="nav-link">{t('contact')}</Link>
        </nav>
        <div className="flex items-center space-x-4">
          {/* <Button className="hidden md:inline-flex bg-primary text-white hover:bg-primary/90">{t('downloadCV')}</Button> */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                {getLanguageLabel(currentLocale)}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => switchLocale('en')}>
                English
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => switchLocale('am')}>
                አማርኛ
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => switchLocale('ti')}>
                ትግርኛ
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => switchLocale('ar')}>
                العربية
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="ghost" size="icon" className="md:hidden text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <Link href="#about" className="nav-link">{t('about')}</Link>
            <Link href="#education" className="nav-link">{t('education')}</Link>
            <Link href="#experience" className="nav-link">{t('experience')}</Link>
            <Link href="#projects" className="nav-link">{t('projects')}</Link>
            <Link href="#contact" className="nav-link">{t('contact')}</Link>
            <Button className="bg-primary text-white hover:bg-primary/90">{t('downloadCV')}</Button>
          </nav>
        </div>
      )}
    </header>
  )
}