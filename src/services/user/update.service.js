import { Op } from 'sequelize'
import { User } from '../../database/index.database.js'

const existeOtherUser = async (id, key, value) => {
  const user = await User.findOne({
    where: {
      [key]: value,
      id: {
        [Op.ne]: [id],
      },
    },
  })

  return user
}

const updateUser = async (id, data) => {
  const { phone, nick_name } = data
  const checks = []

  if (phone) checks.push(existeOtherUser(id, 'phone', phone))

  if (nick_name) checks.push(existeOtherUser(id, 'nick_name', nick_name))

  const results = await Promise.all(checks)

  if (phone && results[0])
    return {
      code: 400,
      message: 'Ya existe un usuario diferente con este número de teléfono.',
    }
  if (nick_name && results[1])
    return {
      code: 400,
      message: 'Ya existe un usuario diferente con este nombre de usuario.',
    }

  const [rows] = await User.update(data, {
    where: {
      id,
    },
  })

  return rows > 0
    ? {
        code: 200,
        message: 'Información del usuario actualizada con éxito',
      }
    : {
        code: 400,
        message: 'No se pudo actualizar la información. Intente más tarde.',
      }
}

export default updateUser
