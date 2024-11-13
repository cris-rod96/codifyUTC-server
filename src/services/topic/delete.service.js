import { Topic } from '../../database/index.database.js'

const deleteTopic = async (id) => {
  const deletedRows = await Topic.destroy({
    where: {
      id,
    },
  })

  return deletedRows > 0
    ? { code: 200, message: 'Tema eliminado con éxito.' }
    : { code: 404, message: 'Tema no encontrado.' }
}

export default deleteTopic
