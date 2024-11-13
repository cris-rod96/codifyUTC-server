import { Class, Topic } from '../../database/index.database.js'

const classExits = async (id) => {
  return await Class.findOne({
    where: {
      id,
      isDeleted: false,
    },
  })
}

const getAllTopics = async () => {
  const topics = await Topic.findAll({})

  return { code: 200, topics }
}

const getByClass = async (ClassId) => {
  if (!classExits(ClassId))
    return { code: 400, message: 'Clase no disponible. Intente de nuevo.' }

  const topics = await Topic.findAll({
    where: {
      ClassId,
    },
  })

  return { code: 200, topics }
}

export { getByClass, getAllTopics }
