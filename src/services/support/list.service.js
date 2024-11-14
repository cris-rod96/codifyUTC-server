import { Support } from '../../database/index.database.js'

const getAll = async () => {
  const supports = await Support.findAll({})
  return { code: 200, supports }
}

const getById = async (id) => {
  const support = await Support.findOne({
    where: {
      id,
    },
  })

  return support
    ? {
        code: 200,
        support,
      }
    : {
        code: 404,
        message: 'Soporte no disponible. Intente de nuevo.',
      }
}

const getByUser = async (UserId) => {
  const supports = await Support.findAll({
    where: {
      UserId,
    },
  })
  return { code: 200, supports }
}

export { getAll, getById, getByUser }
