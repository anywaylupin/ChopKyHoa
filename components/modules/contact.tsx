import type { FormSchema } from '@/components/widgets/signup-form';

export function Contact() {
  const { id, heading, description } = locales.pages.contact;

  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (values: FormSchema) => {
    try {
      const subject = generateSubject(values.fullName);
      const html = generateEmailHTML(values);

      await sendEmail({ subject, html });
    } catch (error) {
      await sendTelegramMessage(`Không thể gửi email. Vui lòng kiểm tra lại hệ thống và thử lại sau:\n${error}`);
    } finally {
      await sendTelegramMessage(generateTelegramMessage(values));
      setSubmitted(true);
    }
  };

  return (
    <section
      id={id}
      className={cn('panel bg-accent text-dark z-10 h-max w-screen', 'xl:h-screen xl:max-h-screen xl:min-h-full')}
    >
      <div
        className={cn(
          'flex size-full flex-col justify-between p-4 pt-16',
          'sm:px-8 sm:pb-8',
          'md:gap-8 md:px-16 md:pb-8',
          'lg:py-16'
        )}
      >
        <div className={cn('relative flex h-full flex-1 flex-col justify-between gap-8 pt-16', 'xl:flex-row')}>
          <div className={cn('flex h-max flex-col justify-between gap-8', 'xl:max-w-[40%]', '2xl:max-w-[50%]')}>
            <h2
              className={cn(
                'small-caps text-5xl font-semibold -tracking-[2.56px] uppercase',
                'md:text-7xl md:leading-[116px]',
                'lg:text-8xl',
                '2xl:text-9xl'
              )}
            >
              {heading}
            </h2>

            <p
              className={cn(
                'text-lg leading-relaxed! -tracking-tighter text-pretty',
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
              'shadow-input relative mx-auto size-full min-h-80 gap-8 rounded-none bg-white p-4 transition-all dark:bg-black',
              'md:rounded-2xl md:p-8'
            )}
          >
            {submitted ? <FormSuccess /> : <FormContainer onSubmit={onSubmit} />}
          </div>
        </div>
      </div>
    </section>
  );
}

const getLabelFromKey = (key: keyof FormSchema): string => {
  const field = locales.pages.contact.form.fields.find(({ name }) => name === key);
  return field?.label ?? key.toString();
};

const generateSubject = (fullName: string) => `Học viên mới - ${fullName.toUpperCase()}`;

const generateEmailHTML = (values: FormSchema): string => {
  return `
      <!DOCTYPE html>
      <html lang="vi">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
              body {
                  font-family: 'Helvetica', 'Arial', sans-serif;
                  font-size: 16px;
                  line-height: 1.5;
                  color: #2c3e50;
                  margin: 0;
                  padding: 0;
                  background-color: #f5f9f6;
              }
              .email-container {
                  max-width: 700px;
                  margin: 32px auto;
                  background-color: #ffffff;
                  padding: 24px;
                  border-radius: 8px;
                  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                  border-top: 4px solid #08BD80;
              }
              .email-header {
                  color: #08BD80;
                  font-size: 32px;
                  margin-bottom: 16px;
                  text-align: center;
                  border-bottom: 1px solid #bdc3c7;
                  padding-bottom: 8px;
              }
              .email-body {
                  margin-bottom: 16px;
              }
              .info-card {
                  background-color: #f9f9f9;
                  padding: 16px;
                  border-radius: 8px;
                  margin-bottom: 12px;
                  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
                  border-left: 4px solid #08BD80;
              }
              .info-card h4 {
                  margin: 0 0 4px;
                  font-size: 20px;
                  color: #08BD80;
              }
              .info-card p {
                  margin: 0;
                  font-size: 16px;
                  color: #34495e;
              }
              .email-footer {
                  color: #7f8c8d;
                  text-align: center;
                  font-size: 16px;
                  margin-top: 24px;
                  border-top: 1px solid #bdc3c7;
                  padding-top: 8px;
                  font-style: italic;
              }
          </style>
      </head>
      <body>
          <div class="email-container">
              <h2 class="email-header">Đăng Ký Buổi Học 🎾</h2>
              <div class="email-body">
                  <p>Xin chào,</p>
                  <p>Bạn vừa nhận được một đăng ký buổi học mới. Dưới đây là thông tin chi tiết của học viên:</p>
                  ${Object.entries(values)
                    .map(
                      ([key, value]) => `
                        <div class="info-card">
                          <h4>${capitalize(getLabelFromKey(key))}</h4>
                          <p>${value ? capitalize(value) : 'Không có'}</p>
                        </div>`
                    )
                    .join('')}
                  <p>Vui lòng liên hệ với học viên để xác nhận lịch học và thông tin chi tiết.</p>
              </div>
              <div class="email-footer">
                  Đây là email tự động, vui lòng không trả lời.
              </div>
          </div>
      </body>
      </html>
    `;
};

const generateTelegramMessage = (values: FormSchema): string => {
  const escapeMarkdownV2 = (text: string): string => text.replace(/([_*[\]()~`>#+\-=|{}.!\\])/g, '\\$1');

  let message = `${escapeMarkdownV2('Bạn vừa nhận được một đăng ký buổi học mới. Dưới đây là thông tin chi tiết của học viên:')}\n\n`;

  message += Object.entries(values)
    .map(([key, value]) => {
      const label = capitalize(getLabelFromKey(key));
      const formattedValue = value ?? 'Không có';
      return `*${escapeMarkdownV2(label)}*: ${escapeMarkdownV2(formattedValue)}`;
    })
    .join('\n');

  message += `\n\n${escapeMarkdownV2('Vui lòng liên hệ với học viên để xác nhận lịch học và thông tin chi tiết.')}`;

  return message;
};
