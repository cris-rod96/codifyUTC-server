import { Piece } from '../../database/index.database.js'

const updatePiece = async (id, data) => {
  const [rows] = await Piece.update(data, {
    where: {
      id,
    },
  })
  return rows > 0
    ? {
        code: 200,
        message: 'Fragmento actualizado con éxito',
      }
    : {
        code: 400,
        message:
          'No se pudo actualizar el fragmento. Verifique e intente de nuevo.',
      }
}

export default updatePiece
