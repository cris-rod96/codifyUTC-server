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
  const { CourseId, StudentId, access_code } = data
  console.log(CourseId, StudentId, access_code)

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

  // Verificar si el código de acceso del curso es correcto
  const courseFound = await Course.findOne({
    where: {
      id: CourseId,
      isDeleted: false,
    },
  })

  if (courseFound.access_code !== access_code) {
    return {
      code: 400,
      message: 'Código de acceso incorrecto para este curso. Intente de nuevo.',
    }
  }

  const alreadyRegistered = await CourseStudent.findOne({
    where: {
      CourseId,
      StudentId,
    },
  })
  if (alreadyRegistered) {
    return {
      code: 400,
      message: 'Ya estas registrado en este curso.',
    }
  }

  // Registra al estudiante en el curso
  const courseStudent = await CourseStudent.create(data)
  return courseStudent
    ? {
        code: 201,
        message: 'Has sido registrado con éxito.',
      }
    : {
        code: 400,
        message: 'Error al registrar. Intente de nuevo.',
      }
}

export default registerCourseStudent
