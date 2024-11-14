import { optionQuizzService } from '../../services/index.services.js'

const getByQuestionQuizz = async (req, res) => {
  try {
    const { question_id } = req.params
    const { code, message, options } =
      await optionQuizzService.getByQuestionQuizz(question_id)
    return res.status(code).json(message ? { message } : { options })
  } catch (error) {
    return res.status(500).json({
      message:
        'Error interno en el servidor. Verifique los datos e intente de nuevo.',
    })
  }
}

export default getByQuestionQuizz
