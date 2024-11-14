import { Activity, Puzzle } from '../../database/index.database.js'

const activityExists = async (id) => {
  return await Activity.findOne({
    where: {
      id,
      type: 'Quizz Code',
    },
  })
}

const deletePuzzle = async (id) => {
  const puzzle = await Puzzle.findOne({
    where: {
      id,
    },
  })

  if (!puzzle) return { code: 404, message: 'Puzzle no encontrado.' }

  const rowsDeleted = await Puzzle.destroy({
    where: {
      id,
    },
  })

  return rowsDeleted > 0
    ? {
        code: 200,
        message: 'Puzzle eliminada con éxito',
      }
    : {
        code: 400,
        message: 'Error al eliminar el puzzle. Verifique e intente de nuevo',
      }
}
const deleteByActivity = async (ActivityId) => {
  if (!activityExists(ActivityId))
    return {
      code: 400,
      message: 'Actividad no disponible. Intente de nuevo',
    }

  const rowsDeleted = await Puzzle.destroy({
    where: {
      ActivityId,
    },
  })

  return rowsDeleted > 0
    ? {
        code: 200,
        message: 'Puzzles eliminados correctamente',
      }
    : {
        code: 400,
        message:
          'No se pudieron eliminar los puzzles. Verifique e intente de nuevo.',
      }
}

export { deleteByActivity, deletePuzzle }
