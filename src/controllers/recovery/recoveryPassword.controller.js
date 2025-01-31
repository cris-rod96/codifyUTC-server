import { nodemailerHelper, twilioHelper } from '../../helpers/index.helpers.js'
import { recoveryService } from '../../services/index.services.js'
import randomstring from 'randomstring'
const recoveryPassword = async (req, res) => {
  try {
    const { method, value } = req.body
    const newCode = randomstring.generate({
      length: 4,
      charset: 'numeric',
    })

    if (method === 'Email') {
      const { code, message } = await recoveryService.recoveryPassword({
        email: value,
        code: newCode,
        type: 'Recovery',
        method,
      })
      if (code === 201) {
        nodemailerHelper.recoveryPassword(value, newCode)
      }
      return res.status(code).json({ message })
    } else {
      const { code, message } = await recoveryService.recoveryPassword({
        phone: value,
        code: newCode,
        type: 'Recovery',
        method: 'SMS',
      })

      if (code === 201) {
        twilioHelper.sendMessage(value, newCode, 'recovery')
      }
      return res.status(code).json({ message })
    }
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno. Verifique los datos e intente de nuevo.',
    })
  }
}

export default recoveryPassword
