import Image from 'next/image';

import { cn } from '@/lib/utils';
import locales from '@/locales/vn.json';

const About = () => {
  const { id, heading, subheading, description } = locales.pages.about;

  return (
    <section
      id={id}
      className={cn(
        'panel bg-dark text-light h-max w-screen translate-x-0 flex-col justify-between gap-12 px-4 pt-32 pb-12',
        'sm:px-8 sm:pb-8',
        'md:px-16 md:pb-16',
        'xl:h-screen xl:max-h-screen xl:min-h-full xl:flex-row'
      )}
    >
      <div className={cn('flex flex-col-reverse justify-between gap-12', 'lg:flex-col')}>
        <div className={cn('flex flex-col gap-4', 'md:gap-12')}>
          <h2
            className={cn(
              'small-caps text-center text-3xl leading-snug font-semibold -tracking-[2.56px] uppercase',
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

          <div className="w-full xl:hidden">
            <p
              className={cn(
                'text-light text-center text-xl leading-relaxed -tracking-tighter lowercase',
                'md:text-start md:text-4xl',
                'lg:leading-loose'
              )}
            >
              {description}
            </p>
          </div>
        </div>

        <div className="relative flex min-h-[200px] max-w-[1037px] items-center justify-center overflow-hidden rounded-2xl">
          <Image className="absolute h-max min-w-full" src="/images/about.jpg" fill sizes="1037px" alt="About" />
        </div>
      </div>

      <aside className={cn('hidden h-full flex-col items-end gap-8', 'xl:flex xl:max-w-[500px]', '2xl:max-w-[584px]')}>
        <div className="relative size-max max-w-full overflow-hidden rounded-2xl">
          <Image src="/images/about-aside.jpg" fill sizes="500px" alt="Aside" />
        </div>

        <div className="w-full">
          <p className="text-light text-end text-4xl leading-[50px] tracking-tighter lowercase">{description}</p>
        </div>
      </aside>
    </section>
  );
};

export default About;
