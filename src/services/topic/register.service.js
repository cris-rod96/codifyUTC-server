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
        success: false,
        message: 'Datos incompletos. Faltan propiedades necesarias.',
        data: topicData,
      })
      continue
    }

    // Verificar si la clase existe
    const classFound = await classExits(ClassId)

    if (!classFound) {
      results.push({
        success: false,
        message: `Clase con id ${ClassId} no encontrada o eliminada.`,
        data: topicData,
      })
      continue
    }

    // Verificar si el tema ya existe
    const topicFound = await topicExists(title, ClassId)
    if (topicFound) {
      results.push({
        success: false,
        message: `Ya existe un tema con el mismo nombre en esta clase.`,
        data: topicData,
      })
      continue
    }

    // Crear el tema
    const topic = await Topic.create(topicData)
    console.log(topic)
    results.push({
      success: true,
      message: 'Tema registrado con éxito.',
      data: topic, // Aquí se guarda el objeto creado
    })
  }

  // Obtener solo los Topics creados con éxito
  const successfulTopics = results
    .filter((result) => result.success)
    .map((result) => result.data)

  if (successfulTopics.length > 0) {
    return {
      code: 201,
      message: 'Se registraron algunos temas con éxito.',
      topics: successfulTopics, // Retorna solo los topics creados
    }
  }
  return {
    code: 400,
    message: 'No se pudo crear ningún tema. Verifique los datos',
    results,
  }
}

export default registerTopic
