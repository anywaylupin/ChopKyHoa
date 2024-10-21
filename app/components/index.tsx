import { IconBallTennis, IconInfoCircle, IconPhone, IconPhoto, IconSmartHome } from '@tabler/icons-react';
import { cloneElement, useMemo } from 'react';

import { cn } from '@/lib/utils';
import locales from '@/locales/vn.json';

import About from './about';
import Benefits from './benefits';
import Contact from './contact';
import Gallery from './gallery';
import Hero from './hero';

const templates = {
  hero: { icon: <IconSmartHome />, content: Hero },
  about: { icon: <IconInfoCircle />, content: About },
  benefits: { icon: <IconBallTennis />, content: Benefits },
  contact: { icon: <IconPhone />, content: Contact },
  gallery: { icon: <IconPhoto />, content: Gallery }
};

export const usePageSection = () => {
  const sections = useMemo(
    () =>
      Object.entries(locales.pages).map(([key, { id, label }]) => {
        const { icon, content } = templates[key as keyof typeof templates];
        const clonedIcon = cloneElement(icon, { className: cn('size-8 flex-shrink-0', 'md:size-12') });

        return { id, label, content, icon: clonedIcon };
      }),
    []
  );

  const isMobile = () => window.innerWidth < 768;
  const isDesktop = () => window.innerWidth >= 1280;

  return { sections, isMobile, isDesktop };
};
