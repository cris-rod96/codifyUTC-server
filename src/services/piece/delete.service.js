import { Piece, Puzzle } from '../../database/index.database.js'

const puzzleExists = async (id) => {
  return await Puzzle.findOne({
    where: {
      id,
    },
  })
}

const deletePiece = async (id) => {
  const piece = await Piece.findOne({
    where: {
      id,
    },
  })

  if (!piece)
    return {
      code: 400,
      message: 'Fragmento no encontrado. Verifique e intente de nuevo.',
    }

  const rowsDeleted = await Piece.destroy({
    where: {
      id,
    },
  })

  return rowsDeleted > 0
    ? {
        code: 200,
        message: 'Fragmento eliminado con éxito',
      }
    : {
        code: 400,
        message:
          'Error al eliminar el fragmento. Verifique e intente de nuevo.',
      }
}
const deleteByPuzzle = async (PuzzleId) => {
  if (!puzzleExists(PuzzleId))
    return {
      code: 404,
      message: 'Puzzle no encontrado. Verifique e intente de nuevo.',
    }

  const rowsDeleted = await Piece.destroy({
    where: {
      PuzzleId,
    },
  })

  return rowsDeleted > 0
    ? {
        code: 200,
        message: 'Fragmentos eliminados con éxito',
      }
    : {
        code: 400,
        message: 'Error al eliminar los fragmentos. Intente de nuevo.',
      }
}

export { deleteByPuzzle, deletePiece }
