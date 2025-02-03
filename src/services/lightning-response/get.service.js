import { LightningResponse } from '../../database/index.database.js'

const getByResponse = async (ResponseId) => {
  const lightningResponses = await LightningResponse.findAll({
    where: {
      ResponseId,
    },
  })

  return { code: 200, lightningResponses }
}

export { getByResponse }
