'use client';

import { Sidebar, SidebarBody, SidebarLink } from '@/components/ui';
import { useRef, useState } from 'react';

import { IconMenu2 } from '@tabler/icons-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { gsap } from 'gsap';
import locales from '@/locales/vn.json';
import { useHorizontalScroll } from '@/hooks';
import { usePageSection } from './modules';

const Home = () => {
  const ref = useRef<HTMLElement>(null);

  const { sections } = usePageSection();
  const [open, setOpen] = useState(false);

  useHorizontalScroll(ref, gsap.utils.toArray('.panel'), 1280);

  return (
    <main
      ref={ref}
      id="home"
      className={cn('relative flex size-full max-h-full min-h-screen max-w-full flex-col', 'md:flex-row')}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className={cn('fixed z-50 h-full bg-light', 'md:bg-dark')}>
          <div
            className={cn('flex size-full flex-1 flex-col gap-16 overflow-hidden pl-2 pt-36', 'md:pl-16', 'xl:pt-44')}
          >
            {sections.map(
              ({ id, label, icon }, idx) =>
                idx > 0 && (
                  <SidebarLink
                    key={id}
                    className={cn('text-3xl font-medium text-dark', 'sm:text-5xl', 'md:text-2xl md:text-light')}
                    label={label}
                    icon={icon}
                    href={`#${id}`}
                    onClick={() => setOpen(false)}
                  />
                )
            )}
          </div>
        </SidebarBody>
      </Sidebar>

      <div
        className={cn('no-visible-scrollbar absolute flex h-full w-max flex-1 flex-col items-center', 'xl:flex-row')}
      >
        <div
          className={cn(
            'fixed top-6 z-50 flex items-center justify-center gap-4 py-6 transition-all',
            'md:w-full',
            'xl:left-14 xl:top-4 xl:w-auto'
          )}
        >
          <button
            className={cn(
              'absolute hidden rounded-xl bg-dark p-2 text-white shadow-2xl',
              'md:left-14 md:block',
              'xl:relative xl:left-0'
            )}
            onMouseEnter={() => window.innerWidth >= 768 && setOpen(true)}
            onMouseLeave={() => window.innerWidth >= 768 && setOpen(false)}
          >
            <IconMenu2 className="size-12" />
          </button>
          <Link
            className="text-center text-2xl font-extrabold text-accent [text-shadow:0px_1px_8px_black]"
            href="#hero"
            onMouseEnter={() => window.innerWidth >= 1280 && setOpen(true)}
            onMouseLeave={() => window.innerWidth >= 1280 && setOpen(false)}
          >
            {locales.name}
          </Link>
        </div>

        {sections.map(({ id, content: SectionComponent }) => (
          <SectionComponent key={id} />
        ))}
      </div>
    </main>
  );
};

export default Home;
