import { topicService } from '../../services/index.services.js'

const updateTopic = async (req, res) => {
  try {
    const { id } = req.params
    const data = req.body
    const { code, message } = await topicService.updateTopic(id, data)
    return res.status(code).json({ message })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      message: 'Error interno. Verifique los datos e intente de nuevo.',
    })
  }
}

export default updateTopic
