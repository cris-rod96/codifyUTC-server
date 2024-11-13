import { Class } from '../../database/index.database.js'

const deleteClass = async (id) => {
  const classFound = await Class.findOne({
    where: {
      id,
      isDeleted: false,
    },
  })

  if (!classFound) return { code: 400, message: 'Clase no encontrada.' }

  classFound.isDeleted = true
  await classFound.save()

  return { code: 200, message: 'Clase eliminada con éxito.' }
}

export default deleteClass
