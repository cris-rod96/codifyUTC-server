import { optionFlashService } from '../../services/index.services.js'

const deleteOptionFlash = async (req, res) => {
  try {
    const { id } = req.params
    const { code, message } = await optionFlashService.deleteOptionFlash(id)
    return res.status(code).json({ message })
  } catch (error) {
    return res.status(500).json({
      message:
        'Error interno en el servidor. Verifique los datos e intente de nuevo.',
    })
  }
}

const deleteByQuestionFlash = async (req, res) => {
  try {
    const { question_id } = req.params
    const { code, message } = await optionFlashService.deleteByQuestionFlash(
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

export { deleteByQuestionFlash, deleteOptionFlash }
