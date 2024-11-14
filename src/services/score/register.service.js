import { Score, User, Activity } from '../../database/index.database.js'

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

const registerScore = async (data) => {
  const { StudentId, ActivityId } = data

  const student = await studentExists(StudentId)
  const activity = await activityExists(ActivityId)

  if (!student)
    return { code: 400, message: 'Estudiante no disponible. Intente de nuevo.' }

  if (!activity)
    return { code: 400, message: 'Actividad no disponible. Intente de nuevo.' }

  const score = await Score.create(data)

  return score
    ? { code: 201, message: 'Calificación registrada con éxito.' }
    : {
        code: 400,
        message: 'No se pudo registrar la calificación. Intente de nuevo.',
      }
}

export default registerScore
