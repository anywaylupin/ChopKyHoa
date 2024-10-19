import { Dispatch, MutableRefObject, SetStateAction } from 'react';
import { Sidebar, SidebarBody, SidebarLink } from '@/components/ui';

import { ButtonFacebook } from '@/components/icons';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import gsap from 'gsap';
import locales from '@/locales/vn.json';
import social from '../social.json';
import { usePageSection } from '../modules';

type SidenavProps = PropsWithClass<{
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  tweenRef: MutableRefObject<gsap.core.Tween | undefined>;
}>;

export const Sidenav = ({ open, setOpen, tweenRef }: SidenavProps) => {
  const { isDesktop, sections } = usePageSection();

  const { addressDetails, contactDetails } = locales.pages.contact;

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
      <SidebarBody
        className={cn('fixed left-0 z-50 h-full justify-between gap-8 bg-silver pb-8 pt-36 text-dark', 'xl:pt-40')}
      >
        <div
          className={cn(
            'flex size-full flex-[2] flex-col gap-8 pl-2 text-3xl font-medium',
            'sm:text-5xl',
            'md:pl-16 md:text-3xl'
          )}
        >
          {sections.map(
            ({ id, label, icon }, idx) =>
              idx > 0 && (
                <SidebarLink key={id} label={label} icon={icon} href={`#${id}`} onClick={() => handleClick(id)} />
              )
          )}
        </div>

        <div
          className={cn(
            'flex max-h-max w-full flex-1 flex-col justify-end gap-16 pl-8 text-3xl font-medium lowercase leading-relaxed -tracking-tighter',
            'sm:text-5xl',
            'md:gap-6 md:pl-16 md:text-xl md:text-dark'
          )}
        >
          <ul className={cn('flex flex-col')}>
            {contactDetails.map(({ key, value, href }) => (
              <li key={key} aria-label={key} className="w-max">
                <Link href={href} className="animate-underline after:bg-dark" target="_blank">
                  {value}
                </Link>
              </li>
            ))}
          </ul>

          <Link href={social.googleMaps} target="_blank">
            <ul className={cn('flex flex-col')}>
              {addressDetails.map(({ key, value }) => (
                <li key={key} className="animate-underline w-max after:bg-dark">
                  {value}
                </li>
              ))}
            </ul>
          </Link>
        </div>

        <div className="flex max-h-max w-full flex-1 justify-center">
          <ButtonFacebook href={social.facebook} />
        </div>
      </SidebarBody>
    </Sidebar>
  );
};
