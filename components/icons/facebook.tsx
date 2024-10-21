import Link from 'next/link';

import { cn } from '@/lib/utils';

export const ButtonFacebook = ({
  href,
  className,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { href: string }) => {
  return (
    <button
      className={cn('flex h-max max-h-[88px] items-end justify-center overflow-hidden rounded-3xl', className)}
      {...rest}
    >
      <Link href={href} target="_blank" className="transition-all hover:scale-110">
        <svg xmlns="http://www.w3.org/2000/svg" width="250" height="94" viewBox="0 0 302.9 114.1" id="facebook">
          <path fill="#1877F2" d="M0 0h302.4v113.5H0z"></path>
          <g fill="#fff">
            <path d="M55.3 36.3v7.1h-3.9s-3.6-.5-3.6 2.9V52h7.5l-.9 7.7h-6.6v21.6h-8.6V59.6h-5.8V52h6.1v-6.5s-.8-3.6 2.4-6.5 7.4-2.7 7.4-2.7h6M76.1 52.1V56c-2.2-2.9-5.3-4.7-8.7-4.7-6.7 0-12.1 5.9-12.1 15.5s5.4 15.5 12.1 15.5c3.4 0 6.6-1.8 8.8-4.8l-.1 3.8h8.3V52.1h-8.3m-.5 17.6c0 2.9-2.5 5.7-5.6 5.7-3.1 0-5.6-2.8-5.6-5.7v-5.6c0-2.9 2.5-5.7 5.6-5.7 3.1 0 5.6 2.8 5.6 5.7v5.6M152.4 81.5v-3.9c2.2 2.9 5.3 4.7 8.7 4.7 6.7 0 12.1-5.9 12.1-15.5s-5.4-15.5-12.1-15.5c-3.4 0-6.6 1.8-8.8 4.8l.1-19.3-8.7 1v43.6l8.7.1m.5-17.6c0-2.9 2.5-5.7 5.6-5.7 3.1 0 5.6 2.8 5.6 5.7v5.6c0 2.9-2.5 5.7-5.6 5.7-3.1 0-5.6-2.8-5.6-5.7v-5.6M103.2 75.2s-6.7.4-6.7-8.3v-.5c0-8.6 6.7-8.3 6.7-8.3 4.5-.1 6.1 1.5 6.1 1.5l2.1-6.3c-3.6-2.7-14.5-3.1-19.4 1.4-4.2 3.9-4.2 10.2-4.2 11.9-.1 1.6-.1 8 4.2 11.9 4.9 4.5 15.8 4.1 19.4 1.4l-2.1-6.3c0 .1-1.6 1.7-6.1 1.6"></path>
            <path d="M140.1 69.9s3.5-18.3-13.2-18.4c-16.7-.1-14.3 16.5-14.3 16.5.4 10.1 5 13 13 14s14-2.1 14-2.1l-1.8-5.9s-6.4 2-11.5 1.5c-5.1-.4-4.7-5.7-4.7-5.7h18.5zM121.4 64s-.4-6.5 5.4-6.5c5.8 0 5.4 6.5 5.4 6.5h-10.8M190.5 51.7c-10.9 0-14.5 6.6-14.5 15.3 0 9.3 4.7 15.3 14.5 15.3 8 0 14.5-5.4 14.5-15.3 0-8.5-4.2-15.3-14.5-15.3m5.6 17.8c0 2.9-2.6 5.7-5.7 5.7-3.2 0-5.7-2.8-5.7-5.7v-5.6c0-2.9 2.6-5.7 5.7-5.7 3.2 0 5.7 2.8 5.7 5.7v5.6M222.6 51.7c-10.9 0-14.5 6.6-14.5 15.3 0 9.3 4.7 15.3 14.5 15.3 8 0 14.5-5.4 14.5-15.3 0-8.5-4.2-15.3-14.5-15.3m5.6 17.8c0 2.9-2.6 5.7-5.7 5.7-3.2 0-5.7-2.8-5.7-5.7v-5.6c0-2.9 2.6-5.7 5.7-5.7 3.2 0 5.7 2.8 5.7 5.7v5.6M267.6 81.4l-9.5-14.7 9.1-14.7h-9.3L249 65.2V36.6l-8.7.9v43.9h8.7V66.5l9.6 14.9z"></path>
          </g>
        </svg>
      </Link>
    </button>
  );
};