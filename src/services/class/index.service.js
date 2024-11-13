import deleteClass from './delete.service.js'
import {
  getAll,
  getByCourse,
  getByKey,
  getDeletedClasses,
} from './list.service.js'
import registerClass from './register.service.js'
import updateClass from './update.service.js'

export default {
  getAll,
  deleteClass,
  getByCourse,
  getByKey,
  getDeletedClasses,
  registerClass,
  updateClass,
}
