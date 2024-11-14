import { deleteByActivity, deleteQuestionQuizz } from './delete.service.js'
import getByActivity from './list.service.js'
import registerQuestionQuizz from './register.service.js'
import updateQuestionQuizz from './update.service.js'

export default {
  registerQuestionQuizz,
  getByActivity,
  deleteQuestionQuizz,
  deleteByActivity,
  updateQuestionQuizz,
}
