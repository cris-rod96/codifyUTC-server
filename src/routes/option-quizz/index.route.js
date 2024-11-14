import { Router } from 'express'
import { optionQuizzController } from '../../controllers/index.controllers.js'

const optionQuizzRouter = Router()

optionQuizzRouter.get(
  '/question-quizz/:question_id',
  optionQuizzController.getByQuestionQuizz
)

optionQuizzRouter.post('/', optionQuizzController.registerOptionQuizz)

optionQuizzRouter.put('/:id', optionQuizzController.updateOptionQuizz)

optionQuizzRouter.delete('/:id', optionQuizzController.deleteOptionQuizz)

optionQuizzRouter.delete(
  '/question-quizz/:question_id',
  optionQuizzController.deleteByQuestionQuizz
)

export default optionQuizzRouter
