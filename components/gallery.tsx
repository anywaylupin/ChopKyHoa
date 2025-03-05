import { LayoutGrid } from '@/components/ui';
import { cn } from '@/lib/utils';
import locales from '@/locales/vn.json';

const Gallery = () => {
  const { id, heading, items, videos } = locales.pages.gallery;

  return (
    <section
      id={id}
      className={cn(
        'panel no-visible-scrollbar bg-secondary h-max w-screen flex-col justify-between gap-4 px-4 pt-32 pb-4',
        'sm:px-8 sm:pb-8',
        'md:gap-8 md:px-16 md:pb-8',
        'xl:h-screen xl:max-h-max xl:min-h-full xl:overflow-y-scroll'
      )}
    >
      <div className={cn('flex flex-col items-center gap-2', 'xl:flex-row')}>
        <h2
          className={cn(
            'small-caps text-light text-center text-6xl font-semibold -tracking-widest text-nowrap uppercase',
            'sm:text-7xl',
            'md:mb-8 md:text-8xl',
            'lg:text-[200px]',
            'xl:mb-0',
            '2xl:text-[250px]'
          )}
        >
          {heading}
        </h2>

        <div className="flex w-full items-center justify-end overflow-hidden rounded-3xl">
          <video
            className={cn('min-h-full min-w-full overflow-hidden rounded-3xl', 'xl:max-w-max xl:min-w-min')}
            src={videos[1].src}
            autoPlay
            muted
            loop
            playsInline
          ></video>
        </div>
      </div>

      <LayoutGrid items={items} />
    </section>
  );
};

export default Gallery;
