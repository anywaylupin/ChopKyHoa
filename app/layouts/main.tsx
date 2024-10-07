import { memo, useRef } from 'react';

import { cn } from '@/lib/utils';
import gsap from 'gsap';
import { useHorizontalScroll } from '@/hooks';
import { usePageSection } from '../modules';

export const LayoutMain = memo(function LayoutMain() {
  const ref = useRef<HTMLElement>(null);
  const { sections } = usePageSection();

  useHorizontalScroll(ref, gsap.utils.toArray('.panel'), 1280);

  return (
    <main
      ref={ref}
      id="home"
      className={cn('relative flex size-full max-h-full min-h-screen max-w-full flex-col', 'md:flex-row')}
    >
      <div
        className={cn('no-visible-scrollbar absolute flex h-full w-max flex-1 flex-col items-center', 'xl:flex-row')}
      >
        {sections.map(({ id, content: SectionComponent }) => (
          <SectionComponent key={id} />
        ))}
      </div>
    </main>
  );
});
