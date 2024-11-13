import { User } from '../../database/index.database.js'

const deleteUser = async (id) => {
  const user = await User.findOne({
    where: {
      id,
      isDeleted: false,
    },
  })

  if (!user) return { code: 400, message: 'Usuario no encontrado.' }

  user.isDeleted = false
  await user.save()

  return { code: 200, message: 'Usuario eliminado con éxito.' }
}

export default deleteUser
