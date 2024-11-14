import { Piece, Puzzle } from '../../database/index.database.js'

const puzzleExists = async (id) => {
  return await Puzzle.findOne({
    where: {
      id,
    },
  })
}

const getByPuzzle = async (PuzzleId) => {
  if (!puzzleExists(PuzzleId))
    return {
      code: 404,
      message: 'Puzzle no encontrada. Verifique e intente de nuevo.',
    }

  const pieces = await Piece.findAll({
    where: {
      PuzzleId,
    },
  })

  return { code: 200, pieces }
}

export default getByPuzzle
