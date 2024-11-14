import { Piece, Puzzle } from '../../database/index.database.js'

const puzzleExists = async (id) => {
  return await Puzzle.findOne({
    where: {
      id,
    },
  })
}

const registerPiece = async (data) => {
  const { PuzzleId } = data

  if (!puzzleExists(PuzzleId))
    return {
      code: 404,
      message: 'Puzzle no encontrado. Verifique e intente de nuevo.',
    }

  const piece = await Piece.create(data)

  return piece
    ? {
        code: 201,
        message: 'Fragmento registrado con éxito',
      }
    : {
        code: 400,
        message: 'Error al guardar la respuesta. Verifique e intente de nuevo',
      }
}

export default registerPiece
