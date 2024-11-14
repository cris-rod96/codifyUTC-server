import { questionQuizzService } from '../../services/index.services.js'

const registerQuestionQuizz = async (req, res) => {
  try {
    const data = req.body
    const { code, message } = await questionQuizzService.registerQuestionQuizz(
      data
    )

    return res.status(code).json({
      message,
    })
  } catch (error) {
    return res.status(500).json({
      message:
        'Error interno en el servidor. Verifique los datos e intente de nuevo.',
    })
  }
}

export default registerQuestionQuizz
