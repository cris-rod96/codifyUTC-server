import { Activity } from '../../database/index.database.js'

const updateActivity = async (id, data) => {
  const [rows] = await Activity.update(data, {
    where: {
      id,
    },
  })

  return rows > 0
    ? {
        code: 200,
        message: 'Actividad actualizada con éxito.',
      }
    : {
        code: 400,
        message: 'No se pudo actualizar la actividad. Intente de nuevo.',
      }
}

export default updateActivity
