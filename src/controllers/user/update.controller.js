import {
  cloudinaryHelper,
  nodemailerHelper,
} from '../../helpers/index.helpers.js'
import { userService } from '../../services/index.services.js'
import { bcryptUtl } from '../../utils/index.utils.js'

const updateUser = async (req, res) => {
  try {
    const { id } = req.params
    const image = req.file

    let profile_picture = null

    if (image) {
      profile_picture = await cloudinaryHelper.uploadImage(
        'users',
        image.buffer,
        image.originalname
      )
    }
    const { code, message, data } = await userService.updateUser(id, {
      ...req.body,
      profile_picture,
    })
    return res.status(code).json(data ? { message, data } : { message })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      message: `Error interno en el servidor. Verifique los datos e intente de nuevo`,
    })
  }
}

const changePassword = async (req, res) => {
  try {
    const { password, ...data } = req.body
    const passwordHashed = await bcryptUtl.hashPassword(password)
    const { code, message } = await userService.changePassword({
      ...data,
      password: passwordHashed,
    })

    return res.status(code).json({ message })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      message: `Error interno en el servidor. Verifique los datos e intente de nuevo`,
    })
  }
}

const newPassword = async (req, res) => {
  try {
    const { user_id } = req.params
    const { password } = req.body
    const passwordHashed = await bcryptUtl.hashPassword(password)
    const { code, message } = await userService.newPassword(
      user_id,
      passwordHashed
    )
    return res.status(code).json({ message })
  } catch (error) {
    return res.status(500).json({
      message: `Error interno en el servidor. Verifique los datos e intente de nuevo`,
    })
  }
}

const updateRole = async (req, res) => {
  try {
    const { user_id, role } = req.body
    console.log(user_id, role)
    const { code, message, user } = await userService.updateRole(user_id, role)

    if (code === 200) {
      nodemailerHelper.rolAssigned(user.email, user.full_name, role)
    }

    return res.status(code).json({
      message,
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: `Error interno en el servidor. Verifique los datos e intente de nuevo`,
    })
  }
}

export { updateUser, changePassword, newPassword, updateRole }
