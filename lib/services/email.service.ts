import { SendMailOptions } from 'nodemailer';

export interface EmailDto extends SendMailOptions {
  subject: string;
  html: string;
}

export const sendEmail = async (values: EmailDto) => {
  try {
    const res = await fetch('/api/email', { method: 'POST', body: JSON.stringify(values) });

    if (!res.ok) throw new Error(res.statusText);

    return res;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
