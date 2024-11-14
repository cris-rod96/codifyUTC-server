import { outputBattleService } from '../../services/index.services.js'

const getByActivity = async (req, res) => {
  try {
    const { activity_id } = req.params
    const { code, message, outputs } = await outputBattleService.getByActivity(
      activity_id
    )

    return res.status(code).json(message ? { message } : { outputs })
  } catch (error) {
    return res.status(500).json({
      message:
        'Error interno en el servidor. Verifique los datos en intente de nuevo.',
    })
  }
}

export default getByActivity
