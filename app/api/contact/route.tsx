import { OAuth2Client } from 'google-auth-library';
import { NextRequest, NextResponse } from 'next/server';
import { createTransport } from 'nodemailer';

interface EmailValues {
  name: string;
  email?: string;
  phone?: string;
  [key: string]: string | undefined;
}

const { ADMIN_EMAIL_ADDRESS, RECEIVER_EMAIL_ADDRESS, OAUTH2_CLIENT_ID, OAUTH2_CLIENT_SECRET, OAUTH2_REFRESH_TOKEN } =
  process.env;

const oauth2Client = new OAuth2Client(OAUTH2_CLIENT_ID, OAUTH2_CLIENT_SECRET);
oauth2Client.setCredentials({ refresh_token: OAUTH2_REFRESH_TOKEN });

export const POST = async (request: NextRequest) => {
  try {
    const values: EmailValues = await request.json();

    const { token } = await oauth2Client.getAccessToken();

    if (!token) throw new Error(`Access token not found`);

    const transporter = createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: ADMIN_EMAIL_ADDRESS,
        clientId: OAUTH2_CLIENT_ID,
        clientSecret: OAUTH2_CLIENT_SECRET,
        refreshToken: OAUTH2_REFRESH_TOKEN,
        accessToken: token
      }
    });

    if (!ADMIN_EMAIL_ADDRESS || !RECEIVER_EMAIL_ADDRESS) {
      return NextResponse.json({ message: 'Missing email credentials' }, { status: 500 });
    }

    await transporter.sendMail({
      from: ADMIN_EMAIL_ADDRESS,
      to: RECEIVER_EMAIL_ADDRESS,
      subject: `Đăng ký buổi học tennis mới - ${values.name}`,
      html: generateEmailHTML(values)
    });

    return NextResponse.json({ message: 'Success: email was sent' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
};

const generateEmailHTML = (values: EmailValues): string => {
  return `
    <div style="font-family: Arial, sans-serif; font-size: 16px; line-height: 1.5; color: #333;">
      <h2 style="color: #0055ff; font-size: 20px;">Đăng ký buổi học tennis mới 🎾</h2>
      <p>Xin chào,</p>
      <p>Bạn vừa nhận được một đăng ký buổi học tennis mới. Dưới đây là thông tin chi tiết của học viên:</p>
      <table style="width: 100%; max-width: 600px; margin: 20px 0; border-collapse: collapse;">
        ${Object.entries(values)
          .map(
            ([key, value]) => `
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>${key}</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">${value ?? 'Không có lời nhắn thêm.'}</td>
              </tr>`
          )
          .join('')}
      </table>
      <p>Vui lòng liên hệ với học viên để xác nhận lịch học và thông tin chi tiết.</p>
      <p style="color: #555;">Trân trọng,<br>Đội ngũ huấn luyện tennis</p>
    </div>
  `;
};
