import { responseService } from '../../services/index.services.js'

const getByActivity = async (req, res) => {
  try {
    const { activity_id } = req.params
    const { code, responses } = await responseService.getByActivity(activity_id)
    return res.status(code).json({ responses })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno. Verifique los datos e intente de nuevo.',
    })
  }
}
const getByStudent = async (req, res) => {
  try {
    const { student_id } = req.params
    const { code, responses } = await responseService.getByStudent(student_id)
    return res.status(code).json({ responses })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno. Verifique los datos e intente de nuevo.',
    })
  }
}
const getStudentByActivity = async (req, res) => {
  try {
    const { activity_id, student_id } = req.query
    const { code, responses } = await responseService.getStudentByActivity(
      activity_id,
      student_id
    )
    return res.status(code).json({ responses })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno. Verifique los datos e intente de nuevo.',
    })
  }
}

export { getByActivity, getByStudent, getStudentByActivity }
