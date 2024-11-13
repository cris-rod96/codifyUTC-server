import { classService } from '../../services/index.services.js'

const registerClass = async (req, res) => {
  try {
    const data = req.body
    const { code, message } = await classService.registerClass(data)
    return res.status(code).json({ message })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      message: 'Error interno. Verifique los datos e intente de nuevo.',
    })
  }
}

export default registerClass
