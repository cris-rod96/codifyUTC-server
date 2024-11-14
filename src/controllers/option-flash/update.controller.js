import { optionFlashService } from '../../services/index.services.js'

const updateOptionFlash = async (req, res) => {
  try {
    const { id } = req.params
    const data = req.body

    const { code, message } = await optionFlashService.updateOptionFlash(
      id,
      data
    )
    return res.status(code).json({ message })
  } catch (error) {
    return res.status(500).json({
      message:
        'Error interno en el servidor. Verifique los datos e intente de nuevo.',
    })
  }
}

export default updateOptionFlash
