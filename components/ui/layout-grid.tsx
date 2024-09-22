'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export const LayoutGrid = ({ className, items }: PropsWithClass<{ items: LayoutGridItem[] }>) => (
  <div className={cn('relative flex flex-wrap gap-4', className)}>
    {items.map((item, i) => (
      <motion.div
        key={`${item.id}-${i}`}
        layoutId={`card-${item.id}`}
        className={cn(
          'min-h-[628px] min-w-[400px] flex-1 gap-10 overflow-hidden rounded-2xl bg-light bg-cover bg-center bg-no-repeat',
          item.className
        )}
        style={{ backgroundImage: `url(/${item.src})` }}
      />
    ))}
  </div>
);

export type LayoutGridItem = { id: number; className?: string; src: string };
