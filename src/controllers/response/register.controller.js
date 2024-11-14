import { responseService } from '../../services/index.services.js'

const registerResponse = async (req, res) => {
  try {
    const data = req.body
    const { code, message } = await responseService.registerResponse(data)
    return res.status(code).json({ message })
  } catch (error) {
    return res.status(500).json({
      message:
        'Error interno en el servidor. Verifique los datos e intente de nuevo.',
    })
  }
}

export default registerResponse
