import { useState } from 'react';

import { FormContainer, FormSuccess } from '@/components/common';
import { cn } from '@/lib/utils';
import locales from '@/locales/vn.json';

const Contact = () => {
  const { id, heading, description } = locales.pages.contact;

  const [submitted, setSubmitted] = useState(false);

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
        <div className={cn('relative flex h-full flex-1 flex-col justify-between gap-8 pt-16', 'xl:flex-row')}>
          <div className={cn('flex h-max flex-col justify-between gap-8', 'xl:max-w-[40%]', '2xl:max-w-[50%]')}>
            <h2
              className={cn(
                'small-caps text-5xl font-semibold uppercase -tracking-[2.56px]',
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

          <div
            className={cn(
              'relative mx-auto size-full min-h-80 gap-8 rounded-none bg-white p-4 shadow-input transition-all dark:bg-black',
              'md:rounded-2xl md:p-8'
            )}
          >
            {submitted ? <FormSuccess /> : <FormContainer setSubmitted={setSubmitted} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
