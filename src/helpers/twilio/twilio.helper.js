import twilio from 'twilio'
import {
  TWILIO_AUTH_TOKEN,
  TWILIO_NUM,
  TWILIO_SID,
} from '../../consts/index.consts.js'

const cliente = twilio(TWILIO_SID, TWILIO_AUTH_TOKEN)

const messages = {
  activation:
    'Hola, tu código de activación para Codify UTC es: ${code}. Usa este código para completar tu registro.',
  recovery:
    'Hola, tu código de restablecimiento de contraseña para Codify UTC es: ${code}. Usa este código para restablecer tu contraseña.',
}

const generateMessage = (type, code) => {
  return messages[type].replace('${code}', code)
}

const sendMessage = (phone, code, type) => {
  cliente.messages
    .create({
      body: generateMessage(type, code),
      from: TWILIO_NUM,
      to: `+593${phone.slice(1)}`,
    })
    .then((res) => {
      console.log('Mensaje enviado')
    })
    .catch((err) => {
      console.log('Mensajo no enviado: ', err.message)
    })
}

export default { sendMessage }
