'use client';

import { useCallback, useEffect, useMemo, useRef } from 'react';

import About from './modules/about';
import Benefits from './modules/benefits';
import Contact from './modules/contact';
import Gallery from './modules/gallery';
import Hero from './modules/hero';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';
import { gsap } from 'gsap';
import locales from '@/locales/vn.json';

const Home = () => {
  const ref = useRef<HTMLElement>(null);

  const sections = useMemo(
    () => [
      { id: 'hero', content: Hero },
      { id: 'about', content: About },
      { id: 'benefits', content: Benefits },
      { id: 'contact', content: Contact },
      { id: 'gallery', content: Gallery }
    ],
    []
  );

  const handleResize = useCallback(() => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    if (window.innerWidth >= 1280) {
      gsap.registerPlugin(ScrollTrigger);

      const panels = gsap.utils.toArray('.panel');

      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: 'none',
        duration: 0.1,
        scrollTrigger: {
          trigger: '#home',
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => `+=${ref.current?.offsetWidth ?? 0}`
        }
      });
    }
  }, []);

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return (
    <main
      ref={ref}
      id="home"
      className={cn('no-visible-scrollbar relative flex h-screen w-max flex-col items-center', 'xl:flex-row')}
    >
      <span
        className={cn(
          'fixed top-16 z-50 text-center text-2xl font-extrabold text-accent drop-shadow-2xl',
          'xl:left-16'
        )}
      >
        {locales.name}
      </span>
      {sections.map(({ id, content: SectionComponent }) => (
        <SectionComponent key={id} />
      ))}
    </main>
  );
};

export default Home;
