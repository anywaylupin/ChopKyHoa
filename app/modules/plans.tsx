import { IconCheck } from '@/components/icons';
import { Tooltip } from '@/components/ui';
import { cn } from '@/lib/utils';

const benefits = [
  {
    key: 1,
    title: 'Chương trình đào tạo và cam kết',
    list: [
      'Khóa học từ cơ bản đến nâng cao',
      'Đảm bảo thành thạo sau 6 tháng',
      'Bài tập kỹ thuật, chiến thuật, thể lực',
      'Chương trình học thiết kế bởi chuyên gia'
    ]
  },
  {
    key: 2,
    title: 'Điều kiện học tập và hỗ trợ',
    list: [
      'Chi phí thuê sân đã bao gồm',
      'Lịch học linh hoạt, phù hợp',
      'Huấn luyện viên giàu kinh nghiệm',
      'Môi trường học tập thoải mái'
    ]
  },
  {
    key: 3,
    title: 'Phát triển và giao lưu',
    list: [
      'Cơ hội tay đôi với người chơi giỏi',
      'Tham gia các giải đấu để thử sức',
      'Hỗ trợ và tư vấn cá nhân hóa',
      'Kết nối với người cùng đam mê'
    ]
  }
];

const Plans = () => {
  return (
    <section
      id="plans"
      className={cn(
        'panel relative flex h-max w-screen translate-x-0 flex-col flex-wrap items-center justify-between gap-8 bg-secondary p-6',
        'sm:p-8',
        'md:p-16',
        'xl:h-screen xl:max-h-screen xl:min-h-full xl:gap-0'
      )}
    >
      <span className={cn('min-w-full text-center text-2xl font-semibold tracking-tighter text-light', 'xl:text-end')}>
        Lợi ích khi tham gia lớp học
      </span>
      <h2
        className={cn(
          'text-center text-4xl font-semibold uppercase tracking-tighter text-light small-caps',
          'md:text-start md:text-6xl',
          'xl:text-9xl'
        )}
      >
        Lớp học Tennis & Pickle Ball
      </h2>

      <div
        className={cn(
          'flex w-full flex-col gap-8',
          'md:w-1/2 md:min-w-max',
          'xl:grid xl:w-full xl:min-w-full xl:grid-cols-3 xl:gap-16'
        )}
      >
        {benefits.map(({ key, title, list }) => (
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

export default Plans;
