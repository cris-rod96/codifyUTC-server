import { Activity, QuestionQuizz } from '../../database/index.database.js'

const activityExists = async (id) => {
  return await Activity.findOne({
    where: {
      id,
      type: 'Quizz Code',
    },
  })
}

const deleteQuestionQuizz = async (id) => {
  const questionQuizz = await QuestionQuizz.findOne({
    where: {
      id,
    },
  })

  if (!questionQuizz) return { code: 404, message: 'Pregunta no encontrada' }

  const rowsDeleted = await QuestionQuizz.destroy({
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

  const rowsDeleted = await QuestionQuizz.destroy({
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

export { deleteByActivity, deleteQuestionQuizz }
