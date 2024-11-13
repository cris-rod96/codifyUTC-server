import { Activity } from '../../database/index.database.js'

const deleteActivity = async (id) => {
  const deletedRows = await Activity.destroy({
    where: {
      id,
    },
  })

  return deletedRows > 0
    ? { code: 200, message: 'Actividad eliminada con éxito.' }
    : { code: 404, message: 'Actividad no encontrada.' }
}

export default deleteActivity
