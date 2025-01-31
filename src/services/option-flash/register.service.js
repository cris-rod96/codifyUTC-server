import { OptionFlash, QuestionFlash } from '../../database/index.database.js'

const questionFlashExists = async (id) => {
  return await QuestionFlash.findOne({
    where: {
      id,
    },
  })
}

const registerOptionFlash = async (data) => {
  const { QuestionFlashId } = data

  if (!questionFlashExists(QuestionFlashId))
    return {
      code: 404,
      message: 'Pregunta no encontrada. Verifique e intente de nuevo.',
    }

  const optionFlash = await OptionFlash.create(data)

  return optionFlash
    ? {
        code: 201,
        message: 'Respuesta registrada con éxito',
      }
    : {
        code: 400,
        message: 'Error al guardar la respuesta. Verifique e intente de nuevo',
      }
}

export default registerOptionFlash
