import { Activity, QuestionFlash } from '../../database/index.database.js'

const activityExists = async (id) => {
  return await Activity.findOne({
    where: {
      id,
      type: 'Flash Code',
    },
  })
}

const deleteQuestionFlash = async (id) => {
  const QuestionFlash = await QuestionFlash.findOne({
    where: {
      id,
    },
  })

  if (!QuestionFlash) return { code: 404, message: 'Pregunta no encontrada' }

  const rowsDeleted = await QuestionFlash.destroy({
    where: {
      id,
    },
  })

  return rowsDeleted > 0
    ? {
        code: 200,
        message: 'Pregunta eliminada con éxito',
      }
    : {
        code: 400,
        message: 'Error al eliminar la pregunta. Verifique e intente de nuevo',
      }
}
const deleteByActivity = async (ActivityId) => {
  if (!activityExists(ActivityId))
    return {
      code: 400,
      message: 'Actividad no disponible. Intente de nuevo',
    }

  const rowsDeleted = await QuestionFlash.destroy({
    where: {
      ActivityId,
    },
  })

  return rowsDeleted > 0
    ? {
        code: 200,
        message: 'Preguntas eliminadas correctamente',
      }
    : {
        code: 400,
        message:
          'No se pudieron eliminar las preguntas. Verifique e intente de nuevo.',
      }
}

export { deleteByActivity, deleteQuestionFlash }
