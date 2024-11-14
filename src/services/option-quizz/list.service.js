import { OptionQuizz, QuestionQuizz } from '../../database/index.database.js'

const questionQuizzExists = async (id) => {
  return await QuestionQuizz.findOne({
    where: {
      id,
    },
  })
}

const getByQuestionQuizz = async (QuestionQuizzId) => {
  if (!questionQuizzExists(QuestionQuizzId))
    return {
      code: 404,
      message: 'Pregunta no encontrada. Verifique e intente de nuevo.',
    }

  const options = await OptionQuizz.findAll({
    where: {
      QuestionQuizzId,
    },
  })

  return { code: 200, options }
}

export default getByQuestionQuizz
