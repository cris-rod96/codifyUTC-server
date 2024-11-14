import { courseStudentService } from '../../services/index.services.js'

const deleteCourseStudent = async (req, res) => {
  try {
    const { id } = req.params
    const { code, message } = await courseStudentService.deleteCourseStudent(id)
    return res.status(code).json({ message })
  } catch (error) {
    return res.status(500).json({
      message:
        'Error interno en el servidor. Verifique los datos e intente de nuevo.',
    })
  }
}

export default deleteCourseStudent
