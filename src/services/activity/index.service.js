import registerActivity from './register.service.js'
import {
  getAllActivities,
  getByClass,
  getByID,
  getByKey,
  getByTeacher,
} from './list.service.js'
import updateActivity from './update.service.js'
import deleteActivity from './delete.service.js'

export default {
  deleteActivity,
  getAllActivities,
  getByClass,
  getByID,
  getByKey,
  getByTeacher,
  registerActivity,
  updateActivity,
}
