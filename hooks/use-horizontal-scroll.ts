import gsap, { ScrollToPlugin, ScrollTrigger } from 'gsap/all';
import { RefObject, useCallback, useEffect } from 'react';

export const useHorizontalScroll = <T extends ReturnType<typeof gsap.utils.toArray>>(
  ref: RefObject<HTMLElement>,
  targets: T,
  minWidth?: number
) => {
  const handleResize = useCallback(() => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    if ((minWidth && window.innerWidth < minWidth) || !ref.current) return;

    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

    const totalWidth = ref.current.offsetWidth;

    gsap.to(targets, {
      xPercent: -100 * (targets.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: ref.current,
        pin: true,
        scrub: 1,
        snap: 1 / (targets.length - 1),
        end: () => `+=${totalWidth}`
      }
    });
  }, [minWidth, ref, targets]);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [handleResize]);
};
