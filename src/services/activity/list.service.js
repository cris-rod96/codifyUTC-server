import { Activity, Class } from '../../database/index.database.js'

const classExits = async (id) => {
  return await Class.findOne({ where: { id, isDeleted: false } })
}

const getAllActivities = async () => {
  const activities = await Activity.findAll({})
  return { code: 200, activities }
}

const getByID = async (id) => {
  const activity = await Activity.findOne({ where: { id } })

  return activity
    ? {
        code: 200,
        activity,
      }
    : {
        code: 404,
        message: 'Actividad no disponible. Intente de nuevo.',
      }
}

const getByKey = async (key, value) => {
  const activities = await Activity.findAll({
    where: {
      [key]: value,
    },
  })

  return { code: 200, activities }
}
const getByClass = async (ClassId) => {
  if (!classExits(ClassId))
    return { code: 400, message: 'Clase no disponible. Intente de nuevo.' }

  const activities = await Activity.findAll({
    where: {
      ClassId,
    },
  })

  return { code: 200, activities }
}

export { getAllActivities, getByID, getByClass, getByKey }
