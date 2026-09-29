import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Jannatul Ferdous — Lead UI/UX Designer & Senior WordPress Engineer',
  description:
    'Bridging the gap between Figma design systems and clean, lightning-fast WordPress builds. Zero handoff friction. High-converting UI/UX & custom ACF WordPress theme architecture.',
  keywords: [
    'UI/UX Designer',
    'WordPress Specialist',
    'Figma Design Systems',
    'ACF Pro Development',
    'Bricks Builder Specialist',
    'WooCommerce Architect',
    'Core Web Vitals Optimization',
  ],
  authors: [{ name: 'Jannatul Ferdous' }],
  openGraph: {
    title: 'Jannatul Ferdous — Lead UI/UX Designer & Senior WordPress Engineer',
    description:
      'Bridging the gap between Figma design systems and clean, lightning-fast WordPress builds. Zero handoff friction.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
