declare namespace NodeJS {
  interface ProcessEnv {
    ADMIN_EMAIL_ADDRESS: string;
    RECEIVER_EMAIL_ADDRESS: string;
    OAUTH2_CLIENT_ID: string;
    OAUTH2_CLIENT_SECRET: string;
    OAUTH2_AUTHORIZATION_CODE: string;
    OAUTH2_REFRESH_TOKEN: string;
    TELEGRAM_API_BASE_URL: string;
    TELEGRAM_CHAT_ID: string;
    TELEGRAM_BOT_TOKEN: string;
  }
}
