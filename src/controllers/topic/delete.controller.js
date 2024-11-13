import { topicService } from '../../services/index.services.js'

const deleteTopic = async (req, res) => {
  try {
    const { id } = req.params
    const { code, message } = await topicService.deleteTopic(id)
    return req.status(code).json({ message })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno. Verifique los datos e intente de nuevo.',
    })
  }
}

export default deleteTopic
