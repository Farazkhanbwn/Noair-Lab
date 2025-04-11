import '../polyfills';

import { PropsWithChildren } from 'react';
import { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import '../src/styles/globals.css';
import ClientProvider from '@/providers/ClientProvider';

export const metadata: Metadata = {
  title: 'Noair Lab - Social Media for Researchers',
  description:
    'Connect with fellow researchers, share your findings, and collaborate on groundbreaking projects. Noair Lab is the premier social media platform for academic and scientific networking.',
};

const WorkSans = Work_Sans({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={WorkSans.className}>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
