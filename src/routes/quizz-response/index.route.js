import { Router } from 'express'
import { quizzResponseController } from '../../controllers/index.controllers.js'

const quizzResponseRouter = Router()

quizzResponseRouter.get(
  '/byResponse/:response_id',
  quizzResponseController.getByResponse
)
quizzResponseRouter.post('/', quizzResponseController.registerQuizzResponse)

export default quizzResponseRouter
