import { Class } from '../../database/index.database.js'

const updateClass = async (id, data) => {
  const [rows] = await Class.update(data, {
    where: {
      id,
      isDeleted: false,
    },
  })

  return rows > 0
    ? {
        code: 200,
        message: 'Clase actualizada con éxito.',
      }
    : {
        code: 400,
        message: 'No se pudo actualizar la clase. Intente de nuevo.',
      }
}

export default updateClass
