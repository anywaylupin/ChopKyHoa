import { cn } from '@/lib/utils';
import Image from 'next/image';

const About = () => (
  <section
    id="about"
    className={cn(
      'panel relative flex h-max w-screen translate-x-0 flex-col justify-between gap-12 bg-dark p-16 pt-28 text-light',
      'xl:h-screen xl:max-h-screen xl:min-h-full xl:flex-row'
    )}
  >
    <div className={cn('flex flex-col-reverse justify-between gap-12', 'lg:flex-col')}>
      <div className="flex flex-col gap-12">
        <h2
          className={cn('text-5xl font-semibold uppercase leading-snug -tracking-[2.56px] small-caps', 'xl:text-6xl')}
        >
          Hãy tham gia các lớp học của tôi
        </h2>
        <div className="text-4xl leading-[50px] -tracking-tighter">
          Tennis không chỉ là một môn thể thao, mà là một phong cách sống đầy đam mê và cống hiến.
        </div>
      </div>

      <div className="relative flex max-w-[1037px] justify-center overflow-hidden rounded-2xl">
        <Image className="!w-max" src="/about.jpg" fill sizes="" alt="Aside" />
      </div>
    </div>

    <aside className={cn('hidden h-full flex-col items-end gap-8', 'xl:flex xl:max-w-[584px]')}>
      <div className="relative size-max max-w-max">
        <Image src="/about-aside.png" fill sizes="" alt="Aside" />
      </div>

      <div className="w-full">
        <p className="text-end text-4xl lowercase leading-[50px] tracking-tighter text-light">
          Hãy dấn thân vào Thế Giới Tennis, nơi niềm đam mê hòa quyện cùng sự kịch tính của từng trận đấu.
        </p>
      </div>
    </aside>
  </section>
);

export default About;
