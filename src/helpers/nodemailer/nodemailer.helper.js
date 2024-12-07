import fs from 'fs'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import nodemailer from 'nodemailer'
import { NODEMAILER_CONFIG } from '../../config/nodemailer.config.js'
const generatePathName = (fileName) => {
  const __dirname = dirname(fileURLToPath(import.meta.url))
  const pathname = path.join(__dirname, `../../html/${fileName}.html`)
  return pathname
}

const send = (to, file, subject) => {
  const transporter = nodemailer.createTransport(NODEMAILER_CONFIG)
  transporter.sendMail({
    from: 'crisrodam1996@gmail.com',
    to,
    subject,
    html: file,
  })
}

const welcome = (to, name, code) => {
  const pathname = generatePathName('welcome')
  const file = fs
    .readFileSync(pathname, { encoding: 'utf-8' })
    .toString()
    .replace('${name}', name)
    .replace('${code}', code)
  send(to, file, 'CodifyUTC - Bienvenido')
}

const confirmActivation = (to) => {
  const pathname = generatePathName('confirm-activation')
  const file = fs.readFileSync(pathname, { encoding: 'utf-8' }).toString()
  send(to, file, 'Worknet - Cuenta Activada')
}
const confirmPassword = (to) => {
  const pathname = generatePathName('confirm-pasword')
  const file = fs.readFileSync(pathname, { encoding: 'utf-8' }).toString()
  send(to, file, 'Worknet - Contraseña actualizada')
}

const recoveryPassword = (to, code) => {
  const pathname = generatePathName('recovery-password')
  const file = fs
    .readFileSync(pathname, { encoding: 'utf-8' })
    .toString()
    .replace('${code}', code)

  send(to, file, 'Recuperación de contraseña')
}

export default {
  recoveryPassword,
  welcome,
  confirmActivation,
  confirmPassword,
}
