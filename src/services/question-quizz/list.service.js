import { Activity, QuestionQuizz } from '../../database/index.database.js'

const activityExists = async (id) => {
  return await Activity.findOne({
    where: {
      id,
      type: 'Quizz Code',
    },
  })
}

const getByActivity = async (ActivityId) => {
  if (!activityExists(ActivityId))
    return {
      code: 400,
      message: 'Actividad no disponible. Intente de nuevo',
    }

  const quizzQuestions = await QuestionQuizz.findAll({
    where: {
      ActivityId,
    },
  })

  return { code: 200, quizzQuestions }
}

export default getByActivity
