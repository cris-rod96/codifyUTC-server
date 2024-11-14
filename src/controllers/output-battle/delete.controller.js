import { outputBattleService } from '../../services/index.services.js'

const deleteOutputBattle = async (req, res) => {
  try {
    const { id } = req.params
    const { code, message } = await outputBattleService.deleteOutputBattle(id)
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
    const { code, message } = await outputBattleService.deleteByActivity(
      activity_id
    )
    return res.status(code).json({ message })
  } catch (error) {
    return res.status(500).json({
      message:
        'Error interno en el servidor. Verifique los datos en intente de nuevo.',
    })
  }
}

export { deleteByActivity, deleteOutputBattle }
