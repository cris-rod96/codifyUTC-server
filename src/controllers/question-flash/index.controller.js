import registerQuestionFlash from './register.controller.js'
import getByActivity from './list.controller.js'
import { deleteByActivity, deleteQuestionFlash } from './delete.controller.js'
import updateQuestionFlash from './update.controller.js'

export default {
  registerQuestionFlash,
  getByActivity,
  deleteByActivity,
  deleteQuestionFlash,
  updateQuestionFlash,
}
