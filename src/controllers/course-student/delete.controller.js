import { nodemailerHelper } from '../../helpers/index.helpers.js'
import { courseStudentService } from '../../services/index.services.js'

const bannedStudent = async (req, res) => {
  try {
    const {
      course_id,
      student_id,
      reason,
      course_name,
      teacher_name,
      student_email,
      student_name,
    } = req.query
    const { code, message } = await courseStudentService.deleteCourseStudent(
      course_id,
      student_id
    )

    if (code === 200) {
      nodemailerHelper.bannedStudent(
        student_email,
        student_name,
        course_name,
        teacher_name,
        reason
      )
    }

    return res.status(code).json({ message })
  } catch (error) {
    return res.status(500).json({
      message:
        'Error interno en el servidor. Verifique los datos e intente de nuevo.',
    })
  }
}

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

export { bannedStudent, deleteCourseStudent }
