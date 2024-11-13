import deleteUser from './delete.service.js'
import {
  getAllUsers,
  getUserByKey,
  getUsersByActive,
  getUsersByRole,
  getUsersDeleted,
} from './list.service.js'
import registerUser from './register.service.js'
import updateUser from './update.service.js'

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
