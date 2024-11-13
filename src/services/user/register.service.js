import { User } from '../../database/index.database.js'

const userExists = async (key, value) => {
  const user = await User.findOne({
    where: {
      [key]: value,
    },
  })
  return user
}

const registerUser = async (data) => {
  const { dni, email, phone, nick_name } = data

  const checks = await Promise.all([
    userExists('dni', dni),
    userExists('email', email),
    userExists('phone', phone),
    userExists('nick_name', nick_name),
  ])

  if (checks[0]) return { code: 400, message: 'DNI no disponible.' }
  if (checks[1]) return { code: 400, message: 'Email no disponible.' }
  if (checks[2]) return { code: 400, message: 'Teléfono no disponible.' }
  if (checks[3])
    return { code: 400, message: 'Nombre de usuario no disponible.' }

  const user = await User.create(data)

  return user
    ? {
        code: 201,
        message: 'Usuario registrado con éxito.',
      }
    : {
        code: 400,
        message: 'No se pudo registrar al usuario. Intente de nuevo.',
      }
}

export default registerUser
