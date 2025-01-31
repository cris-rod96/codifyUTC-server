import { topicService } from '../../services/index.services.js'

const getAllTopics = async (req, res) => {
  try {
    const { code, topics } = await topicService.getAllTopics()
    return res.status(code).json({ topics })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno. Verifique los datos e intente de nuevo.',
    })
  }
}
const getByClass = async (req, res) => {
  try {
    const { class_id } = req.params
    const { code, message, topics } = await topicService.getByClass(class_id)

    return res.status(code).json(message ? { message } : { topics })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno. Verifique los datos e intente de nuevo.',
    })
  }
}

const getById = async (req, res) => {
  try {
    const { id } = req.params
    const { code, message, topic } = await topicService.getById(id)
    return res.status(code).json(message ? { message } : { topic })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno. Verifique los datos e intente de nuevo.',
    })
  }
}

export { getAllTopics, getByClass, getById }
