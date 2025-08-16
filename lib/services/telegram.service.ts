export interface TelegramMessageDto {
  method: string;
  body: Record<string, unknown>;
}

export async function sendTelegramMessage(text: string) {
  try {
    const body: TelegramMessageDto = { method: 'sendMessage', body: { parse_mode: 'MarkdownV2', text } };

    const res = await fetch('/api/bot', { method: 'POST', body: JSON.stringify(body) });

    if (!res.ok) throw new Error(res.statusText);

    return res;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
