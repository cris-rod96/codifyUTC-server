import { Router } from 'express'
import { questionFlashController } from '../../controllers/index.controllers.js'

const questionFlashRouter = Router()

questionFlashRouter.post('/', questionFlashController.registerQuestionFlash)
questionFlashRouter.get(
  '/activity/:activity_id',
  questionFlashController.getByActivity
)

questionFlashRouter.put('/:id', questionFlashController.updateQuestionFlash)

questionFlashRouter.delete('/:id', questionFlashController.deleteQuestionFlash)
questionFlashRouter.delete(
  '/activity/:activity_id',
  questionFlashController.deleteByActivity
)

export default questionFlashRouter
