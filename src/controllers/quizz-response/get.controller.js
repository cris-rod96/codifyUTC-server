import { quizzResponseService } from '../../services/index.services.js'

const getByResponse = async (req, res) => {
  try {
    const { response_id } = req.params
    const { code, quizzResponses } = await quizzResponseService.getByResponse(
      response_id
    )
    return res.status(code).json({ quizzResponses })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      message: 'Error interno. Intente de nuevo o contacte un administrador.',
    })
  }
}

export { getByResponse }
