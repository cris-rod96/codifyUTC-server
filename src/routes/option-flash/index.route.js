import { Router } from 'express'
import { optionFlashController } from '../../controllers/index.controllers.js'

const optionFlashRouter = Router()

optionFlashRouter.get(
  '/question-flash/:question_id',
  optionFlashController.getByQuestionFlash
)

optionFlashRouter.post('/', optionFlashController.registerOptionFLash)

optionFlashRouter.put('/:id', optionFlashController.updateOptionFLash)

optionFlashRouter.delete('/:id', optionFlashController.deleteOptionFlash)

optionFlashRouter.delete(
  '/question-flash/:question_id',
  optionFlashController.deleteByQuestionFlash
)

export default optionFlashRouter
