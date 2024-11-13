import registerClass from './register.controller.js'
import {
  getAll,
  getByCourse,
  getByKey,
  getDeletedClasses,
} from './list.controller.js'
import updateClass from './update.controller.js'
import deleteClass from './delete.controller.js'

export default {
  registerClass,
  getAll,
  getByCourse,
  getByKey,
  getDeletedClasses,
  updateClass,
  deleteClass,
}
