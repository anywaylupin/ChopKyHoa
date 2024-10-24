import { LottieBolt } from '@/components/lottie';
import { cn } from '@/lib/utils';

const Loading = ({ className, loading = true }: PropsWithClass<{ loading?: boolean }>) => (
  <section
    className={cn(
      'fixed z-[9999] flex size-full max-h-full min-h-screen max-w-full items-center justify-center overflow-hidden bg-dark transition-all duration-1000 ease-in-out',
      { 'w-0': !loading },
      className
    )}
  >
    <div className="relative flex size-full items-center justify-center gap-4">
      <LottieBolt className={cn('absolute size-max max-w-[200px]', 'md:max-w-max')} />
    </div>
  </section>
);

export default Loading;
