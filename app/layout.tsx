import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';

import { montserrat } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import locales from '@/locales/vn.json';

const description = locales.pages.hero.heading;
const title = `${locales.name} | ${description}`;

export const metadata: Metadata = {
  title,
  description,
  openGraph: { type: 'website', title, description },
  twitter: { card: 'summary_large_image', title, description },
  metadataBase: new URL('https://chopkyhoa.vercel.app/')
};

const RootLayout = ({ children }: Readonly<React.PropsWithChildren>) => (
  <html lang="en">
    <body
      className={cn(
        montserrat.className,
        'no-visible-scrollbar relative m-0 overflow-x-hidden overflow-y-visible scroll-smooth'
      )}
    >
      {children}
      <Analytics />
    </body>
  </html>
);

export default RootLayout;
