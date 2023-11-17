const isTest = () => (process.env.NODE_ENV === 'test' ? true : false);
const dbPort = isTest()
  ? process.env.DATABASE_PORT_TEST
  : process.env.DATABASE_PORT;

export default () => ({
  port: parseInt(process.env.PORT, 10) || 8080,
  database: {
    username: isTest()
      ? process.env.DATABASE_USERNAME_TEST
      : process.env.DATABASE_USERNAME,
    password: isTest()
      ? process.env.DATABASE_PASSWORD_TEST
      : process.env.DATABASE_PASSWORD,
    database: isTest()
      ? process.env.DATABASE_NAME_TEST
      : process.env.DATABASE_NAME,
    host: isTest() ? process.env.DATABASE_HOST_TEST : process.env.DATABASE_HOST,
    port: Number(dbPort),
  },
  serverAppUrl: process.env.SERVER_APP_URL,
  reactAppUrl: process.env.REACT_APP_URL,
  localAppUrl: process.env.LOCAL_APP_URL,
  accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
  refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET,
  flutterwavePublicKey: process.env.FLUTTERWAVE_PUBLIC_KEY,
  flutterwaveSecretKey: process.env.FLUTTERWAVE_SECRET_KEY,
  flutterwaveEncryptionKey: process.env.FLUTTERWAVE_ENCRYPTION_KEY,
  smartSmsToken: process.env.SMARTSMS_TOKEN,
  smartSmsSenderId: process.env.SMARTSMS_SENDERID,
  smartSmsRouting: process.env.SMARTSMS_ROUTING,
  smartSmsType: process.env.SMARTSMS_TYPE,
  smartSmsApiEndpoint: process.env.SMARTSMS_API_ENDPOINT,
  hashTokenSecret: process.env.HASH_TOKEN_SECRET,
  subbsMailSenderAddress: process.env.SUBBS_MAIL_SENDERADDRESS,
  mailjetApiKey: process.env.MAILJET_API_KEY,
  mailjetApiSecret: process.env.MAILJET_API_SECRET,
  twilioAccountSSID: process.env.TWILIO_ACCOUNT_SSID,
  twilioAuthToken: process.env.TWILIO_AUTH_TOKEN,
  timezone: process.env.TZ,
  identityPassPrivateKey: process.env.IDENTITYPASS_PRIVATE_KEY,
  identityPassAppId: process.env.IDENTITYPASS_APP_ID,
  subbsMerchantId: process.env.SUBBS_MERCHANT_ID,
  otpSmsSenderId: process.env.OTP_SMS_SENDER_ID,
  otpSmsTemplateId: process.env.OTP_SMS_TEMPLATE_ID,
  otpSmsSenderName: process.env.OTP_SMS_SENDER_NAME,
});
