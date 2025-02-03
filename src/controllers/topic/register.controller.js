import { topicService } from '../../services/index.services.js'

const registerTopics = async (req, res) => {
  try {
    const data = req.body

    // Validar que `data` sea un array
    if (!Array.isArray(data) || data.length === 0) {
      return res.status(400).json({
        message: 'El cuerpo de la solicitud debe ser un array no vacío.',
      })
    }

    // Llamar al servicio
    const { code, message, results, topics } = await topicService.registerTopic(
      data
    )

    // Enviar respuesta con detalles
    return res
      .status(code)
      .json(topics ? { message, results, topics } : { message, results })
  } catch (error) {
    console.error('Error en registerTopics:', error)
    return res.status(500).json({
      message: 'Error interno. Verifique los datos e intente de nuevo.',
    })
  }
}

export default registerTopics
