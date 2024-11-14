import { supportService } from '../../services/index.services.js'

const updateSupport = async (req, res) => {
  try {
    const { id } = req.params
    const data = req.body

    const { code, message } = await supportService.updateSupport(id, data)

    return res.status(code).json({ message })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno. Verifique los datos e intente de nuevo.',
    })
  }
}

export default updateSupport
