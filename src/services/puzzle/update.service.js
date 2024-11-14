import { Puzzle } from '../../database/index.database.js'

const updatePuzzle = async (id, data) => {
  const [rows] = await Puzzle.update(data, {
    where: {
      id,
    },
  })

  return rows > 0
    ? {
        code: 200,
        message: 'Puzzle actualizado con éxito',
      }
    : {
        code: 400,
        message: 'No se pudo actualizar el puzzle. Intente de nuevo.',
      }
}

export default updatePuzzle
