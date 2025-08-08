import { Geist, Geist_Mono } from 'next/font/google';
import AppThemeContainer from '@/components/AppThemeContainer';
import AppProviders from './providers';

import '../../public/styles/normalize.css';
import '@xyflow/react/dist/style.css';

import type { Metadata } from 'next';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Road to Give Birth',
  description: '임산부의 출산 여정을 위한 안내 서비스',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AppProviders>
          <AppThemeContainer>{children}</AppThemeContainer>
        </AppProviders>
      </body>
    </html>
  );
}
