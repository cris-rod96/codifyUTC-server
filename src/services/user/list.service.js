import { User } from '../../database/index.database.js'

const getAllUsers = async () => {
  const users = await User.findAll({
    where: {
      isActive: true,
      isDeleted: false,
    },
  })
  return { code: 200, users }
}

const getUsersByActive = async (isActive) => {
  const users = await User.findAll({
    where: {
      isActive,
    },
  })

  return { code: 200, users }
}

const getUsersDeleted = async () => {
  const users = await User.findAll({
    where: {
      isDeleted: true,
    },
  })
  return { code: 200, users }
}

const getUsersByRole = async (role) => {
  const users = await User.findAll({
    where: {
      role,
    },
  })

  return { code: 200, users }
}

// Para obtener los usuarios por email,id,phone,etc.

const getUserByKey = async (key, value) => {
  const user = await User.findOne({
    where: {
      [key]: value,
    },
  })

  return user
    ? { code: 200, user }
    : { code: 400, message: 'Usuario no encontrado.' }
}

export {
  getAllUsers,
  getUserByKey,
  getUsersByActive,
  getUsersByRole,
  getUsersDeleted,
}
