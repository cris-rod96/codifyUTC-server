import { CourseStudent, Course, User } from '../../database/index.database.js'

// Servicio para actualizar el registro de un estudiante en un curso
const updateCourseStudent = async (courseId, studentId, updateData) => {
  // Verifica si el curso existe
  const course = await Course.findByPk(courseId)
  if (!course || course.isDeleted) {
    return {
      code: 404,
      message: 'Curso no encontrado o eliminado.',
    }
  }

  // Verifica si el estudiante existe y está activo
  const student = await User.findOne({
    where: { id: studentId, isActive: true, isDeleted: false },
  })
  if (!student) {
    return {
      code: 404,
      message: 'Estudiante no encontrado o no activo.',
    }
  }

  // Verifica si el registro CourseStudent existe
  const courseStudent = await CourseStudent.findOne({
    where: { CourseId: courseId, StudentId: studentId },
  })
  if (!courseStudent) {
    return {
      code: 404,
      message: 'El registro del estudiante en el curso no fue encontrado.',
    }
  }

  // Realiza la actualización (solo los campos necesarios, excluyendo campos sensibles)
  await courseStudent.update(updateData)

  // Retorna el registro actualizado, excluyendo la contraseña
  const updatedRecord = await CourseStudent.findOne({
    where: { CourseId: courseId, StudentId: studentId },
    include: [
      {
        model: User,
        attributes: { exclude: ['password'] }, // Excluir la contraseña del usuario
      },
      {
        model: Course,
      },
    ],
  })

  return {
    code: 200,
    data: updatedRecord,
    message: 'Registro actualizado con éxito.',
  }
}

export default updateCourseStudent
