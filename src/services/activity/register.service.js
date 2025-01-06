import { Activity, Class } from '../../database/index.database.js'

const classExits = async (id) => {
  return await Class.findOne({
    where: {
      id,
      isDeleted: false,
    },
  })
}

const registerActivity = async (data) => {
  try {
    const { ClassId } = data
    if (!classExits(ClassId))
      return { code: 404, message: 'Clase no disponible. Intente de nuevo.' }

    const activity = await Activity.create(data)

    return activity
      ? { code: 201, activity }
      : {
          code: 400,
          message: 'No se pudo registrar la actividad. Intente de nuevo.',
        }
  } catch (error) {
    console.log(error.message)
  }
}

export default registerActivity
