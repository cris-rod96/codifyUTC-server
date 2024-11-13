import { Course } from '../../database/index.database.js'

const deleteCourse = async (id) => {
  const course = await Course.findOne({
    where: {
      id,
      isDeleted: false,
    },
  })

  if (!course) return { code: 400, message: 'Curso no encontrado.' }

  course.isDeleted = true
  await course.save()

  return { code: 200, message: 'Curso eliminado con éxito.' }
}

export default deleteCourse
