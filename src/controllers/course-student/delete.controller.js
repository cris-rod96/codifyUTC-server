import { courseStudentService } from '../../services/index.services.js'

const deleteCourseStudent = async (req, res) => {
  try {
    const { course_id, student_id } = req.query
    const { code, message } = await courseStudentService.deleteCourseStudent(
      course_id,
      student_id
    )
    return res.status(code).json({ message })
  } catch (error) {
    return res.status(500).json({
      message:
        'Error interno en el servidor. Verifique los datos e intente de nuevo.',
    })
  }
}

export default deleteCourseStudent
