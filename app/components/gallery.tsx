import { LayoutGrid } from '@/components/ui';
import { cn } from '@/lib/utils';
import locales from '@/locales/vn.json';

const Gallery = () => {
  const { id, heading, items } = locales.pages.gallery;

  return (
    <section
      id={id}
      className={cn(
        'panel no-visible-scrollbar h-max w-screen flex-col justify-between bg-secondary px-4 pb-4 pt-32',
        'sm:px-8 sm:pb-8',
        'md:gap-8 md:px-16 md:pb-8',
        'xl:h-screen xl:max-h-max xl:min-h-full xl:overflow-y-scroll'
      )}
    >
      <h2
        className={cn(
          'small-caps mb-8 text-nowrap text-center text-6xl font-semibold uppercase -tracking-widest text-light',
          'sm:text-7xl',
          'md:text-8xl',
          'lg:text-[200px]',
          'xl:mb-0',
          '2xl:text-[300px]'
        )}
      >
        {heading}
      </h2>

      <LayoutGrid items={items} />
    </section>
  );
};

export default Gallery;
