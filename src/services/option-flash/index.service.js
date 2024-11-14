import { deleteByQuestionFlash, deleteOptionFlash } from './delete.service.js'
import getByQuestionFlash from './list.service.js'
import registerOptionFlash from './register.service.js'
import updateOptionFlash from './update.service.js'

export default {
  updateOptionFlash,
  deleteByQuestionFlash,
  deleteOptionFlash,
  getByQuestionFlash,
  registerOptionFlash,
}
