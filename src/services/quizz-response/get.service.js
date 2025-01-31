import { QuizzResponse } from '../../database/index.database.js'

const getByResponse = async (ResponseId) => {
  const quizzResponses = await QuizzResponse.findAll({
    where: {
      ResponseId,
    },
  })

  return { code: 200, quizzResponses }
}

export { getByResponse }
