import { codeService } from '../../services/index.services.js'

const requestCode = async (req, res) => {
  try {
    const { email } = req.params
    if (!email) return { code: 400, message: 'El email es obligatorio.' }
    const { code, message, userData } = await codeService.requestCode(email)
    return res.status(code).json(userData ? { userData, message } : { message })
  } catch (error) {
    console.log('Aqui:', error.message)
    return res.status(500).json({
      message: 'Error interno. Intente de nuevo o contacte un administrador.',
    })
  }
}

export default requestCode
