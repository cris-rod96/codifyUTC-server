import { optionQuizzService } from '../../services/index.services.js'

const updateOptionQuizz = async (req, res) => {
  try {
    const { id } = req.params
    const data = req.body

    const { code, message } = await optionQuizzService.updateOptionQuizz(
      id,
      data
    )
    return res.status(code).json({ message })
  } catch (error) {
    return res.status(500).json({
      message:
        'Error interno en el servidor. Verifique los datos e intente de nuevo.',
    })
  }
}

export default updateOptionQuizz
