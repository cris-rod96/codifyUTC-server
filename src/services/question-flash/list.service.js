import { Activity, QuestionFlash } from '../../database/index.database.js'

const activityExists = async (id) => {
  return await Activity.findOne({
    where: {
      id,
      type: 'Flash Code',
    },
  })
}

const getByActivity = async (ActivityId) => {
  if (!activityExists(ActivityId))
    return { code: 404, message: 'Actividad no encontrada' }

  const questions = await QuestionFlash.findAll({
    where: {
      ActivityId,
    },
  })
  return { code: 200, questions }
}

export default getByActivity
