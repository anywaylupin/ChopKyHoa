import './globals.css';

import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';
import { Suspense } from 'react';

const title = `${locales.name} | ${locales.pages.hero.heading}`;
const description = locales.pages.hero.subheading;

export const metadata: Metadata = {
  title,
  description,
  openGraph: { type: 'website', title, description, siteName: title, url: locales.domain },
  twitter: { card: 'summary_large_image', title, description },
  metadataBase: new URL(process.env.NEXT_PUBLIC_DOMAIN_URL)
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
    <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_ANALYTICS_ID} />
  </html>
);

export default RootLayout;
