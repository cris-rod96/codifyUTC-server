import { Router } from 'express'
import { questionQuizzController } from '../../controllers/index.controllers.js'

const questionQuizzRouter = Router()

questionQuizzRouter.post('/', questionQuizzController.registerQuestionQuizz)
questionQuizzRouter.get(
  '/activity/:activity_id',
  questionQuizzController.getByActivity
)

questionQuizzRouter.put('/:id', questionQuizzController.updateQuestionQuizz)

questionQuizzRouter.delete('/:id', questionQuizzController.deleteQuestionQuizz)
questionQuizzRouter.delete(
  '/activity/:activity_id',
  questionQuizzController.deleteByActivity
)

export default questionQuizzRouter
