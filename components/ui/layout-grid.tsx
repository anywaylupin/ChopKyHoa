'use client';

import { cn } from '@/lib/utils';

import { CardContainer, CardItem } from './3d-card';

export const LayoutGrid = ({ className, items }: PropsWithClass<{ items: LayoutGridItem[] }>) => (
  <div className={cn('relative grid grid-cols-12 gap-4', className)}>
    {items.map((item, i) => (
      <CardContainer
        key={`${item.id}-${i}`}
        containerClassName={cn(
          'size-full min-h-[300px] col-span-12 gap-10 overflow-hidden rounded-2xl bg-light',
          'sm:col-span-6 sm:min-h-[400px]',
          'md:min-h-[450px]',
          'lg:col-span-4 lg:min-h-[400px]',
          'xl:col-span-3 xl:min-h-[600px]',
          item.className
        )}
        className="size-full"
      >
        <CardItem
          translateZ="200"
          className="size-full rounded-xl bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(/${item.src})` }}
        />
      </CardContainer>
    ))}
  </div>
);

export type LayoutGridItem = { id: number; className?: string; src: string };
