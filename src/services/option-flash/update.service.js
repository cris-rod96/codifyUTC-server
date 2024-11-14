import { OptionFlash } from '../../database/index.database.js'

const updateOptionFlash = async (id, data) => {
  const [rows] = await OptionFlash.update(data, {
    where: {
      id,
    },
  })
  return rows > 0
    ? {
        code: 200,
        message: 'Opción actualizada con éxito',
      }
    : {
        code: 400,
        message:
          'No se pudo actualizar la opción. Verifique e intente de nuevo.',
      }
}

export default updateOptionFlash
