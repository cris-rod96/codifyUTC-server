import { OptionQuizz, QuestionQuizz } from '../../database/index.database.js'

const questionQuizzExists = async (id) => {
  return await QuestionQuizz.findOne({
    where: {
      id,
    },
  })
}

const deleteOptionQuizz = async (id) => {
  const optionQuizz = await OptionQuizz.findOne({
    where: {
      id,
    },
  })

  if (!optionQuizz)
    return {
      code: 400,
      message: 'Opción no encontrada. Verifique e intente de nuevo.',
    }

  const rowsDeleted = await OptionQuizz.destroy({
    where: {
      id,
    },
  })

  return rowsDeleted > 0
    ? {
        code: 200,
        message: 'Opción eliminada con éxito',
      }
    : {
        code: 400,
        message: 'Error al eliminar la opción. Verifique e intente de nuevo.',
      }
}
const deleteByQuestionQuizz = async (QuestionQuizzId) => {
  if (!questionQuizzExists(QuestionQuizzId))
    return {
      code: 404,
      message: 'Pregunta no encontrada. Verifique e intente de nuevo.',
    }

  const rowsDeleted = await OptionQuizz.destroy({
    where: {
      QuestionQuizzId,
    },
  })

  return rowsDeleted > 0
    ? {
        code: 200,
        message: 'Respuestas eliminadas con éxito',
      }
    : {
        code: 400,
        message: 'Error al eliminar las preguntas. Intente de nuevo.',
      }
}

export { deleteByQuestionQuizz, deleteOptionQuizz }
