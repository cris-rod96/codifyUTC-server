import { Class, Topic } from '../../database/index.database.js'

const classExits = async (id) => {
  return await Class.findOne({
    where: {
      id,
      isDeleted: false,
    },
  })
}

const topicExists = async (title, ClassId) => {
  return await Topic.findOne({
    where: {
      title,
      ClassId,
    },
  })
}

const registerTopic = async (data) => {
  if (!Array.isArray(data) || data.length === 0) {
    return {
      code: 400,
      message: 'Formato incorrecto. Debe ser un array no vacío.',
    }
  }

  const results = []

  for (const topicData of data) {
    const { title, content, ClassId } = topicData

    if (!title || !content || !ClassId) {
      results.push({
        data: topicData,
        success: false,
        message: 'Datos incompletos. Faltan propiedades necesarias.',
      })

      continue
    }

    // Verificar si la clase existe
    const classFound = await classExits(ClassId)

    if (!classFound) {
      results.push({
        data: topicData,
        success: false,
        message: `Clase con id ${ClassId} no encontrada o eliminada.`,
      })

      continue
    }

    // Verificar si el tema ya existe
    const topicFound = await topicExists(title, ClassId)
    if (topicFound) {
      results.push({
        data: topicData,
        success: false,
        message: `Ya existe un tema con el mismo nombre en esta clase.`,
      })
      continue
    }

    // Crear el tema
    const topic = await Topic.create(topicData)
    results.push({
      data: topic,
      success: true,
      message: 'Tema registrado con éxito.',
    })
  }

  //  Verificar si hubo al menos un tema creado con éxito
  const successful = results.filter((result) => result.success)

  if (successful.length > 0) {
    return {
      code: 201,
      message: 'Se registrador algunos temas con éxito.',
      results,
    }
  }
  return {
    code: 400,
    message: 'No se pudo crear ningún tema. Verifique los datos',
    results,
  }
}

export default registerTopic
