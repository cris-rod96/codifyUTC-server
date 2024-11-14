import { scoreService } from '../../services/index.services.js'

const getAll = async (req, res) => {
  try {
    const { code, scores } = await scoreService.getAll()
    return res.status(code).json({ scores })
  } catch (error) {
    return res.status(500).json({
      message:
        'Error interno en el servidor. Verifique la información e intente nuevamente.',
    })
  }
}
const getByActivity = async (req, res) => {
  try {
    const { activity_id } = req.params
    const { code, scores } = await scoreService.getByActivity(activity_id)

    return res.status(code).json({ scores })
  } catch (error) {
    return res.status(500).json({
      message:
        'Error interno en el servidor. Verifique la información e intente nuevamente.',
    })
  }
}
const getByStudent = async (req, res) => {
  try {
    const { student_id } = req.params
    const { code, scores } = await scoreService.getByStudent(student_id)

    return res.status(code).json({ scores })
  } catch (error) {
    return res.status(500).json({
      message:
        'Error interno en el servidor. Verifique la información e intente nuevamente.',
    })
  }
}

export { getAll, getByActivity, getByStudent }
