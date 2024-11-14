import { Activity, Response, User } from '../../database/index.database.js'

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

const activityExists = async (id) => {
  return await Activity.findOne({
    where: {
      id,
      isDeleted: false,
    },
  })
}

const registerResponse = async (data) => {
  const { StudentId, ActivityId } = data

  const student = await studentExists(StudentId)
  const activity = await activityExists(ActivityId)

  if (!student)
    return { code: 400, message: 'Estudiante no disponible. Intente de nuevo.' }
  if (!activity)
    return { code: 400, message: 'Actividad no disponible. Intente de nuevo.' }

  const response = await Response.create(data)

  return response
    ? { code: 201, message: 'Respuesta registrada con éxito.' }
    : {
        code: 400,
        message: 'No se pudo registrar la respuesta. Intente de nuevo.',
      }
}

export default registerResponse
