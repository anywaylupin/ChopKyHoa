'use client';

import lottie, { AnimationConfigWithData, AnimationConfigWithPath, AnimationItem } from 'lottie-web';
import { CSSProperties, forwardRef, useEffect, useRef } from 'react';

import { cn } from '@/lib/utils';

type BaseLottieProps = { className?: string; style?: CSSProperties } & Partial<AnimationConfigWithPath> &
  Partial<AnimationConfigWithData>;

export const BaseLottie = forwardRef<HTMLDivElement, BaseLottieProps>(function BaseLottie(
  { className = '', style, loop = false, autoplay = false, ...rest },
  ref
) {
  const internalRef = useRef<HTMLDivElement>(null);
  const animationInstance = useRef<AnimationItem | null>(null);

  useEffect(() => {
    const containerRef = (ref as React.RefObject<HTMLDivElement>)?.current ?? internalRef.current;
    if (!containerRef) return;

    animationInstance.current = lottie.loadAnimation({
      renderer: 'svg',
      container: containerRef,
      loop,
      autoplay,
      ...rest
    });

    return () => animationInstance.current?.destroy();
  }, [autoplay, loop, ref, rest]);

  const handleMouseEnter = () => {
    animationInstance.current?.play();
    animationInstance.current?.setLoop(true);
  };

  const handleMouseLeave = () => {
    animationInstance.current?.setLoop(false);
  };

  return (
    <span
      aria-hidden
      ref={ref || internalRef}
      className={cn('flex', className)}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    ></span>
  );
});
