import { Course } from '../../database/index.database.js'

const updateCourse = async (id, data) => {
  const course = await Course.findOne({
    where: {
      id,
      isDeleted: false,
    },
  })
  if (!course) return { code: 400, message: 'Curso no encontrado.' }

  const [rows] = await Course.update(data, {
    where: { id, isDeleted: false },
  })

  return rows > 0
    ? {
        code: 200,
        message: 'Curso actualizado con éxito.',
      }
    : {
        code: 400,
        message: 'No se pudo actualizar el curso. Intente de nuevo.',
      }
}

export default updateCourse
