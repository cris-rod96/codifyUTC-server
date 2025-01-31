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
    order: [['created_at', 'ASC']],
  })

  return { code: 200, topics }
}

const getById = async (id) => {
  const topic = await Topic.findOne({
    where: {
      id,
    },
  })

  return topic
    ? { code: 200, topic }
    : { code: 400, message: 'No se encontró contenido' }
}

export { getByClass, getAllTopics, getById }
