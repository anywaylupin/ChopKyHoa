import { OAuth2Client } from 'google-auth-library';
import { NextRequest, NextResponse } from 'next/server';
import { createTransport } from 'nodemailer';

import { EmailDto, generateEmailHTML, generateSubject } from './html';

const { ADMIN_EMAIL_ADDRESS, RECEIVER_EMAIL_ADDRESS, OAUTH2_CLIENT_ID, OAUTH2_CLIENT_SECRET, OAUTH2_REFRESH_TOKEN } =
  process.env;

const oauth2Client = new OAuth2Client(OAUTH2_CLIENT_ID, OAUTH2_CLIENT_SECRET);
oauth2Client.setCredentials({ refresh_token: OAUTH2_REFRESH_TOKEN });

export const POST = async (request: NextRequest) => {
  try {
    const values: EmailDto = await request.json();

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
      subject: generateSubject(values.fullName),
      html: generateEmailHTML(values)
    });

    return NextResponse.json({ message: 'Success: email was sent' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
};
