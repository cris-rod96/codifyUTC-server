import { optionQuizzService } from '../../services/index.services.js'

const deleteOptionQuizz = async (req, res) => {
  try {
    const { id } = req.params
    const { code, message } = await optionQuizzService.deleteOptionQuizz(id)
    return res.status(code).json({ message })
  } catch (error) {
    return res.status(500).json({
      message:
        'Error interno en el servidor. Verifique los datos e intente de nuevo.',
    })
  }
}

const deleteByQuestionQuizz = async (req, res) => {
  try {
    const { question_id } = req.params
    const { code, message } = await optionQuizzService.deleteByQuestionQuizz(
      question_id
    )
    return res.status(code).json({ message })
  } catch (error) {
    return res.status(500).json({
      message:
        'Error interno en el servidor. Verifique los datos e intente de nuevo.',
    })
  }
}

export { deleteByQuestionQuizz, deleteOptionQuizz }
