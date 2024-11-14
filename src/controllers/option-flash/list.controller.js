import { optionFlashService } from '../../services/index.services.js'

const getByQuestionFlash = async (req, res) => {
  try {
    const { question_id } = req.params
    const { code, message, options } =
      await optionFlashService.getByQuestionFlash(question_id)
    return res.status(code).json(message ? { message } : { options })
  } catch (error) {
    return res.status(500).json({
      message:
        'Error interno en el servidor. Verifique los datos e intente de nuevo.',
    })
  }
}

export default getByQuestionFlash
