import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';

import { montserrat } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import locales from '@/locales/vn.json';

const title = locales.name;
const description = locales.pages.hero.heading;

export const metadata: Metadata = {
  title,
  description
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
