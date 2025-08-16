import gsap from 'gsap';
import Link from 'next/link';

type SidenavProps = PropsWithClass<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  tweenRef: React.RefObject<gsap.core.Tween | null>;
}>;

export function Sidenav({ open, setOpen, tweenRef }: SidenavProps) {
  const { isDesktop, sections } = usePageSection({ pages: locales.pages, templates });

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
        className={cn(
          'bg-silver text-dark fixed left-0 z-50 h-full justify-between pt-28 pb-8',
          'xs:gap-8',
          'xl:pt-40'
        )}
      >
        <div
          className={cn(
            'flex size-full flex-2 flex-col gap-8 pb-6 pl-2 text-xl font-medium',
            'sm:pb-0 sm:text-2xl',
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
            'flex max-h-max w-full max-w-full flex-1 flex-col items-center gap-2 text-base leading-relaxed font-medium -tracking-tighter lowercase',
            'sm:mb-8 sm:flex-row sm:justify-between sm:pl-8 sm:text-lg',
            'md:text-dark md:flex-col md:items-start md:justify-end md:gap-6 md:pl-16 md:text-xl'
          )}
        >
          <ul className={cn('flex flex-col items-center', 'sm:items-start')}>
            {contactDetails.map(({ key, value, href }) => (
              <li key={key} aria-label={key} className="w-max">
                <Link href={href} className="animate-underline after:bg-dark" target="_blank">
                  {value}
                </Link>
              </li>
            ))}
          </ul>

          <Link href={GOOGLE_MAP_ADDRESS} target="_blank">
            <ul className={cn('flex flex-col items-center', 'sm:items-start')}>
              {addressDetails.map(({ key, value }) => (
                <li key={key} className="animate-underline after:bg-dark w-max">
                  {value}
                </li>
              ))}
            </ul>
          </Link>
        </div>

        <div className={cn('flex max-h-max w-full flex-1 scale-75 justify-center', 'sm:scale-100')}>
          <ButtonFacebook href={FACEBOOK_LINK} />
        </div>
      </SidebarBody>
    </Sidebar>
  );
}
