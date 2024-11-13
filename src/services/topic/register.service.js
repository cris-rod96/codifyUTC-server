import { Class, Topic } from '../../database/index.database.js'

const classExits = async (id) => {
  return await Class.findOne({
    where: {
      id,
      isDeleted: false,
    },
  })
}

const registerTopic = async (data) => {
  const { ClassId } = data

  if (!classExits(ClassId))
    return { code: 400, message: 'Clase no disponible. Intente de nuevo.' }

  const topic = await Topic.create(data)

  return topic
    ? { code: 201, message: 'Tema registrado con éxito.' }
    : {
        code: 400,
        message: 'No se pudo registrar el tema. Intente de nuevo.',
      }
}

export default registerTopic
