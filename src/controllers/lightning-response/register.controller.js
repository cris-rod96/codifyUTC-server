import { lightningResponseService } from '../../services/index.services.js'

const registerLightningResponse = async (req, res) => {
  try {
    const data = req.body
    const { lightningResponses } = data

    if (lightningResponses.length === 0)
      return res.status(400).json({
        message: 'Las respuestas no pueden estar vacías',
      })

    const { code, message } =
      await lightningResponseService.registerLightningResponse(data)

    return res.status(code).json({ message })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      message:
        'Error interno en el servidor. Verifique los datos e intente de nuevo.',
    })
  }
}

export default registerLightningResponse
