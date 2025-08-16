import type { RefObject } from 'react';

import ScrollToPlugin from 'gsap/ScrollToPlugin';
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';

export function useHorizontalScroll<T extends Parameters<typeof gsap.utils.toArray>[0]>(
  ref: RefObject<HTMLElement | null>,
  selector: T,
  minWidth?: number
) {
  const tweenRef = useRef<gsap.core.Tween>(null);

  const createScrollTween = useCallback(() => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    if ((minWidth && window.innerWidth < minWidth) || !ref.current) return;

    const targets = gsap.utils.toArray(selector);
    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

    tweenRef.current = gsap.to(ref.current, {
      xPercent: -100 * (targets.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: ref.current,
        pin: true,
        scrub: 1,
        snap: 1 / (targets.length - 1),
        end: () => `+=${ref.current?.offsetWidth ?? 0}`
      }
    });
  }, [minWidth, ref, selector]);

  useEffect(() => {
    createScrollTween();
    window.addEventListener('resize', createScrollTween);

    return () => {
      window.removeEventListener('resize', createScrollTween);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [createScrollTween]);

  return tweenRef;
}
