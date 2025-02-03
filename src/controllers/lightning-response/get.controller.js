import { lightningResponseService } from '../../services/index.services.js'

const getByResponse = async (req, res) => {
  try {
    const { response_id } = req.params
    const { code, lightningResponses } =
      await lightningResponseService.getByResponse(response_id)
    return res.status(code).json({ lightningResponses })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      message: 'Error interno. Intente de nuevo o contacte un administrador.',
    })
  }
}

export { getByResponse }
