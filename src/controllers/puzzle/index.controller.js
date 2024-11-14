import registerPuzzle from './register.controller.js'
import getByActivity from './list.controller.js'
import { deleteByActivity, deletePuzzle } from './delete.controller.js'
import updatePuzzle from './update.controller.js'

export default {
  registerPuzzle,
  getByActivity,
  deleteByActivity,
  deletePuzzle,
  updatePuzzle,
}
