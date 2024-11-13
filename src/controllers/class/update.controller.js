import { classService } from '../../services/index.services.js'

const updateClass = async (req, res) => {
  try {
    const { id } = req.params
    const data = req.body

    const { code, message } = await classService.updateClass(id, data)
    return res.status(code).json({ message })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno. Verifique los datos e intente de nuevo.',
    })
  }
}

export default updateClass
