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
      message: 'Acceso denegado. Usuario no encontrado.',
    }

  if (!user.isActive)
    return { code: 401, message: 'Acceso denegado. Activa tu cuenta.' }

  if (!user.role) {
    return {
      code: 401,
      message: 'Acceso denegado. Rol no asignado.',
    }
  }

  const isValidPassword = await bcryptUtl.comparePassword(
    password,
    user.password
  )

  if (!isValidPassword)
    return { code: 401, message: 'Acceso denegado. Credenciales incorrectas.' }

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
