import { Topic } from '../../database/index.database.js'

const updateTopic = async (id, data) => {
  const [rows] = await Topic.update(data, {
    where: {
      id,
    },
  })

  return rows > 0
    ? {
        code: 200,
        message: 'Tema actualizado con éxito.',
      }
    : {
        code: 400,
        message: 'No se pudo actualizar el tema. Intente de nuevo.',
      }
}

export default updateTopic
