import { User } from '../../database/index.database.js'
import { nodemailerHelper } from '../../helpers/index.helpers.js'
import { codeService } from '../../services/index.services.js'

const activateAccount = async (req, res) => {
  try {
    const { email, code: code_verification } = req.body
    const { code, message } = await codeService.activateAccount({
      email,
      code: code_verification,
    })

    const user = await User.findOne({
      where: {
        email,
      },
    })
    console.log(user)
    if (user) {
      user.isActive = true
      await user.save()
      nodemailerHelper.confirmActivation(user.email)
    }

    return res.status(code).json({ message })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      message: 'Error interno. Verifique los datos e intente de nuevo.',
    })
  }
}

export { activateAccount }
