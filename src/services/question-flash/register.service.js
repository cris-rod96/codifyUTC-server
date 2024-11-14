import { Activity, QuestionFlash } from '../../database/index.database.js'

const activityExists = async (id) => {
  return await Activity.findOne({
    where: {
      id,
      type: 'Flash Code',
    },
  })
}

const registerQuestionFlash = async (data) => {
  const { ActivityId } = data

  if (!activityExists(ActivityId))
    return { code: 404, message: 'Actividad no encontrada' }

  const questionFlash = await QuestionFlash.create(data)

  return questionFlash
    ? {
        code: 201,
        message: 'Pregunta generada con éxito',
      }
    : {
        code: 400,
        message:
          'Error al generar la pregunta. Verifique la información e intente de nuevo.',
      }
}

export default registerQuestionFlash
