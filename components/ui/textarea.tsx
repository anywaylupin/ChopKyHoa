import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

const Textarea = forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(function Textarea(
  { className, ...props },
  ref
) {
  return (
    <textarea
      draggable={false}
      className={cn(
        'flex max-h-[100px] min-h-[100px] w-full resize-none rounded-md border border-neutral-200 bg-white px-3 py-2 text-base ring-offset-white placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

export { Textarea };
