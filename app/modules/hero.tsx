import { InfiniteScrollText } from '@/components/ui';
import { cn } from '@/lib/utils';
import locales from '@/locales/vn.json';
import { montserratAlternates } from '@/app/fonts';

const Hero = () => {
  const name = locales.name;
  const { heading, subheading } = locales.pages.hero;

  return (
    <section id="hero" className={cn('panel h-full max-h-screen min-h-full w-screen flex-col', 'lg:h-screen')}>
      <div className={cn('relative flex size-full flex-col bg-dark bg-opacity-20 text-light', 'xl:flex-row')}>
        <div
          className={cn(
            'absolute flex size-full w-full flex-col items-center justify-end gap-10 bg-dark bg-opacity-40 py-20 text-center uppercase small-caps',
            'sm:min-w-96 sm:justify-center sm:py-16',
            'xl:relative xl:w-1/2 xl:justify-end xl:gap-16 xl:bg-opacity-100 xl:pl-16 xl:text-start'
          )}
        >
          <h1
            className={cn(
              montserratAlternates.className,
              'w-full max-w-sm text-4xl font-semibold tracking-tighter',
              'sm:max-w-2xl sm:text-6xl',
              'md:text-7xl',
              '2xl:max-w-full 2xl:text-8xl'
            )}
          >
            {heading}
          </h1>
          <h2
            className={cn(
              'max-w-sm text-2xl font-light tracking-normal',
              'sm:max-w-2xl sm:tracking-tighter',
              'md:text-4xl',
              'lg:max-w-full',
              'xl:text-6xl',
              '2xl:text-7xl'
            )}
          >
            {subheading}
          </h2>
        </div>
        <div className={cn('size-full bg-hero bg-cover bg-center bg-no-repeat', 'xl:w-1/2')}></div>
      </div>
      <InfiniteScrollText
        className={cn('bottom-0 z-20 hidden bg-accent', 'sm:block')}
        text={name}
        direction="forwards"
        speed="fast"
      />
    </section>
  );
};

export default Hero;
