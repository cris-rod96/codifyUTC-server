import { GMAIL_DIR, GMAIL_PASSWORD } from '../consts/index.consts.js'

export const NODEMAILER_CONFIG = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: GMAIL_DIR,
    pass: GMAIL_PASSWORD,
  },
}
