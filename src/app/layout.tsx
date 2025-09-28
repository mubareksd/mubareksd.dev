import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Lexend_Deca } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Analytics } from '@vercel/analytics/react';
import { env } from '@/env.mjs';

const inter = Lexend_Deca({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mubarek Seid Juhar - Software Engineer Portfolio',
  description:
    'Portfolio of Mubarek Seid Juhar, a passionate software engineer and full stack developer specializing in innovative solutions.',
  keywords: [
    'Software Engineer',
    'Full Stack Developer',
    'Web Development',
    'React',
    'Node.js',
    'JavaScript',
  ],
  authors: [{ name: 'Mubarek Seid Juhar' }],
  creator: 'Mubarek Seid Juhar',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mubareksd.dev',
    title: 'Mubarek Seid Juhar - Software Engineer Portfolio',
    description:
      'Explore the projects and skills of Mubarek Seid Juhar, an experienced software engineer and full stack developer.',
    siteName: 'Mubarek Seid Juhar Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mubarek Seid Juhar - Software Engineer Portfolio',
    description:
      'Discover the innovative projects and expertise of Mubarek Seid Juhar, a skilled software engineer and full stack developer.',
    creator: '@mubareksd',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const maintenanceMode = env.MAINTENANCE_MODE === '1';

  if (maintenanceMode) {
    return (
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="flex flex-col items-center justify-center h-screen">
              <h1 className="text-4xl font-bold text-primary-800 mb-4">
                Under Maintenance
              </h1>
              <p className="text-lg text-primary-600">
                We&apos;ll be back soon.
              </p>
            </div>
          </ThemeProvider>
        </body>
      </html>
    );
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <a href="#main-content" className="sr-only focus:not-sr-only">
            Skip to main content
          </a>
          <main id="main-content">{children}</main>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
