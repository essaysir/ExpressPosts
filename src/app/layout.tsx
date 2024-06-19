import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CJ터미널',
  description: 'CJ 터미널 현황',
  manifest: '/static/manifest.json',
  icons: [{ rel: 'icon', url: '/static/logo-256x256.png', sizes: '256x256' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
