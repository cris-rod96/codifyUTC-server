import deleteUser from './delete.controller.js'
import {
  getAllUsers,
  getUserByKey,
  getUsersByActive,
  getUsersByRole,
  getUsersDeleted,
  verfyUser,
  getAll,
} from './list.controller.js'
import registerUser from './register.controller.js'
import {
  updateUser,
  changePassword,
  newPassword,
  updateRole,
} from './update.controller.js'

export default {
  deleteUser,
  getAllUsers,
  getUserByKey,
  getUsersByActive,
  getUsersByRole,
  getUsersDeleted,
  registerUser,
  updateUser,
  verfyUser,
  changePassword,
  newPassword,
  updateRole,
  getAll,
}
