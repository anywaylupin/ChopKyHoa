import { InfiniteScrollText } from '@/components/ui';
import { cn } from '@/lib/utils';
import { montserratAlternates } from '@/app/fonts';

const Hero = () => (
  <>
    <div className="relative flex size-full bg-dark bg-opacity-20 text-light">
      <div className="flex w-1/2 min-w-96 flex-col justify-end gap-16 bg-dark py-16 pl-16 uppercase -tracking-[2.56px] small-caps">
        <h1 className={cn(montserratAlternates.className, 'text-7xl font-semibold xl:text-8xl')}>
          Huấn luyện viên Tennis cá nhân
        </h1>
        <h2 className="text-6xl font-light xl:text-7xl">Hãy để đam mê tỏa sáng trên sân</h2>
      </div>
      <div className="w-1/2 bg-hero bg-cover bg-center bg-no-repeat"></div>
    </div>
    <InfiniteScrollText text="Chớp Kỳ Hòa" direction="forwards" speed="fast" />
  </>
);

export default Hero;
