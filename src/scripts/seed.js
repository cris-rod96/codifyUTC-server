import { User } from '../database/index.database.js'
import { bcryptUtl } from '../utils/index.utils.js'

const user = {
  full_name: 'Admin Codify',
  dni: '0000000000',
  phone: '0000000000',
  email: 'admin.codify@utc.edu.ec',
  nick_name: 'admin',
  profile_picture: null,
  gender: 'Otro',
  role: 'Administrador',
  isActive: true,
}

const loader = async () => {
  try {
    const userFound = await User.findOne({
      where: {
        email: user.email,
      },
    })

    if (!userFound) {
      await User.create({
        ...user,
        password: await bcryptUtl.hashPassword('a12b32*'),
      })

      console.log('Usuario admin creado')
    }
  } catch (error) {
    console.log('Error al crear usuario admin')
  }
}

export default loader
