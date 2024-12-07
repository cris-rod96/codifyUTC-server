import 'dotenv/config'

export const {
  PORT = 3000,
  NODE_ENV = 'development',
  DB_DEV,
  DB_PROD,
  SECRET_WORD,
  CLOUDINARY_URL,
  GMAIL_DIR,
  GMAIL_PASSWORD,
  TWILIO_NUM,
  TWILIO_SID,
  TWILIO_AUTH_TOKEN,
} = process.env
