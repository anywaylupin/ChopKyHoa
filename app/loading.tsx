import { cn } from '@/lib/utils';

const Loading = ({ className, loading = true }: PropsWithClass<{ loading?: boolean }>) => (
  <section
    className={cn(
      'fixed z-[9999] flex size-full max-h-full min-h-screen max-w-full items-center justify-center overflow-hidden bg-secondary transition-all duration-1000 ease-in-out',
      { 'w-0': !loading },
      className
    )}
  >
    <div className="relative flex size-full items-center justify-center gap-4">
      {['delay-0', 'delay-100', 'delay-200'].map((delay, i) => (
        <div key={`${delay}-${i}`} className="relative flex">
          <span className={cn('tennis-ball animate-loading bg-primary transition-transform', delay)}></span>
        </div>
      ))}
    </div>
  </section>
);

export default Loading;
