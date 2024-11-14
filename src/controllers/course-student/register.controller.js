import { courseStudentService } from '../../services/index.services.js'

const registerCourseStudent = async (req, res) => {
  try {
    const data = req.body
    const { code, message } = await courseStudentService.registerCourseStudent(
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

export default registerCourseStudent
