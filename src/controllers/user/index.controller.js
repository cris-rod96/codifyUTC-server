import deleteUser from './delete.controller.js'
import {
  getAllUsers,
  getUserByKey,
  getUsersByActive,
  getUsersByRole,
  getUsersDeleted,
} from './list.controller.js'
import registerUser from './register.controller.js'
import updateUser from './update.controller.js'

export default {
  deleteUser,
  getAllUsers,
  getUserByKey,
  getUsersByActive,
  getUsersByRole,
  getUsersDeleted,
  registerUser,
  updateUser,
}
