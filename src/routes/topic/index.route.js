import { Router } from 'express'
import { topicController } from '../../controllers/index.controllers.js'

const topicRouter = Router()

topicRouter.post('/', topicController.registerTopic)
topicRouter.get('/', topicController.getAllTopics)
topicRouter.get('/:id', topicController.getById)
topicRouter.get('/class/:class_id', topicController.getByClass)
topicRouter.put('/:id', topicController.updateTopic)
topicRouter.delete('/:id', topicController.deleteTopic)

export default topicRouter
