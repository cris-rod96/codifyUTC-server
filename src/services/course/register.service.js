import { Course, User } from '../../database/index.database.js'

const existTeacher = async (TeacherId) => {
  console.log(TeacherId)
  const teacher = await User.findOne({
    where: {
      id: TeacherId,
      isActive: true,
      isDeleted: false,
      role: 'Docente',
    },
  })

  return teacher
}

const registerCourse = async (data) => {
  const { TeacherId } = data

  console.log(data)

  if (!existTeacher(TeacherId))
    return { code: 400, message: 'Docente no disponible. Intente de nuevo.' }

  const course = await Course.create(data)

  return course
    ? { code: 201, message: 'Curso registrado con éxito.' }
    : {
        code: 400,
        message: 'No se pudo registrar el curso. Intente de nuevo.',
      }
}

export default registerCourse
