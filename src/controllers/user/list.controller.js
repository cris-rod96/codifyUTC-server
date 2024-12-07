import { userService } from '../../services/index.services.js'

const getAllUsers = async (req, res) => {
  try {
    const { code, users } = await userService.getAllUsers()
    return res.status(code).json({ users })
  } catch (error) {
    return res.status(500).json({
      message: `Error interno. Verifique los datos e intente de nuevo.`,
    })
  }
}
const getUserByKey = async (req, res) => {
  try {
    const { key, value } = req.query
    const { code, message, user } = await userService.getUserByKey(key, value)
    return res.status(code).json(message ? { message } : { user })
  } catch (error) {
    return res.status(500).json({
      message: `Error interno. Verifique los datos e intente de nuevo.`,
    })
  }
}
const getUsersByActive = async (req, res) => {
  try {
    const { isActive } = req.params
    const { code, users } = await userService.getUsersByActive(isActive)
    return res.status(code).json({ users })
  } catch (error) {
    return res.status(500).json({
      message: `Error interno. Verifique los datos e intente de nuevo.`,
    })
  }
}
const getUsersByRole = async (req, res) => {
  try {
    const { role } = req.query
    const { code, users } = await userService.getUsersByRole(role)
    return res.status(code).json({ users })
  } catch (error) {
    return res.status(500).json({
      message: `Error interno. Verifique los datos e intente de nuevo.`,
    })
  }
}
const getUsersDeleted = async (req, res) => {
  try {
    const { code, users } = await userService.getUsersDeleted()
    return res.status(code).json({ users })
  } catch (error) {
    return res.status(500).json({
      message: `Error interno. Verifique los datos e intente de nuevo.`,
    })
  }
}

const verfyUser = async (req, res) => {
  try {
    const { email, nick_name } = req.query
    const { code, exist } = await userService.verfyUser(email, nick_name)
    return res.status(code).json({ exist })
  } catch (error) {
    return res.status(500).json({
      message: `Error interno. Verifique los datos e intente de nuevo.`,
    })
  }
}

export {
  getAllUsers,
  getUserByKey,
  getUsersByActive,
  getUsersByRole,
  getUsersDeleted,
  verfyUser,
}
