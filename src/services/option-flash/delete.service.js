import { OptionFlash, QuestionFlash } from '../../database/index.database.js'

const questionFlashExists = async (id) => {
  return await QuestionFlash.findOne({
    where: {
      id,
    },
  })
}

const deleteOptionFlash = async (id) => {
  const OptionFlash = await OptionFlash.findOne({
    where: {
      id,
    },
  })

  if (!OptionFlash)
    return {
      code: 400,
      message: 'Opción no encontrada. Verifique e intente de nuevo.',
    }

  const rowsDeleted = await OptionFlash.destroy({
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
const deleteByQuestionFlash = async (QuestionFlashId) => {
  if (!questionFlashExists(QuestionFlashId))
    return {
      code: 404,
      message: 'Pregunta no encontrada. Verifique e intente de nuevo.',
    }

  const rowsDeleted = await OptionFlash.destroy({
    where: {
      QuestionFlashId,
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

export { deleteByQuestionFlash, deleteOptionFlash }
