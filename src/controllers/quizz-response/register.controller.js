import { quizzResponseService } from '../../services/index.services.js'

const registerQuizzResponse = async (req, res) => {
  try {
    const data = req.body
    const { quizzResponses } = data

    if (quizzResponses.length === 0)
      return res.status(400).json({
        message: 'Las respuestas no pueden estar vacías',
      })

    const { code, message } = await quizzResponseService.registerQuizzResponse(
      data
    )

    return res.status(code).json({ message })
  } catch (error) {
    return res.status(500).json({
      message:
        'Error interno en el servidor. Verifique los datos e intente de nuevo.',
    })
  }
}

export default registerQuizzResponse
