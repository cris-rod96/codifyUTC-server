import { OutputBattle } from '../../database/index.database.js'

const updateOutputBattle = async (id, data) => {
  const [rows] = await OutputBattle.update(data, {
    where: {
      id,
    },
  })

  return rows > 0
    ? {
        code: 200,
        message: 'Desafío actualizado con éxito',
      }
    : {
        code: 400,
        message: 'No se pudo actualizar el desafío. Intente de nuevo.',
      }
}

export default updateOutputBattle
