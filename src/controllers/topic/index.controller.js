import updateTopic from '../../services/topic/update.service.js'
import deleteTopic from './delete.controller.js'
import { getAllTopics, getByClass } from './list.controller.js'
import registerTopic from './register.controller.js'

export default {
  deleteTopic,
  getAllTopics,
  getByClass,
  registerTopic,
  updateTopic,
}
