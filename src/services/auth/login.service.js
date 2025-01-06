import { User } from '../../database/index.database.js'
import { jwtUtl, bcryptUtl } from '../../utils/index.utils.js'

const login = async (email, password) => {
  if (!email || !password)
    return { code: 401, message: 'Email y contraseña son obligatorios' }

  const user = await User.findOne({
    where: {
      email,
      isDeleted: false,
    },
  })

  if (!user)
    return {
      code: 401,
      message: 'Credenciales incorrectas. Usuario no encontrado',
    }

  if (!user.isActive)
    return { code: 401, message: 'Ingreso incorrecto. Activa tu cuenta.' }

  const isValidPassword = await bcryptUtl.comparePassword(
    password,
    user.password
  )

  if (!isValidPassword)
    return { code: 401, message: 'Credenciales Incorrectas. Intente de nuevo.' }

  const token = jwtUtl.generateToken({
    id: user.id,
    email: user.email,
    role: user.role,
  })

  const userResponse = user.get({ plain: true })

  delete userResponse.password

  return {
    code: 200,
    user: userResponse,
    token,
  }
}

export default login
