import { userService } from '../../services/index.services.js'
import { bcryptUtl } from '../../utils/index.utils.js'

const updateUser = async (req, res) => {
  try {
    const { id } = req.params
    const data = req.body

    if (data.password) {
      const passwordHashed = await bcryptUtl.hashPassword(data.password)
      data.password = passwordHashed
    }
    const { code, message } = await userService.updateUser(id, data)
    return res.status(code).json({ message })
  } catch (error) {
    return res.status(500).json({
      message: `Error interno en el servidor. Verifique los datos e intente de nuevo`,
    })
  }
}

export default updateUser
