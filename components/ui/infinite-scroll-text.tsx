'use client';

export function InfiniteScrollText({
  text,
  direction = 'forwards',
  speed = 'fast',
  pauseOnHover = false,
  className
}: InfiniteScrollTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);

  const textList = typeof text === 'string' ? [text, text] : text;

  useEffect(() => {
    if (!ref.current || !scrollerRef.current) return;
    const container = ref.current;
    const scrollerContent = Array.from(scrollerRef.current.children);
    scrollerContent.forEach((item) => scrollerRef.current?.appendChild(item.cloneNode(true)));

    container.style.setProperty('--animation-direction', direction);

    switch (speed) {
      case 'fast':
        container.style.setProperty('--animation-duration', '20s');
        break;
      case 'normal':
        container.style.setProperty('--animation-duration', '40s');
        break;
      case 'slow':
        container.style.setProperty('--animation-duration', '80s');
        break;
      default:
        container.style.setProperty('--animation-duration', `${speed}s`);
        break;
    }

    setStart(true);
  }, [direction, speed]);

  return (
    <div ref={ref} className={cn('relative w-full overflow-hidden', className)}>
      <ul
        ref={scrollerRef}
        className={cn('flex w-max min-w-full flex-nowrap', '*:min-w-[20%] *:text-center *:text-2xl *:font-extrabold', {
          'animate-scroll': start,
          'hover:[animation-play-state:paused]': pauseOnHover
        })}
      >
        {textList.map((txt, i) => (
          <li key={`${txt}-${i}`} className="relative max-w-full py-6">
            <span>{text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

type InfiniteScrollTextProps = PropsWithClass<{
  className?: string;
  text: string[] | string;
  direction?: 'forwards' | 'reverse';
  speed?: 'fast' | 'normal' | 'slow' | number;
  pauseOnHover?: boolean;
}>;
