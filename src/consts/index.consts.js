import 'dotenv/config'

export const {
  PORT = 3000,
  NODE_ENV = 'development',
  DB_DEV,
  DB_PROD,
} = process.env
