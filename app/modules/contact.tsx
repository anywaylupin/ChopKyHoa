import { CardBody, CardContainer, CardItem } from '@/components/ui';
import { IconGoogleMaps, IconZalo } from '@/components/icons';

import Link from 'next/link';
import { LottieFacebook } from '@/components/lottie';
import { cn } from '@/lib/utils';
import locales from '@/locales/vn.json';

const socialIcons = [
  { key: 'facebook', value: LottieFacebook, alt: 'Facebook', href: 'https://www.facebook.com' },
  { key: 'zalo', value: IconZalo, alt: 'Zalo', href: 'https://zalo.me' },
  { key: 'map', value: IconGoogleMaps, alt: 'Map', href: 'https://zalo.me', className: 'pb-1' }
];

const Contact = () => {
  const name = locales.name;
  const { heading, description, addressDetails, contactDetails } = locales.pages.contact;

  return (
    <section
      id="contact"
      className={cn('panel z-50 h-max w-screen bg-accent text-dark', 'xl:h-screen xl:max-h-screen xl:min-h-full')}
    >
      <div
        className={cn(
          'flex size-full flex-col justify-between bg-dark bg-opacity-10 p-4',
          'sm:p-8',
          'md:gap-8 md:px-16 md:py-8',
          'lg:py-16'
        )}
      >
        <span className={cn('hidden text-2xl font-extrabold text-dark drop-shadow-2xl', 'xl:block')}>{name}</span>

        <div className="relative flex h-full flex-1 justify-between gap-8">
          <div className="flex h-max flex-col justify-between gap-8">
            <h2
              className={cn(
                'text-5xl font-semibold uppercase -tracking-[2.56px] small-caps',
                'md:text-7xl md:leading-[116px]',
                'lg:text-8xl',
                '2xl:text-9xl'
              )}
            >
              {heading}
            </h2>

            <p
              className={cn(
                'text-pretty text-lg !leading-relaxed -tracking-tighter',
                'sm:text-xl',
                'md:text-2xl',
                'xl:text-3xl'
              )}
            >
              {description[0]}
              <br />
              {description[1]}
            </p>
          </div>

          <CardContainer
            containerClassName={cn(
              'inter-var relative hidden py-2 size-full min-w-[380px] min-h-[500px] rounded-xl bg-center',
              'lg:block',
              'xl:max-w-[500px]'
            )}
            className="size-full"
          >
            <CardBody className="group/card relative size-full rounded-xl border border-black/[0.1] bg-gray-50 p-2">
              <CardItem translateZ="50" className="size-full rounded-xl bg-[url(/img-8.jpg)] bg-center" />
            </CardBody>
          </CardContainer>
        </div>

        <aside
          className={cn(
            'flex h-max w-full flex-row flex-wrap items-end justify-between text-xl lowercase leading-relaxed -tracking-tighter',
            'md:gap-4 md:pt-8 md:text-2xl',
            'xl:text-3xl'
          )}
        >
          <div className={cn('w-full', 'lg:w-auto')}>
            <ul
              className={cn('flex max-w-48 items-end justify-start', 'md:max-w-60 lg:gap-2', 'xl:max-w-max xl:gap-0')}
            >
              {socialIcons.map(({ key, value: IconComponent, alt, className, href }) => (
                <li key={key} aria-label={alt} className={cn('w-1/3 max-w-[100px]', className)}>
                  <Link href={href} target="_blank" className="flex">
                    <IconComponent />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <ul className="relative flex flex-col">
            {contactDetails.map(({ key, value, href }) => (
              <li key={key} aria-label={key} className="w-max">
                <Link href={href} className="animate-underline after:bg-dark" target="_blank">
                  {value}
                </Link>
              </li>
            ))}
          </ul>

          <ul className={cn('mt-4 flex flex-col', 'sm:mt-0')}>
            {addressDetails.map(({ key, value }) => (
              <li key={key}>{value}</li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
