import { IconCheck } from '@/components/icons';
import { cn } from '@/lib/utils';

const Plans = () => {
  const cards = [
    {
      key: 'tennis-basic',
      title: 'Lớp Tennis Cơ bản',
      description: 'Mô tả',
      benefits: ['Thông tin lớp học', 'Thông tin lớp học', 'Thông tin lớp học', 'Thông tin lớp học']
    },
    {
      key: 'tennis-advanced',
      title: 'Lớp Tennis Nâng cao',
      description: 'Mô tả',
      benefits: ['Thông tin lớp học', 'Thông tin lớp học', 'Thông tin lớp học', 'Thông tin lớp học']
    },
    {
      key: 'pickleball',
      title: 'Lớp Pickleball',
      description: 'Mô tả',
      benefits: ['Thông tin lớp học', 'Thông tin lớp học', 'Thông tin lớp học']
    }
  ];

  return (
    <>
      <h2 className="text-9xl font-semibold uppercase -tracking-[2.56px] text-light small-caps">
        Lớp học
        <br />
        Tennis
      </h2>

      <div className="flex w-full flex-nowrap justify-between gap-8">
        {cards.map(({ key, title, benefits }) => (
          <div key={key} className="inline-flex flex-1 flex-col items-start gap-10 rounded-2xl bg-light p-16">
            <h5 className="text-4xl font-semibold capitalize leading-10 tracking-tighter text-dark">{title}</h5>

            <ul className="flex w-full flex-col gap-6">
              {benefits.map((benefit, i) => (
                <li
                  key={`${benefit}-${i}`}
                  className={cn('flex gap-2 text-base leading-[120%] tracking-tight text-dark', {
                    'border-b border-b-silver pb-6': i < benefits.length - 1
                  })}
                >
                  <IconCheck fill="#D7FF01"></IconCheck> {benefit}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default Plans;
