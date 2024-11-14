import { Support } from '../../database/index.database.js'

const updateSupport = async (id, data) => {
  const [rows] = await Support.update(data, {
    where: {
      id,
    },
  })

  return rows > 0
    ? {
        code: 200,
        message: 'Soporte actualizado con éxito.',
      }
    : {
        code: 400,
        message: 'No se pudo actualizar el soporte. Intente de nuevo.',
      }
}

export default updateSupport
