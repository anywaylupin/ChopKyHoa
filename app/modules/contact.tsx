import { IconGoogleMaps, IconZalo } from '@/components/icons';

import Image from 'next/image';
import Link from 'next/link';
import { LottieFacebook } from '@/components/lottie';

const socialIcons = [
  { key: 'facebook', value: LottieFacebook, alt: 'Facebook', href: 'https://www.facebook.com' },
  { key: 'zalo', value: IconZalo, alt: 'Zalo', href: 'https://zalo.me' },
  { key: 'map', value: IconGoogleMaps, alt: 'Map', href: 'https://zalo.me', className: 'pb-1' }
];

const contactDetails = [
  { key: 'phone', value: '(+84) 123-4567', href: 'tel:+841234567' },
  { key: 'email', value: 'chopkyhoa@gmail.com', href: 'mailto:chopkyhoa@gmail.com' }
];

const addressDetails = [
  { key: 'venue', value: '[Tên Sân]' },
  { key: 'ward', value: 'Phường 12, Quận 10' },
  { key: 'city', value: 'Thành phố Hồ Chí Minh' }
];

const Contact = () => (
  <div className="flex size-full justify-between bg-dark bg-opacity-10 p-16">
    <div className="relative flex h-full flex-col justify-between gap-8">
      <span className="text-2xl font-extrabold text-dark drop-shadow-2xl">Chớp Kỳ Hòa</span>
      <h2 className="text-9xl font-semibold uppercase leading-[116px] -tracking-[2.56px] small-caps">Liên hệ</h2>
      <div>
        <p className="text-balance text-3xl leading-relaxed -tracking-tighter">
          Sẵn sàng khám phá Thế Giới Tennis đầy đam mê và kịch tính? Đừng bỏ lỡ cơ hội tham gia khóa học đặc biệt cùng
          huấn luyện viên tận tâm và giàu kinh nghiệm!
          <br />
          Cùng nhau, chúng ta sẽ chinh phục những đỉnh cao mới trong môn thể thao tuyệt vời này!
        </p>
      </div>

      <ul className="flex items-end">
        {socialIcons.map(({ key, value: IconComponent, alt, className, href }) => (
          <li key={key} aria-label={alt} className={className}>
            <Link href={href} target="_blank">
              <IconComponent />
            </Link>
          </li>
        ))}
      </ul>
    </div>

    <aside className="flex h-full max-w-[1037px] flex-col justify-between gap-8">
      <div className="relative size-max">
        <Image src="/contact.png" fill sizes="" alt="Contact" />
      </div>

      <div className="flex w-full items-end justify-between text-3xl lowercase leading-[50px] -tracking-tighter">
        <ul className="relative flex flex-col">
          {contactDetails.map(({ key, value, href }) => (
            <li key={key} aria-label={key} className="w-max">
              <Link href={href} className="animate-underline after:bg-dark" target="_blank">
                {value}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="flex flex-col">
          {addressDetails.map(({ key, value }) => (
            <li key={key}>{value}</li>
          ))}
        </ul>
      </div>
    </aside>
  </div>
);

export default Contact;
