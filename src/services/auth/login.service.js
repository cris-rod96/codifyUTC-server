import { Class, Course, User } from '../../database/index.database.js'
import { bcryptUtl, jwtUtl } from '../../utils/index.utils.js'
const formatUserResponse = (user) => ({
  id: user.id,
  email: user.email,
  nick_name: user.nick_name,
  role: user.role,
  full_name: user.full_name,
  profile_picture: user.profile_picture,
  dni: user.dni,
  phone: user.phone,
  courses: user.Courses,
  classes: user.Classes,
})

const login = async (email, password) => {
  const user = await User.findOne({
    where: {
      email,
      isDeleted: false,
    },
    include: {
      model: Course,
      include: [Class],
    },
  })

  if (!user)
    return {
      code: 401,
      message: 'Credenciales incorrectas. Usuario no encontrado.',
    }

  if (!user.isActive)
    return {
      code: 401,
      message:
        'Credenciales incorrectas. Usuario no verificado. Revise su correo.',
    }

  const comparePassword = await bcryptUtl.comparePassword(
    password,
    user.password,
  )

  if (!comparePassword)
    return {
      code: 401,
      message: 'Credenciales incorrectas. Intente de nuevo.',
    }

  const token = jwtUtl.generateToken({
    id: user.id,
    email: user.email,
    nick_name: user.nick_name,
    role: user.role,
  })

  console.log(user.Classes)

  return {
    code: 200,
    token,
    user: formatUserResponse(user),
  }
}

export default login
