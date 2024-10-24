export interface TelegramMessageDto {
  method: string;
  body: Record<string, unknown>;
}

export const sendTelegramMessage = async <T extends TelegramMessageDto['body']>(payload: T) => {
  try {
    const body: TelegramMessageDto = { method: 'sendMessage', body: payload };

    const res = await fetch('/api/bot', { method: 'POST', body: JSON.stringify(body) });

    if (!res.ok) throw new Error(res.statusText);

    return res;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
