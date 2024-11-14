import { Support } from '../../database/index.database.js'

const registerSupport = async (data) => {
  const support = await Support.create(data)
  return support
    ? {
        code: 201,
        message: 'Soporte registrado con éxito.',
      }
    : {
        code: 400,
        message: 'No se pudo registrar el soporte. Intente de nuevo.',
      }
}

export default registerSupport
