import { scoreService } from '../../services/index.services.js'

const registerScore = async (req, res) => {
  try {
    const data = req.body
    const { code, message } = await scoreService.registerScore(data)

    return res.status(code).json({ message })
  } catch (error) {
    return res.status(500).json({
      message:
        'Error interno en el servidor. Verifique los datos e intente nuevamente.',
    })
  }
}

export default registerScore
