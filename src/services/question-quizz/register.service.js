import { Activity, QuestionQuizz } from '../../database/index.database.js'

const activityExists = async (id) => {
  return await Activity.findOne({
    where: {
      id,
    },
  })
}

const registerQuestionQuizz = async (data) => {
  const { ActivityId } = data

  const activity = await activityExists(ActivityId)

  if (!activity)
    return { code: 400, message: 'Actividad no disponible. Intente de nuevo' }

  if (activity.model !== 'Quizz Code') {
    return {
      code: 400,
      message: 'Tipo de actividad incorrecta. Intente de nuevo',
    }
  }

  const questionQuizz = await QuestionQuizz.create(data)

  return questionQuizz
    ? {
        code: 201,
        message: 'Pregunta agregada a la actividad correctamente',
      }
    : {
        code: 400,
        message:
          'No se pudo agregar la pregunta. Revise la información e intente de nuevo',
      }
}

export default registerQuestionQuizz
