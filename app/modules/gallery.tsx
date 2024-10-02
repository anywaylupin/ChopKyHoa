import { LayoutGrid } from '@/components/ui';
import { cn } from '@/lib/utils';
import locales from '@/locales/vn.json';

const Gallery = () => {
  const { heading, items } = locales.pages.gallery;

  return (
    <section
      id="gallery"
      className={cn(
        'panel no-visible-scrollbar relative flex h-max w-screen flex-col justify-between bg-secondary p-4',
        'sm:p-8',
        'md:gap-8 md:px-16 md:py-8',
        'xl:h-screen xl:max-h-max xl:min-h-full xl:overflow-y-scroll'
      )}
    >
      <h2
        className={cn(
          'text-nowrap text-center text-6xl font-semibold uppercase -tracking-widest text-light small-caps',
          'sm:text-7xl',
          'md:text-8xl',
          'lg:text-[200px]',
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
