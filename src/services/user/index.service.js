import deleteUser from './delete.service.js'
import {
  getAll,
  getAllUsers,
  getUserByKey,
  getUsersByActive,
  getUsersByRole,
  getUsersDeleted,
  verfyUser,
} from './list.service.js'
import registerUser from './register.service.js'
import {
  updateUser,
  changePassword,
  newPassword,
  updateRole,
} from './update.service.js'

export default {
  deleteUser,
  getAll,
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
}
