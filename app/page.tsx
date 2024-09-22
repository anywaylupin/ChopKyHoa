'use client';

import About from './modules/about';
import Contact from './modules/contact';
import Gallery from './modules/gallery';
import Hero from './modules/hero';
import Plans from './modules/plans';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

const sections = [
  {
    id: 'hero',
    content: Hero,
    className: 'flex flex-col'
  },
  {
    id: 'about',
    content: About,
    className: 'flex justify-between bg-dark p-16 pt-28 text-light'
  },
  {
    id: 'plans',
    content: Plans,
    className: 'bg-secondary flex flex-col justify-between p-16 pt-32'
  },
  {
    id: 'contact',
    content: Contact,
    className: 'z-50 gap-36 bg-accent text-dark'
  },
  {
    id: 'gallery',
    content: Gallery,
    className: 'no-visible-scrollbar flex max-h-max flex-col justify-between overflow-y-scroll bg-secondary p-16 pt-0'
  }
];

const Home = () => {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const panels = gsap.utils.toArray('.panel');

    gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '#home',
        pin: true,
        scrub: 1,
        snap: 1 / (panels.length - 1),
        end: () => `+=${ref.current?.offsetWidth ?? 0}`
      }
    });
  });

  return (
    <main ref={ref} id="home" className="no-visible-scrollbar relative flex h-screen w-max items-center">
      <span className="fixed left-16 top-16 z-50 text-2xl font-extrabold text-accent drop-shadow-2xl">Chớp Kỳ Hòa</span>
      {sections.map(({ id, className, content: ContentComponent }) => (
        <section key={id} id={id} className={cn('panel relative h-screen max-h-screen min-h-full w-screen', className)}>
          <ContentComponent />
        </section>
      ))}
    </main>
  );
};

export default Home;
