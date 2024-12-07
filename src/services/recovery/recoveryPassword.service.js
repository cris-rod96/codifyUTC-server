import { Code, User } from '../../database/index.database.js'

const exitEmail = async (email) => {
  const code = await User.findOne({
    where: { email, isActive: true, isDeleted: false },
  })
  return code
}

const existPhone = async (phone) => {
  console.log(phone)
  const code = await User.findOne({
    where: { phone, isActive: true, isDeleted: false },
  })
  return code
}

const recoveryPassword = async (data) => {
  const { method } = data

  if (method === 'Email' && !(await exitEmail(data.email)))
    return { code: 400, message: 'Usuario no encontrado con este correo.' }

  if (method === 'SMS' && !(await existPhone(data.phone)))
    return { code: 400, message: 'Usuario no encontrado con este teléfono.' }

  const newCode = await Code.create(data)
  return newCode
    ? {
        code: 201,
        message:
          method === 'Email'
            ? 'Se envió un correo con el código de recuperación'
            : 'Se envió un SMS con el código de recuperación',
      }
    : { code: 400, message: 'No se pudo enviar el código de recuperación' }
}

export default recoveryPassword
