import { courseService } from '../../services/index.services.js'

const getAllCourses = async (req, res) => {
  try {
    const { code, courses } = await courseService.getAllCourses()

    return res.status(code).json({ courses })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno. Verifique los datos e intente de nuevo.',
    })
  }
}
const getAllDeletedCourses = async (req, res) => {
  try {
    const { code, courses } = await courseService.getAllDeletedCourses()

    return res.status(code).json({
      courses,
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno. Verifique los datos e intente de nuevo.',
    })
  }
}
const getByTeacher = async (req, res) => {
  try {
    const { teacher_id } = req.params
    const { code, courses, message } = await courseService.getByTeacher(
      teacher_id
    )

    return res.status(code).json(message ? { message } : { courses })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      message: 'Error interno. Verifique los datos e intente de nuevo.',
    })
  }
}
const getByKey = async (req, res) => {
  try {
    const { key, value } = req.query
    const { code, course, message } = await courseService.getByKey(key, value)

    return res.status(code).json(message ? { message } : { course })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno. Verifique los datos e intente de nuevo.',
    })
  }
}

const getAllCoursesWithStudents = async (req, res) => {
  try {
    const { code, courses } = await courseService.getAllCoursesWithStudents()
    return res.status(code).json({ courses })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      message: 'Error interno. Verifique los datos e intente de nuevo.',
    })
  }
}

export {
  getAllCourses,
  getAllDeletedCourses,
  getByTeacher,
  getByKey,
  getAllCoursesWithStudents,
}
