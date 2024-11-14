import { Activity, Puzzle } from '../../database/index.database.js'

const activityExists = async (id) => {
  return await Activity.findOne({
    where: {
      id,
    },
  })
}

const registerPuzzle = async (data) => {
  const { ActivityId } = data

  const activity = await activityExists(ActivityId)

  if (!activity)
    return { code: 400, message: 'Actividad no disponible. Intente de nuevo' }

  if (activity.type !== 'Puzzle') {
    return {
      code: 400,
      message: 'Tipo de actividad incorrecta. Intente de nuevo',
    }
  }

  const puzzle = await Puzzle.create(data)

  return puzzle
    ? {
        code: 201,
        message: 'Puzzle agregado a la actividad correctamente',
      }
    : {
        code: 400,
        message:
          'No se pudo agregar el puzzle. Revise la información e intente de nuevo',
      }
}

export default registerPuzzle
