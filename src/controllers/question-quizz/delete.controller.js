import { questionQuizzService } from '../../services/index.services.js'

const deleteQuestionQuizz = async (req, res) => {
  try {
    const { id } = req.params
    const { code, message } = await questionQuizzService.deleteQuestionQuizz(id)
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
    const { code, message } = await questionQuizzService.deleteByActivity(
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

export { deleteByActivity, deleteQuestionQuizz }
