import { Class, Course } from '../../database/index.database.js'

const courseExists = async (CourseId) => {
  const course = await Course.findOne({
    where: {
      id: CourseId,
      isDeleted: false,
    },
  })

  return course
}

const getAll = async () => {
  const classes = await Class.findAll({
    where: {
      isDeleted: false,
    },
  })

  return { code: 200, classes }
}
const getByKey = async (key, value) => {
  const classFound = await Class.findOne({
    where: {
      [key]: value,
      isDeleted: false,
    },
  })

  return classFound
    ? {
        code: 200,
        classFound,
      }
    : {
        code: 400,
        message: 'Clase no encontrada.',
      }
}

const getByCourse = async (CourseId) => {
  if (!courseExists(CourseId))
    return { code: 400, message: 'Curso no disponible. Intente de nuevo.' }

  const classes = await Class.findAll({
    where: {
      CourseId,
      isDeleted: false,
    },
  })

  return { code: 200, classes }
}

export { getAll, getByKey, getByCourse }
