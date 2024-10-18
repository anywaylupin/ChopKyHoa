'use client';

import { useCallback, useRef, useState } from 'react';
import { Sidebar, SidebarBody, SidebarLink } from '@/components/ui';

import { IconMenu2 } from '@tabler/icons-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import gsap from 'gsap';
import locales from '@/locales/vn.json';
import { usePageSection } from './modules';
import { useHorizontalScroll } from '@/hooks';

const Home = () => {
  const ref = useRef<HTMLElement>(null);

  const tweenRef = useHorizontalScroll(ref, '.panel', 1280);

  const [open, setOpen] = useState(false);
  const { sections, isMobile, isDesktop } = usePageSection();

  const onNavClick = useCallback(
    (sectionId: string) => {
      setOpen(false);

      const tween = tweenRef.current;
      if (!isDesktop() || !ref.current || !tween?.scrollTrigger) return;

      const target = document.getElementById(sectionId);
      if (target) {
        const totalScroll = tween.scrollTrigger.end - tween.scrollTrigger.start;
        const totalMovement = (sections.length - 1) * target.offsetWidth;

        const y = Math.round(tween.scrollTrigger.start + (target.offsetLeft / totalMovement) * totalScroll);

        gsap.to(window, { scrollTo: { y, autoKill: false }, duration: 1 });
      }
    },
    [isDesktop, sections.length, tweenRef]
  );

  return (
    <>
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className={cn('fixed left-0 z-50 h-full bg-light', 'md:bg-dark')}>
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
                    onClick={() => onNavClick(id)}
                  />
                )
            )}
          </div>
        </SidebarBody>
      </Sidebar>

      <div
        className={cn(
          'pointer-events-none fixed right-10 top-6 z-50 flex w-full items-center justify-end gap-4 py-6 transition-all',
          'xs:right-auto xs:justify-center',
          'md:z-50',
          'xl:left-14 xl:top-4 xl:w-auto'
        )}
      >
        <button
          className={cn(
            'pointer-events-auto absolute hidden rounded-xl bg-dark p-2 text-white shadow-2xl',
            'md:left-14 md:block',
            'xl:relative xl:left-0'
          )}
          onMouseEnter={() => !isMobile() && setOpen(true)}
          onMouseLeave={() => !isMobile() && setOpen(false)}
        >
          <IconMenu2 className="size-12" />
        </button>
        <Link
          className={cn(
            'pointer-events-auto text-xl font-extrabold text-accent [text-shadow:0px_1px_8px_black]',
            'sm:text-center sm:text-2xl'
          )}
          href="#hero"
          onMouseEnter={() => isDesktop() && setOpen(true)}
          onMouseLeave={() => isDesktop() && setOpen(false)}
        >
          {locales.name}
        </Link>
      </div>

      <main
        ref={ref}
        id="home"
        className={cn('relative flex size-full max-h-full min-h-screen max-w-full flex-col', 'md:flex-row')}
      >
        <div
          className={cn('no-visible-scrollbar absolute flex h-full w-max flex-1 flex-col items-center', 'xl:flex-row')}
        >
          {sections.map(({ id, content: SectionComponent }) => (
            <SectionComponent key={id} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
