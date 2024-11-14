import { Activity, OutputBattle } from '../../database/index.database.js'

const activityExists = async (id) => {
  return await Activity.findOne({
    where: {
      id,
    },
  })
}

const registerOutputBattle = async (data) => {
  const { ActivityId } = data

  const activity = await activityExists(ActivityId)

  if (!activity)
    return { code: 400, message: 'Actividad no disponible. Intente de nuevo' }

  if (activity.type !== 'Output Battle') {
    return {
      code: 400,
      message: 'Tipo de actividad incorrecta. Intente de nuevo',
    }
  }

  const outputBattle = await OutputBattle.create(data)

  return outputBattle
    ? {
        code: 201,
        message: 'Desafío agregado a la actividad correctamente',
      }
    : {
        code: 400,
        message:
          'No se pudo agregar el desafío. Revise la información e intente de nuevo',
      }
}

export default registerOutputBattle
