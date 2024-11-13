import { userService } from '../../services/index.services.js'
import { bcryptUtl } from '../../utils/index.utils.js'

const registerUser = async (req, res) => {
  try {
    const { password } = req.body
    const passwordHashed = await bcryptUtl.hashPassword(password)

    const { code, message } = await userService.registerUser({
      ...req.body,
      password: passwordHashed,
    })

    return res.status(code).json({ message })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      message: 'Error interno. Verifique los datos e intente de nuevo.',
    })
  }
}

export default registerUser
