import { questionQuizzService } from '../../services/index.services.js'

const getByActivity = async (req, res) => {
  try {
    const { activity_id } = req.params
    const { code, message, quizzQuestions } =
      await questionQuizzService.getByActivity(activity_id)

    return res.status(code).json(message ? { message } : { quizzQuestions })
  } catch (error) {
    return res.status(500).json({
      message:
        'Error interno en el servidor. Verifique los datos en intente de nuevo.',
    })
  }
}

export default getByActivity
