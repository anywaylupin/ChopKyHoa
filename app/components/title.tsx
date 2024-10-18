import { Dispatch, SetStateAction } from 'react';

import { IconMenu2 } from '@tabler/icons-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import locales from '@/locales/vn.json';
import { usePageSection } from '../modules';

export const Title = ({ setOpen }: PropsWithClass<{ setOpen: Dispatch<SetStateAction<boolean>> }>) => {
  const { isMobile, isDesktop } = usePageSection();

  return (
    <div
      className={cn(
        'pointer-events-none fixed right-10 top-6 z-50 flex w-full items-center justify-end gap-4 py-6 transition-all',
        'xs:right-auto xs:justify-center',
        'md:z-50',
        'xl:left-14 xl:top-4 xl:w-auto'
      )}
    >
      <button
        className={cn(
          'pointer-events-auto absolute hidden rounded-xl bg-dark p-2 text-white shadow-2xl',
          'md:left-14 md:block',
          'xl:relative xl:left-0'
        )}
        onMouseEnter={() => !isMobile() && setOpen(true)}
        onMouseLeave={() => !isMobile() && setOpen(false)}
      >
        <IconMenu2 className="size-12" />
      </button>
      <Link
        className={cn(
          'pointer-events-auto text-xl font-extrabold text-accent [text-shadow:0px_1px_8px_black]',
          'sm:text-center sm:text-2xl'
        )}
        href="#hero"
        onMouseEnter={() => isDesktop() && setOpen(true)}
        onMouseLeave={() => isDesktop() && setOpen(false)}
      >
        {locales.name}
      </Link>
    </div>
  );
};
