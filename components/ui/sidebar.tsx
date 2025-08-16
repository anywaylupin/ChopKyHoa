'use client';

import { AnimatePresence, motion } from 'motion/react';
import Link, { type LinkProps } from 'next/link';
import { createContext } from 'react';

type SidebarContextProps = { open: boolean; setOpen: React.Dispatch<React.SetStateAction<boolean>>; animate: boolean };

const SidebarContext = createContext<SidebarContextProps>({ open: false, setOpen: () => {}, animate: false });

function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context) throw new Error('useSidebar must be used within a SidebarProvider');
  return context;
}

export function SidebarProvider({
  children,
  open,
  setOpen,
  animate = true
}: PropsWithClass<Partial<SidebarContextProps>>) {
  const [openState, setOpenState] = useState(false);

  const providerProps = useMemo(
    () => ({ open: open ?? openState, setOpen: setOpen ?? setOpenState, animate }),
    [animate, open, openState, setOpen]
  );

  return <SidebarContext.Provider value={providerProps}>{children}</SidebarContext.Provider>;
}

export function Sidebar({ children, open, setOpen, animate }: PropsWithClass<Partial<SidebarContextProps>>) {
  return (
    <SidebarProvider open={open} setOpen={setOpen} animate={animate}>
      {children}
    </SidebarProvider>
  );
}

export function SidebarBody(props: PropsWithClass<React.ComponentProps<typeof motion.div>>) {
  return (
    <>
      <DesktopSidebar {...props} />
      <MobileSidebar {...(props as React.ComponentProps<'div'>)} />
    </>
  );
}

export function DesktopSidebar({
  className,
  children,
  ...props
}: PropsWithClass<React.ComponentProps<typeof motion.div>>) {
  const { open, setOpen, animate } = useSidebar();

  return (
    <motion.div
      className={cn(
        'hidden h-full shrink-0 justify-between overflow-hidden shadow-2xl',
        'md:flex md:flex-col',
        className
      )}
      animate={{ width: !animate || !open ? '0' : '400px' }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function MobileSidebar({ className, children, ...rest }: React.ComponentProps<'div'>) {
  const { open, setOpen } = useSidebar();

  return (
    <div className={cn('absolute top-10 left-10', 'md:hidden')} {...rest}>
      <button className={cn('bg-dark fixed top-10 left-10 z-50 rounded-xl p-2 text-white shadow-2xl', 'sm:top-8')}>
        <IconMenu2 className={cn('size-8', 'sm:size-12')} onClick={() => setOpen(!open)} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={cn(
              'fixed inset-0 z-100 flex h-full w-full flex-col justify-between bg-white p-10 dark:bg-neutral-900',
              className
            )}
          >
            <button
              className={cn(
                'text-dark hover:bg-silver fixed top-10 left-10 z-50 rounded-xl p-2 shadow-2xl transition',
                'sm:top-8'
              )}
              onClick={() => setOpen(!open)}
            >
              <IconX className={cn('size-8', 'sm:size-12')} />
            </button>
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function SidebarLink({
  label,
  icon,
  className,
  ...rest
}: PropsWithClass<{ label: string; icon: StringNode } & LinkProps>) {
  const { open, animate } = useSidebar();

  return (
    <Link className={cn('group/sidebar flex items-center justify-start gap-10', 'md:gap-6', className)} {...rest}>
      {icon}

      <motion.span
        animate={{ display: !animate || !open ? 'none' : 'inline-block', opacity: !animate || !open ? 0 : 1 }}
        className="m-0! inline-block p-0! whitespace-pre transition duration-150 group-hover/sidebar:translate-x-2"
      >
        {label}
      </motion.span>
    </Link>
  );
}
