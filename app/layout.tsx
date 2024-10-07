import './globals.css';

import type { Metadata } from 'next';
import { cn } from '@/lib/utils';
import { montserrat } from '@/app/fonts';

export const metadata: Metadata = {
  title: 'Chop Ky Hoa',
  description: 'Next App /w Aceternity UI'
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
    </body>
  </html>
);

export default RootLayout;
