import { Activity, OutputBattle } from '../../database/index.database.js'

const activityExists = async (id) => {
  return await Activity.findOne({
    where: {
      id,
      type: 'Output Battle',
    },
  })
}

const getByActivity = async (ActivityId) => {
  if (!activityExists(ActivityId))
    return {
      code: 400,
      message: 'Actividad no disponible. Intente de nuevo',
    }

  const outputs = await OutputBattle.findAll({
    where: {
      ActivityId,
    },
  })

  return { code: 200, outputs }
}

export default getByActivity
