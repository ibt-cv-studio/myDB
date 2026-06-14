import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'UniversalDB - Free Cloud Database Platform',
  description: 'The most accessible, scalable, and developer-friendly database platform in the world.',
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-zinc-950 text-white antialiased">{children}</body>
    </html>
  );
}
