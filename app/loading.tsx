import Image from 'next/image';

export default function Loading({ className, loading = true }: PropsWithClass<{ loading?: boolean }>) {
  return (
    <section
      className={cn(
        'bg-dark fixed z-9999 flex size-full max-h-full min-h-screen max-w-full items-center justify-center overflow-hidden transition-all duration-1000 ease-in-out',
        { 'w-0': !loading },
        className
      )}
    >
      <div className="relative flex size-full items-center justify-center gap-4">
        <Image
          className={cn('absolute size-max max-w-[200px]', 'md:max-w-max')}
          src="/bolt.gif"
          alt="Loading"
          fill
          sizes=""
          unoptimized
        />
      </div>
    </section>
  );
}
