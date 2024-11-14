import { Course, CourseStudent, User } from '../../database/index.database.js'

// Verifica si el curso existe y no está eliminado
const courseExists = async (id) => {
  return await Course.findOne({
    where: {
      id,
      isDeleted: false,
    },
  })
}

// Verifica si el estudiante existe, está activo y no está eliminado
const studentExists = async (id) => {
  return await User.findOne({
    where: {
      id,
      isActive: true,
      isDeleted: false,
      role: 'Estudiante',
    },
  })
}

// Servicio para registrar un estudiante en un curso
const registerCourseStudent = async (data) => {
  const { CourseId, StudentId } = data

  // Verifica la existencia del curso
  const course = await courseExists(CourseId)
  if (!course) {
    return {
      code: 400,
      message: 'Curso no disponible. Intente de nuevo.',
    }
  }

  // Verifica la existencia del estudiante
  const student = await studentExists(StudentId)
  if (!student) {
    return {
      code: 400,
      message: 'Estudiante no disponible. Intente de nuevo.',
    }
  }

  // Verifica si el estudiante ya está registrado en el curso
  const alreadyRegistered = await CourseStudent.findOne({
    where: {
      CourseId,
      StudentId,
    },
  })
  if (alreadyRegistered) {
    return {
      code: 400,
      message: 'El estudiante ya está registrado en este curso.',
    }
  }

  // Registra al estudiante en el curso
  const courseStudent = await CourseStudent.create(data)
  return courseStudent
    ? {
        code: 201,
        message: 'Estudiante registrado en el curso con éxito.',
      }
    : {
        code: 400,
        message: 'Estudiante no registrado en el curso. Intente de nuevo.',
      }
}

export default registerCourseStudent
