import {
  Class,
  Course,
  CourseStudent,
  User,
} from '../../database/index.database.js'

const teacherExists = async (TeacherId) => {
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

const getAllCourses = async () => {
  const courses = await Course.findAll({})

  return { code: 200, courses }
}

const getByTeacher = async (TeacherId) => {
  if (!teacherExists(TeacherId))
    return { code: 400, message: 'Docente no disponible. Intente de nuevo.' }
  const courses = await Course.findAll({
    where: {
      TeacherId,
      isDeleted: false,
    },
    include: [
      {
        model: User,
        as: 'Students',
      },
      {
        model: Class,
        as: 'Classes',
      },
    ],
  })
  return { code: 200, courses }
}

const getByKey = async (key, value) => {
  const course = await Course.findOne({
    where: {
      [key]: value,
      isDeleted: false,
    },
  })

  return course
    ? { code: 200, course }
    : { code: 400, message: 'Curso no encontrado.' }
}

const getAllDeletedCourses = async () => {
  const courses = await Course.findAll({
    where: {
      isDeleted: true,
    },
  })

  return { code: 200, courses }
}

const getAllCoursesWithStudents = async () => {
  const courses = await Course.findAll({
    where: {
      isDeleted: false,
    },

    include: {
      model: User,
      as: 'Students',
      through: { attributes: [] },
    },
  })

  return { code: 200, courses }
}

export {
  getAllCourses,
  getAllDeletedCourses,
  getByTeacher,
  getByKey,
  getAllCoursesWithStudents,
}
