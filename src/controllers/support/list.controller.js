import { supportService } from '../../services/index.services.js'

const getAll = async (req, res) => {
  try {
    const { code, supports } = await supportService.getAll()
    return res.status(code).json({ supports })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno. Verifique los datos e intente de nuevo.',
    })
  }
}
const getById = async (req, res) => {
  try {
    const { id } = req.params
    const { code, support, message } = await supportService.getById(id)

    return res.status(code).json(message ? { message } : { support })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno. Verifique los datos e intente de nuevo.',
    })
  }
}
const getByUser = async (req, res) => {
  try {
    const { user_id } = req.params
    const { code, supports } = await supportService.getByUser(user_id)

    return res.status(code).json({ supports })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno. Verifique los datos e intente de nuevo.',
    })
  }
}

export { getAll, getById, getByUser }
