import Image from 'next/image';

const About = () => (
  <>
    <div className="flex flex-col justify-between">
      <h2 className="text-6xl font-semibold uppercase leading-[116px] -tracking-[2.56px] small-caps">
        Hãy tham gia các lớp học của tôi
      </h2>
      <div className="text-4xl leading-[50px] -tracking-tighter">
        Tennis không chỉ là một môn thể thao, mà là một phong cách sống đầy đam mê và cống hiến.
      </div>

      <div className="relative max-w-[1037px] overflow-hidden rounded-2xl">
        <Image src="/about.jpg" fill sizes="" alt="Aside" />
      </div>
    </div>

    <aside className="flex h-full max-w-[584px] flex-col gap-8">
      <div className="relative size-max">
        <Image src="/about-aside.png" fill sizes="" alt="Aside" />
      </div>

      <div className="w-full">
        <p className="text-4xl lowercase leading-[50px] tracking-tighter text-light">
          Hãy dấn thân vào Thế Giới Tennis, nơi niềm đam mê hòa quyện cùng sự kịch tính của từng trận đấu.
        </p>
      </div>
    </aside>
  </>
);

export default About;
