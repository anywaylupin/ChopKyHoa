import Link from 'next/link';

export function Title({ setOpen }: PropsWithClass<{ setOpen: DispatchState }>) {
  const { isMobile, isDesktop } = usePageSection({ pages: locales.pages, templates });

  return (
    <div
      className={cn(
        'pointer-events-none fixed top-6 right-10 z-50 flex w-full items-center justify-end gap-4 py-6 transition-all',
        'xs:right-auto xs:justify-center',
        'md:z-50',
        'xl:top-4 xl:left-14 xl:w-auto'
      )}
    >
      <button
        className={cn(
          'bg-dark pointer-events-auto absolute hidden rounded-xl p-2 text-white shadow-2xl',
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
          'text-accent pointer-events-auto text-xl font-extrabold [text-shadow:0px_1px_8px_black]',
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
}
