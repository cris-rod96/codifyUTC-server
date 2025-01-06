import { Class, Course, Topic } from '../../database/index.database.js'

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

const getByUser = async (user_id) => {
  const courses = await Course.findAll({
    where: {
      TeacherId: user_id,
      isDeleted: false,
    },
    include: {
      model: Class,
      as: 'Classes',
      where: {
        isDeleted: false,
      },
      include: {
        model: Topic,
      },
    },
  })

  const classes = courses.flatMap((course) =>
    course.Classes.map((cls) => ({
      ...cls.toJSON(), // Convertir la instancia de clase a objeto plano
      courseId: course.id, // Agregar el ID del curso para saber a qué curso pertenece cada clase
      courseName: course.subject, // Agregar el nombre del curso si lo necesitas
    }))
  )

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

    include: {
      model: Topic,
    },
  })

  return { code: 200, classes }
}

const getDeletedClasses = async () => {
  const classes = await Class.findAll({
    where: {
      isDeleted: true,
    },
  })

  return { code: 200, classes }
}
export { getAll, getByKey, getByUser, getDeletedClasses, getByCourse }
