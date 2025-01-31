import deleteTopic from './delete.controller.js'
import { getAllTopics, getByClass, getById } from './list.controller.js'
import registerTopic from './register.controller.js'
import updateTopic from './update.controller.js'

export default {
  deleteTopic,
  getById,
  getAllTopics,
  getByClass,
  registerTopic,
  updateTopic,
}
