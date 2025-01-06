import { courseStudentService } from '../../services/index.services.js'

const getCoursesByStudent = async (req, res) => {
  try {
    const { student_id } = req.params
    const { code, message, data } =
      await courseStudentService.getCoursesByStudent(student_id)

    return res.status(code).json({ message, data })
  } catch (error) {
    return res.status(500).json({
      message:
        'Error interno en el servidor. Verifique los datos e intente de nuevo.',
    })
  }
}

const getStudentsByCourse = async (req, res) => {
  try {
    const { course_id } = req.params
    const { code, message, studentsInCourse } =
      await courseStudentService.getStudentsByCourse(course_id)

    return res
      .status(code)
      .json(code !== 200 ? { message } : { message, studentsInCourse })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      message:
        'Error interno en el servidor. Verifique los datos e intente de nuevo.',
    })
  }
}

const getCourseStudentRecord = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({
      message:
        'Error interno en el servidor. Verifique los datos e intente de nuevo.',
    })
  }
}

export { getCoursesByStudent, getStudentsByCourse, getCourseStudentRecord }
