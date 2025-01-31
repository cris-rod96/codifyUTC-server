import deleteTopic from './delete.service.js'
import { getAllTopics, getByClass, getById } from './list.service.js'
import registerTopic from './register.service.js'
import updateTopic from './update.service.js'

export default {
  deleteTopic,
  getAllTopics,
  getById,
  getByClass,
  registerTopic,
  updateTopic,
}
