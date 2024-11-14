import { outputBattleService } from '../../services/index.services.js'

const updateOutputBattle = async (req, res) => {
  try {
    const { id } = req.params
    const data = req.body
    const { code, message } = await outputBattleService.updateOutputBattle(
      id,
      data
    )
    return res.status(code).json({ message })
  } catch (error) {
    return res.status(500).json({
      message:
        'Error interno en el servidor. Verifique los datos en intente de nuevo.',
    })
  }
}

export default updateOutputBattle
