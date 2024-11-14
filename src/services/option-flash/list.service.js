import { OptionFlash, QuestionFlash } from '../../database/index.database.js'

const questionFlashExists = async (id) => {
  return await QuestionFlash.findOne({
    where: {
      id,
    },
  })
}

const getByQuestionFlash = async (QuestionFlashId) => {
  if (!questionFlashExists(QuestionFlashId))
    return {
      code: 404,
      message: 'Pregunta no encontrada. Verifique e intente de nuevo.',
    }

  const options = await OptionFlash.findAll({
    where: {
      QuestionFlashId,
    },
  })

  return { code: 200, options }
}

export default getByQuestionFlash
