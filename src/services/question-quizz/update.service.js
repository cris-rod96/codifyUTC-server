import { QuestionQuizz } from '../../database/index.database.js'

const updateQuestionQuizz = async (id, data) => {
  const [rows] = await QuestionQuizz.update(data, {
    where: {
      id,
    },
  })

  return rows > 0
    ? {
        code: 200,
        message: 'Pregunta actualizada con éxito',
      }
    : {
        code: 400,
        message: 'No se pudo actualizar la pregunta. Intente de nuevo.',
      }
}

export default updateQuestionQuizz
