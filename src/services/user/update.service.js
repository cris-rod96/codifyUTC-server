import { Op } from 'sequelize'
import { User } from '../../database/index.database.js'

const existeOtherUser = async (id, key, value) => {
  const user = await User.findOne({
    where: {
      [key]: value,
      id: {
        [Op.ne]: id,
      },
    },
  })

  return user
}

const updateUser = async (id, data) => {
  const { phone } = data

  if (phone) {
    const exist = await existeOtherUser(id, 'phone', phone)
    if (exist) return { code: 400, message: 'Teléfono no disponible' }
  }

  const [rows] = await User.update(data, {
    where: { id },
  })

  if (rows === 0) {
    return {
      code: 400,
      message: 'No se pudo actualizar la información. Intente más tarde.',
    }
  }

  // Obtener el usuario actualizado excluyendo la contraseña
  const updatedUser = await User.findOne({
    where: { id },
    attributes: { exclude: ['password'] }, // Excluye la contraseña
  })

  return {
    code: 200,
    message: 'Información del usuario actualizada con éxito',
    data: updatedUser,
  }
}

const newPassword = async (user_id, password) => {
  const user = await User.findOne({
    where: {
      id: user_id,
    },
  })
  if (!user) return { code: 400, message: 'El usuario no existe' }

  user.password = password
  await user.save()
  return { code: 200, message: 'Contraseña cambiada con éxito.' }
}

const changePassword = async (data) => {
  const { method, value, password } = data
  const user = await User.findOne({
    where: {
      [method === 'Email' ? 'email' : 'phone']: value,
      isActive: true,
      isDeleted: false,
    },
  })

  if (!user) return { code: 400, message: 'El usuario no existe.' }

  user.password = password
  await user.save()

  return { code: 200, message: 'Contraseña cambiada con éxito.' }
}

export { updateUser, changePassword, newPassword }
