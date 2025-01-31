import { CourseStudent, Course, User } from '../../database/index.database.js'

// Servicio para eliminar el registro de un estudiante en un curso
const deleteCourseStudent = async (course_id, student_id) => {
  try {
    // Verifica si el curso existe sin recuperar toda la fila
    const courseExists = await Course.count({
      where: { id: course_id, isDeleted: false },
    })
    if (!courseExists) {
      return {
        code: 404,
        message: 'Curso no encontrado o eliminado.',
      }
    }

    // Verifica si el estudiante existe y está activo
    const studentExists = await User.count({
      where: { id: student_id, isActive: true, isDeleted: false },
    })
    if (!studentExists) {
      return {
        code: 404,
        message: 'Estudiante no encontrado o no activo.',
      }
    }

    // Verifica si el registro CourseStudent existe
    const courseStudent = await CourseStudent.findOne({
      where: { CourseId: course_id, StudentId: student_id },
    })
    if (!courseStudent) {
      return {
        code: 404,
        message: 'El registro del estudiante en el curso no fue encontrado.',
      }
    }

    // Realiza la eliminación del registro
    await courseStudent.destroy()

    return {
      code: 200,
      message: 'Estudiante eliminado del curso con éxito.',
    }
  } catch (error) {
    console.error('Error al eliminar el registro:', error)
    return {
      code: 500,
      message: 'Ocurrió un error al intentar eliminar el registro.',
    }
  }
}

export default deleteCourseStudent
