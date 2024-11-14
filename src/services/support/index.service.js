import registerSupport from './register.service.js'
import { getAll, getById, getByUser } from './list.service.js'
import updateSupport from './update.service.js'
import deleteSupport from './delete.service.js'

export default {
  deleteSupport,
  getAll,
  getById,
  getByUser,
  registerSupport,
  updateSupport,
}
