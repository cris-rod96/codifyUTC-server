import { deleteByActivity, deletePuzzle } from './delete.service.js'
import getByActivity from './list.service.js'
import registerPuzzle from './register.service.js'
import updatePuzzle from './update.service.js'

export default {
  registerPuzzle,
  getByActivity,
  deletePuzzle,
  deleteByActivity,
  updatePuzzle,
}
