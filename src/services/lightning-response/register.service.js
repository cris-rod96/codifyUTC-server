import { LightningResponse, Response } from '../../database/index.database.js'

const registerLightningResponse = async (data) => {
  const { lightningResponses, StudentId, ActivityId } = data
  const time_taken = lightningResponses.reduce(
    (acc, current) => acc + current.time_taken,
    0
  )

  const scoreTotalObtained = lightningResponses.reduce(
    (acc, current) => acc + current.score_obtained,
    0
  )
  const newResponse = await Response.create({
    StudentId,
    ActivityId,
    time_taken: time_taken,
    score_total: scoreTotalObtained,
  })

  const lightningResponseMap = lightningResponses.map((lnr) => ({
    ...lnr,
    ResponseId: newResponse.id,
  }))

  const lightningResponsesCreated = await LightningResponse.bulkCreate(
    lightningResponseMap
  )

  return lightningResponsesCreated && lightningResponsesCreated.length > 0
    ? {
        code: 201,
        message: 'Actividad guardada con éxito',
      }
    : {
        code: 400,
        message: 'No se pudieron agregar las respuestas',
      }
}

export default registerLightningResponse
