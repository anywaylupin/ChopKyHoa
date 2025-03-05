import './globals.css';

import type { Metadata } from 'next';
import { Suspense } from 'react';

import { montserrat } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import locales from '@/locales/vn.json';

const title = `${locales.name} | ${locales.pages.hero.heading}`;
const description = locales.pages.hero.subheading;

export const metadata: Metadata = {
  title,
  description,
  openGraph: { type: 'website', title, description, siteName: title, url: locales.domain },
  twitter: { card: 'summary_large_image', title, description },
  metadataBase: new URL('https://thaivanthuc.vercel.app/')
};

const RootLayout = ({ children }: Readonly<React.PropsWithChildren>) => (
  <html lang="en">
    <body
      className={cn(
        montserrat.className,
        'no-visible-scrollbar relative m-0 overflow-x-hidden overflow-y-visible scroll-smooth'
      )}
    >
      <Suspense>{children}</Suspense>
    </body>
  </html>
);

export default RootLayout;
