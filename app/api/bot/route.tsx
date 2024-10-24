import { NextRequest, NextResponse } from 'next/server';

import { TelegramMessageDto } from '@/lib/services';

const { TELEGRAM_API_BASE_URL, TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } = process.env;

export const POST = async (request: NextRequest) => {
  try {
    const res: TelegramMessageDto = await request.json();

    await fetch(`${TELEGRAM_API_BASE_URL}/bot${TELEGRAM_BOT_TOKEN}/${res.method}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, parse_mode: 'MarkdownV2', ...res.body })
    });

    return NextResponse.json({ success: true, message: 'Message sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: 'Error sending message.', error }, { status: 500 });
  }
};
