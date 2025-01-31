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

  const outputQuestion = await OutputBattle.create(data)

  return outputQuestion
    ? {
        code: 201,
        outputQuestion,
      }
    : {
        code: 400,
        message:
          'No se pudo agregar el desafío. Revise la información e intente de nuevo',
      }
}

export default registerOutputBattle
