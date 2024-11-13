import { classService } from '../../services/index.services.js'

const deleteClass = async (req, res) => {
  try {
    const { id } = req.params
    const { code, message } = await classService.deleteClass(id)
    return res.status(code).json({ message })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno. Verifique los datos e intente de nuevo.',
    })
  }
}

export default deleteClass
