import { QuizzResponse, Response } from '../../database/index.database.js'

const registerQuizzResponse = async (data) => {
  const { quizzResponses, StudentId, ActivityId } = data
  const timeTaken = quizzResponses.reduce(
    (acc, current) => acc + current.time_taken,
    0
  )

  const scoreTotalObtained = quizzResponses.reduce(
    (acc, current) => acc + current.score_obtained,
    0
  )

  const newResponse = await Response.create({
    StudentId,
    ActivityId,
    time_taken: timeTaken,
    score_total: scoreTotalObtained,
  })

  const quizzResponseMap = quizzResponses.map((qzr) => ({
    ...qzr,
    ResponseId: newResponse.id,
  }))

  const quizzResponsesCreated = await QuizzResponse.bulkCreate(quizzResponseMap)

  return quizzResponsesCreated && quizzResponsesCreated.length > 0
    ? {
        code: 201,
        message: 'Tus respuestas se han guardado correctamente',
      }
    : {
        code: 400,
        message: 'No se pudieron agregar tus respuestas. Lo sentimos.',
      }
}

export default registerQuizzResponse
