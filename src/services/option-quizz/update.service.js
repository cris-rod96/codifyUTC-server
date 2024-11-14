import { OptionQuizz } from '../../database/index.database.js'

const updateOptionQuizz = async (id, data) => {
  const [rows] = await OptionQuizz.update(data, {
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

export default updateOptionQuizz
