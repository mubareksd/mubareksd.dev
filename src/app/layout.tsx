import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Lexend_Deca } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

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
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <a href="#main-content" className="sr-only focus:not-sr-only">
            Skip to main content
          </a>
          <main id="main-content">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
