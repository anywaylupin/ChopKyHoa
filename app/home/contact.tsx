import { cn } from '@/lib/utils';
import locales from '@/locales/vn.json';

import { SignupForm } from '../../components/common';

const Contact = () => {
  const { id, heading, description } = locales.pages.contact;

  return (
    <section
      id={id}
      className={cn('panel z-10 h-max w-screen bg-accent text-dark', 'xl:h-screen xl:max-h-screen xl:min-h-full')}
    >
      <div
        className={cn(
          'flex size-full flex-col justify-between bg-dark bg-opacity-10 p-4 pt-16',
          'sm:px-8 sm:pb-8',
          'md:gap-8 md:px-16 md:pb-8',
          'lg:py-16'
        )}
      >
        <div className="relative flex h-full flex-1 justify-between gap-8 pt-16">
          <div className="flex h-max max-w-[50%] flex-col justify-between gap-8">
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

          <SignupForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
