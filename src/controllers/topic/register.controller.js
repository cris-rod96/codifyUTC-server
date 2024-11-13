import { topicService } from '../../services/index.services.js'

const registerTopic = async (req, res) => {
  try {
    const data = req.body
    const { code, message } = await topicService.registerTopic(data)
    return res.status(code).json({ message })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno. Verifique los datos e intente de nuevo.',
    })
  }
}

export default registerTopic
