import { LayoutGrid } from '@/components/ui';

const Gallery = () => {
  const cards = [
    { id: 1, src: 'img-1.jpg' },
    { id: 2, src: 'img-2.jpg' },
    { id: 3, src: 'img-3.jpg' },
    { id: 4, src: 'img-4.jpg' },
    { id: 5, src: 'img-5.jpg' },
    { id: 6, src: 'img-6.jpg' },
    { id: 7, src: 'img-7.jpg' },
    { id: 8, src: 'img-8.jpg' },
    { id: 9, src: 'img-9.jpg' },
    { id: 10, src: 'img-10.jpg' },
    { id: 11, src: 'img-11.jpg' },
    { id: 12, src: 'img-12.jpg' }
  ];

  return (
    <section
      id="gallery"
      className="panel no-visible-scrollbar relative flex h-screen max-h-max min-h-full w-screen flex-col justify-between overflow-y-scroll bg-secondary p-16 pt-0"
    >
      <h2 className="text-nowrap text-center text-[300px] font-semibold uppercase -tracking-[9.36px] text-light small-caps">
        Thư viện
      </h2>
      <LayoutGrid items={cards} />
    </section>
  );
};

export default Gallery;
