declare namespace NodeJS {
  interface ProcessEnv {
    ADMIN_EMAIL_ADDRESS: string;
    RECEIVER_EMAIL_ADDRESS: string;
    OAUTH2_CLIENT_ID: string;
    OAUTH2_CLIENT_SECRET: string;
    OAUTH2_AUTHORIZATION_CODE: string;
    OAUTH2_REFRESH_TOKEN: string;
  }
}
