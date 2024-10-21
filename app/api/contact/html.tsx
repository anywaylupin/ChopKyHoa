import { capitalize } from '@/lib/utils';
import locales from '@/locales/vn.json';

export interface EmailDto {
  fullName: string;
  email?: string;
  phone?: string;
  [key: string]: string | undefined;
}

export const getLabelFromKey = (key: keyof EmailDto): string => {
  const field = locales.pages.contact.form.fields.find(({ name }) => name === key);
  return field?.label ?? key.toString();
};

export const generateSubject = (fullName: string) => `Học viên mới - ${fullName.toUpperCase()}`;

export const generateEmailHTML = (values: EmailDto): string => {
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
                  border-top: 4px solid #2ecc71;
              }
              .email-header {
                  color: #2ecc71;
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
                  border-left: 4px solid #2ecc71;
              }
              .info-card h4 {
                  margin: 0 0 4px;
                  font-size: 20px;
                  color: #2ecc71;
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
              <h2 class="email-header">Đăng Ký Buổi Học Tennis 🎾</h2>
              <div class="email-body">
                  <p>Xin chào,</p>
                  <p>Bạn vừa nhận được một đăng ký buổi học tennis mới. Dưới đây là thông tin chi tiết của học viên:</p>
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
