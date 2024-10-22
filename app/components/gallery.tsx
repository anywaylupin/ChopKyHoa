import { LayoutGrid } from '@/components/ui';
import { cn } from '@/lib/utils';
import locales from '@/locales/vn.json';

const Gallery = () => {
  const { id, heading, items, videos } = locales.pages.gallery;

  return (
    <section
      id={id}
      className={cn(
        'panel no-visible-scrollbar h-max w-screen flex-col justify-between gap-4 bg-secondary px-4 pb-4 pt-32',
        'sm:px-8 sm:pb-8',
        'md:gap-8 md:px-16 md:pb-8',
        'xl:h-screen xl:max-h-max xl:min-h-full xl:overflow-y-scroll'
      )}
    >
      <div className={cn('flex flex-col items-center gap-2', 'xl:flex-row')}>
        <h2
          className={cn(
            'small-caps text-nowrap text-center text-6xl font-semibold uppercase -tracking-widest text-light',
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
            className={cn('min-h-full min-w-full overflow-hidden rounded-3xl', 'xl:min-w-min xl:max-w-max')}
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
