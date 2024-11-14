import { puzzleService } from '../../services/index.services.js'

const deletePuzzle = async (req, res) => {
  try {
    const { id } = req.params
    const { code, message } = await puzzleService.deletePuzzle(id)
    return res.status(code).json({ message })
  } catch (error) {
    return res.status(500).json({
      message:
        'Error interno en el servidor. Verifique los datos en intente de nuevo.',
    })
  }
}

const deleteByActivity = async (req, res) => {
  try {
    const { activity_id } = req.params
    const { code, message } = await puzzleService.deleteByActivity(activity_id)
    return res.status(code).json({ message })
  } catch (error) {
    return res.status(500).json({
      message:
        'Error interno en el servidor. Verifique los datos en intente de nuevo.',
    })
  }
}

export { deleteByActivity, deletePuzzle }
