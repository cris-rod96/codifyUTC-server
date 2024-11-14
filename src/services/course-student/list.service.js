import { Course, CourseStudent, User } from '../../database/index.database.js'

// Obtener todos los estudiantes de un curso específico
const getStudentsByCourse = async (courseId) => {
  const course = await Course.findByPk(courseId)

  if (!course || course.isDeleted) {
    return {
      code: 404,
      message: 'Curso no encontrado o eliminado.',
    }
  }

  const students = await CourseStudent.findAll({
    where: { CourseId: courseId },
    include: [
      {
        model: User,
        attributes: {
          exclude: ['password'],
        }, // ajusta los atributos según necesites
        where: { isActive: true, isDeleted: false },
      },
    ],
  })

  return {
    code: 200,
    data: students,
    message:
      students.length > 0
        ? 'Estudiantes encontrados'
        : 'No hay estudiantes en este curso.',
  }
}

// Obtener todos los cursos en los que está registrado un estudiante específico
const getCoursesByStudent = async (studentId) => {
  const student = await User.findByPk(studentId)

  if (
    !student ||
    student.isDeleted ||
    !student.isActive ||
    student.role !== 'Estudiante'
  ) {
    return {
      code: 404,
      message: 'Estudiante no encontrado o no activo.',
    }
  }

  const courses = await CourseStudent.findAll({
    where: { StudentId: studentId },
    include: [
      {
        model: Course,
        where: { isDeleted: false },
      },
    ],
  })

  return {
    code: 200,
    data: courses,
    message:
      courses.length > 0
        ? 'Cursos encontrados'
        : 'No hay cursos para este estudiante.',
  }
}

// Obtener el registro de un estudiante en un curso específico
const getCourseStudentRecord = async (courseId, studentId) => {
  const courseStudent = await CourseStudent.findOne({
    where: {
      CourseId: courseId,
      StudentId: studentId,
    },
    include: [
      {
        model: User,
        attributes: {
          exclude: ['password'],
        },
      }, // ajusta los atributos según necesites
      { model: Course }, // ajusta los atributos según necesites
    ],
  })

  return courseStudent
    ? {
        code: 200,
        data: courseStudent,
        message: 'Registro encontrado.',
      }
    : {
        code: 404,
        message: 'No se encontró el registro de este estudiante en el curso.',
      }
}

export { getStudentsByCourse, getCoursesByStudent, getCourseStudentRecord }
