import { User } from '../../database/index.database.js'
import { codeService } from '../../services/index.services.js'

const recoveryPassword = async (req, res) => {
  try {
    const { code, message } = await codeService.recoveryPassword({
      ...req.body,
    })

    return res.status(code).json({ message })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      message: 'Error interno. Verifique los datos e intente de nuevo.',
    })
  }
}

export { recoveryPassword }
