import { InfiniteScrollText } from '@/components/ui';
import { cn } from '@/lib/utils';
import { montserratAlternates } from '@/app/fonts';

const Hero = () => (
  <section id="hero" className="panel relative flex h-screen max-h-screen min-h-full w-screen flex-col">
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
            'w-full font-semibold tracking-tighter',
            'max-w-sm text-4xl',
            'sm:max-w-2xl sm:text-6xl',
            'lg:max-w-full lg:text-8xl'
          )}
        >
          Huấn luyện viên Tennis cá nhân
        </h1>
        <h2
          className={cn(
            'max-w-sm text-2xl font-light tracking-normal',
            'sm:max-w-2xl sm:tracking-tighter',
            'lg:max-w-full lg:text-6xl',
            'xl:text-7xl'
          )}
        >
          Hãy để đam mê tỏa sáng trên sân
        </h2>
      </div>
      <div className={cn('size-full bg-hero bg-cover bg-center bg-no-repeat', 'xl:w-1/2')}></div>
    </div>
    <InfiniteScrollText
      className={cn('bottom-0 z-20 hidden bg-accent', 'sm:block')}
      text="Chớp Kỳ Hòa"
      direction="forwards"
      speed="fast"
    />
  </section>
);

export default Hero;
