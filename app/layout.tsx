import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Raghunandan Dasa | AI-Powered Product & Operational Builder',
  description:
    'Executive portfolio of Raghunandan Dasa showcasing AI-driven product development, operational workflow automation, and engineering case studies.',
  openGraph: {
    title: 'Raghunandan Dasa | AI-Powered Product & Operational Builder',
    description:
      'Product builder who leverages AI to build software that solves operational problems and eliminates manual workflow friction.',
    url: 'https://raghudasa.dev',
    siteName: 'Raghunandan Dasa Portfolio',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark`}>
      <body className="bg-zinc-950 text-zinc-100 font-sans antialiased min-h-screen selection:bg-zinc-800 selection:text-white flex flex-col justify-between">
        <Navigation />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
