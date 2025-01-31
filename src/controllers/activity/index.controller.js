import { getByClass, getByTeacher, getById } from './list.controller.js'
import {
  createActivity,
  createLightningActivity,
  createBrainBoostActivity,
} from './post.controller.js'
import deleteActivity from './delete.controller.js'
import updateActivity from './update.controller.js'
export default {
  deleteActivity,
  getByClass,
  getById,
  getByTeacher,
  createActivity,
  createLightningActivity,
  createBrainBoostActivity,
  updateActivity,
}
