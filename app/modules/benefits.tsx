import { IconCheck } from '@/components/icons';
import { Tooltip } from '@/components/ui';
import { cn } from '@/lib/utils';

import locales from '@/locales/vn.json';

const Benefits = () => {
  const { heading, subheading, items: benefitItems } = locales.pages.benefits;

  return (
    <section
      id="plans"
      className={cn(
        'panel relative flex h-max w-screen translate-x-0 flex-col items-center justify-between gap-8 bg-secondary p-6',
        'sm:p-8',
        'md:p-16',
        'xl:h-screen xl:max-h-screen xl:min-h-full xl:gap-0'
      )}
    >
      <span className={cn('min-w-full text-center text-2xl font-semibold tracking-tighter text-light', 'xl:text-end')}>
        {subheading}
      </span>
      <h2
        className={cn(
          'relative h-full max-h-max text-center text-4xl font-semibold uppercase tracking-tighter text-light small-caps',
          'md:text-6xl',
          'lg:text-start',
          'xl:absolute xl:px-16 xl:pt-16 xl:text-9xl'
        )}
      >
        {heading}
      </h2>

      <div
        className={cn(
          'relative flex w-full flex-col gap-8',
          'md:w-1/2 md:min-w-max',
          'xl:grid xl:w-full xl:min-w-full xl:grid-cols-3 xl:gap-16'
        )}
      >
        {benefitItems.map(({ key, title, list }) => (
          <div
            key={key}
            className={cn(
              'inline-flex flex-col items-start justify-between gap-6 rounded-2xl bg-light p-6',
              'md:gap-8 md:p-8'
            )}
          >
            <h5 className={cn('text-xl font-semibold capitalize leading-10 tracking-tighter text-dark', 'md:text-4xl')}>
              {title}
            </h5>

            <ul className="flex w-full flex-col items-start gap-6 overflow-hidden">
              {list.map((description, i) => (
                <li
                  key={`${key}-${i}`}
                  className={cn('flex w-full items-start gap-2', {
                    'border-b border-b-silver pb-3 md:pb-6': i < list.length - 1
                  })}
                >
                  <IconCheck fill="#D7FF01"></IconCheck>
                  <Tooltip
                    className={cn(
                      'w-full overflow-hidden text-ellipsis whitespace-nowrap text-start text-sm leading-tight tracking-tight text-dark',
                      'md:text-xl'
                    )}
                    label={description}
                  >
                    {description}
                  </Tooltip>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
