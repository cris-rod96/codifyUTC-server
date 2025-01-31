import { codeService } from '../../services/index.services.js'
import randomstring from 'randomstring'
import { nodemailerHelper, twilioHelper } from '../../helpers/index.helpers.js'

const resendCode = async (req, res) => {
  try {
    const { method, value, type } = req.query
    const newCode = randomstring.generate({
      length: 4,
      charset: 'numeric',
    })

    const { code, message } = await codeService.resenCode({
      method,
      value,
      newCode,
      type,
    })

    if (code === 200) {
      if (method === 'Email') {
        nodemailerHelper.recoveryPassword(value, newCode)
      } else {
        twilioHelper.sendMessage(value, newCode, 'recovery')
      }
    }
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor. Verifique e intente de nuevo.',
    })
  }
}

export default resendCode
