import { cn } from '@/lib/utils';
import Image from 'next/image';
import locales from '@/locales/vn.json';

const About = () => {
  const { heading, subheading, description } = locales.pages.about;

  return (
    <section
      id="about"
      className={cn(
        'panel h-max w-screen translate-x-0 flex-col justify-between gap-12 bg-dark px-4 py-12 text-light',
        'sm:p-8',
        'md:p-16 md:pt-28',
        'xl:h-screen xl:max-h-screen xl:min-h-full xl:flex-row'
      )}
    >
      <div className={cn('flex flex-col-reverse justify-between gap-12', 'lg:flex-col')}>
        <div className={cn('flex flex-col gap-4', 'md:gap-12')}>
          <h2
            className={cn(
              'text-center text-3xl font-semibold uppercase leading-snug -tracking-[2.56px] small-caps',
              'md:text-start md:text-5xl',
              'xl:text-6xl'
            )}
          >
            {heading}
          </h2>
          <div
            className={cn(
              'text-center text-xl leading-relaxed -tracking-tighter',
              'md:text-start md:text-4xl',
              'lg:leading-loose'
            )}
          >
            {subheading}
          </div>
        </div>

        <div className="relative flex max-w-[1037px] justify-center overflow-hidden rounded-2xl">
          <Image className="!w-max" src="/about.jpg" fill sizes="" alt="Aside" />
        </div>
      </div>

      <aside className={cn('hidden h-full flex-col items-end gap-8', 'xl:flex xl:max-w-[584px]')}>
        <div className="relative size-max max-w-max">
          <Image src="/about-aside.png" fill sizes="" alt="Aside" />
        </div>

        <div className="w-full">
          <p className="text-end text-4xl lowercase leading-[50px] tracking-tighter text-light">{description}</p>
        </div>
      </aside>
    </section>
  );
};

export default About;
