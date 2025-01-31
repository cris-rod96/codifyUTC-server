import { Activity, QuestionFlash } from '../../database/index.database.js'

const activityExists = async (id) => {
  return await Activity.findOne({
    where: {
      id,
    },
  })
}

const registerQuestionFlash = async (data) => {
  const { ActivityId } = data

  if (!activityExists(ActivityId))
    return { code: 404, message: 'Actividad no disponible. Intente de nuevo.' }

  const questionFlash = await QuestionFlash.create(data)

  return questionFlash
    ? {
        code: 201,
        questionFlash,
      }
    : {
        code: 400,
        message:
          'Error al generar la pregunta. Verifique la información e intente de nuevo.',
      }
}

export default registerQuestionFlash
