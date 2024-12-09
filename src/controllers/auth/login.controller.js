import { nodemailerHelper } from '../../helpers/index.helpers.js'
import { authService } from '../../services/index.services.js'

const login = async (req, res) => {
  try {
    const { email, password, loginLocation } = req.body

    const { code, message, token, user } = await authService.login(
      email,
      password,
    )

    // if (code === 200) {
    //   nodemailerHelper.loginNotification(
    //     email,
    //     user.full_name,
    //     loginLocation.ip,
    //     loginLocation.city,
    //   )
    // }

    return res.status(code).json(message ? { message } : { token, user })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      message: 'Error interno. Verifique los datos e intente de nuevo.',
    })
  }
}

export default login
