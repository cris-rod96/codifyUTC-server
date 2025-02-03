import { Router } from 'express'
import { lightningResponseController } from '../../controllers/index.controllers.js'

const lightningResponseRouter = Router()

lightningResponseRouter.get(
  '/byResponse/:response_id',
  lightningResponseController.getByResponse
)
lightningResponseRouter.post(
  '/',
  lightningResponseController.registerLightningResponse
)

export default lightningResponseRouter
