import { IconCheck } from '@/components/icons';
import { Tooltip } from '@/components/ui';
import { cn } from '@/lib/utils';
import locales from '@/locales/vn.json';

const Benefits = () => {
  const { id, heading, items: benefitItems } = locales.pages.benefits;
  const [video] = locales.pages.gallery.videos;

  return (
    <section
      id={id}
      className={cn(
        'panel h-max w-screen translate-x-0 flex-col items-center gap-8 bg-secondary px-6 pb-6 pt-32',
        'sm:px-8 sm:pb-8',
        'md:px-16 md:pb-16',
        'xl:h-screen xl:max-h-screen xl:min-h-full xl:flex-row xl:items-stretch'
      )}
    >
      <div
        className={cn(
          'order-2 flex w-full max-w-[500px] flex-col items-center justify-center overflow-hidden rounded-3xl',
          'xl:order-1 xl:min-h-full xl:max-w-[27.5%]',
          '2xl:max-w-[30%]'
        )}
      >
        <video
          className={cn('min-h-full min-w-full overflow-hidden rounded-3xl', 'xl:min-w-min xl:max-w-max')}
          src={video.src}
          autoPlay
          muted
          loop
          playsInline
        ></video>
      </div>

      <div
        className={cn(
          'order-1 flex w-full flex-col items-center justify-between gap-8',
          'xl:h-full xl:gap-0',
          '2xl:gap-4'
        )}
      >
        <h2
          className={cn(
            'small-caps relative h-full max-h-max text-center text-4xl font-semibold uppercase tracking-tighter text-light',
            'md:text-6xl',
            'xl:text-start xl:text-7xl',
            '2xl:text-8xl 2xl:-tracking-widest'
          )}
        >
          {heading}
        </h2>

        <div
          className={cn(
            'relative flex max-h-full w-full flex-1 flex-col gap-8',
            'md:w-1/2 md:min-w-max',
            'xl:grid xl:w-full xl:min-w-full xl:grid-cols-3 xl:gap-4'
          )}
        >
          {benefitItems.map(({ key, title, list }) => (
            <div
              key={key}
              className={cn(
                'inline-flex max-h-full flex-col items-start justify-between gap-6 rounded-2xl bg-light p-6',
                'md:gap-8 md:p-8'
              )}
            >
              <h5
                className={cn(
                  'text-xl font-semibold capitalize leading-10 tracking-tighter text-dark',
                  'md:text-2xl',
                  'xl:text-3xl',
                  '2xl:text-4xl'
                )}
              >
                {title}
              </h5>

              <ul className="flex size-full flex-col justify-center gap-6 overflow-hidden">
                {list.map((description, i) => (
                  <li
                    key={`${key}-${i}`}
                    className={cn('flex w-full items-center gap-4', {
                      'border-b border-b-silver pb-3 2xl:pb-4': i < list.length - 1
                    })}
                  >
                    <IconCheck fill="#D7FF01"></IconCheck>
                    <Tooltip
                      className={cn(
                        'line-clamp-2 w-full text-start text-sm leading-tight tracking-tight text-dark',
                        'md:text-lg',
                        '2xl:text-xl'
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
      </div>
    </section>
  );
};

export default Benefits;
