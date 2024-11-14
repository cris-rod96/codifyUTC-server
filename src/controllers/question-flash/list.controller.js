import { questionFlashService } from '../../services/index.services.js'

const getByActivity = async (req, res) => {
  try {
    const { activity_id } = req.params
    const { code, message, questions } =
      await questionFlashService.getByActivity(activity_id)

    return res.status(code).json(message ? { message } : { questions })
  } catch (error) {
    return res.status(500).json({
      message:
        'Error interno en el servidor. Verifique los datos en intente de nuevo.',
    })
  }
}

export default getByActivity
