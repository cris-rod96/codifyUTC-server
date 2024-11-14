import { Activity, Puzzle } from '../../database/index.database.js'

const activityExists = async (id) => {
  return await Activity.findOne({
    where: {
      id,
      type: 'Puzzle',
    },
  })
}

const getByActivity = async (ActivityId) => {
  if (!activityExists(ActivityId))
    return {
      code: 400,
      message: 'Actividad no disponible. Intente de nuevo',
    }

  const puzzles = await Puzzle.findAll({
    where: {
      ActivityId,
    },
  })

  return { code: 200, puzzles }
}

export default getByActivity
