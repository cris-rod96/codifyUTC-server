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

const registerClass = async (data) => {
  const { CourseId } = data

  if (!courseExists(CourseId))
    return { code: 400, message: 'Curso no disponible. Intente de nuevo.' }

  const new_class = await Class.create(data)

  if (new_class) {
    const classWithTopic = await Class.findByPk(new_class.id, {
      include: [{ model: Topic, as: 'Topics' }],
    })

    return {
      code: 201,
      message: 'Clase registrada con éxito.',
      new_class: classWithTopic,
    }
  }

  return {
    code: 400,
    message: 'No se pudo registrar la clase. Intente de nuevo.',
  }
}

export default registerClass
