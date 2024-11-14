import { OptionQuizz, QuestionQuizz } from '../../database/index.database.js'

const questionQuizzExists = async (id) => {
  return await QuestionQuizz.findOne({
    where: {
      id,
    },
  })
}

const registerOptionQuizz = async (data) => {
  const { QuestionQuizzId } = data

  if (!questionQuizzExists(QuestionQuizzId))
    return {
      code: 404,
      message: 'Pregunta no encontrada. Verifique e intente de nuevo.',
    }

  const optionQuizz = await OptionQuizz.create(data)

  return optionQuizz
    ? {
        code: 201,
        message: 'Respuesta registrada con éxito',
      }
    : {
        code: 400,
        message: 'Error al guardar la respuesta. Verifique e intente de nuevo',
      }
}

export default registerOptionQuizz
