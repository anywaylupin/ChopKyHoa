import { Dispatch, MutableRefObject, SetStateAction } from 'react';
import { Sidebar, SidebarBody, SidebarLink } from '@/components/ui';

import { cn } from '@/lib/utils';
import gsap from 'gsap';
import { usePageSection } from '../modules';

type SidenavProps = PropsWithClass<{
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  tweenRef: MutableRefObject<gsap.core.Tween | undefined>;
}>;

export const Sidenav = ({ open, setOpen, tweenRef }: SidenavProps) => {
  const { isDesktop, sections } = usePageSection();

  const handleClick = (id: string) => {
    setOpen(false);

    const tween = tweenRef.current;
    if (!isDesktop() || !tween?.scrollTrigger) return;

    const target = document.getElementById(id);

    if (target) {
      const totalScroll = tween.scrollTrigger.end - tween.scrollTrigger.start;
      const totalMovement = (sections.length - 1) * target.offsetWidth;

      const y = Math.round(tween.scrollTrigger.start + (target.offsetLeft / totalMovement) * totalScroll);

      gsap.to(window, { scrollTo: { y, autoKill: false }, duration: 1 });
    }
  };

  return (
    <Sidebar open={open} setOpen={setOpen}>
      <SidebarBody className={cn('fixed left-0 z-50 h-full bg-light', 'md:bg-dark')}>
        <div className={cn('flex size-full flex-1 flex-col gap-16 overflow-hidden pl-2 pt-36', 'md:pl-16', 'xl:pt-44')}>
          {sections.map(
            ({ id, label, icon }, idx) =>
              idx > 0 && (
                <SidebarLink
                  key={id}
                  className={cn('text-3xl font-medium text-dark', 'sm:text-5xl', 'md:text-2xl md:text-light')}
                  label={label}
                  icon={icon}
                  href={`#${id}`}
                  onClick={() => handleClick(id)}
                />
              )
          )}
        </div>
      </SidebarBody>
    </Sidebar>
  );
};
