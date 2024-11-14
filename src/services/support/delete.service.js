import { Support } from '../../database/index.database.js'

const deleteSupport = async (id) => {
  const rowsDeleted = await Support.destroy({
    where: {
      id,
    },
  })

  return rowsDeleted > 0
    ? { code: 200, message: 'Soporte eliminado con éxito.' }
    : { code: 404, message: 'Soporte no encontrado.' }
}

export default deleteSupport
