import { deleteByActivity, deleteOutputBattle } from './delete.service.js'
import getByActivity from './list.service.js'
import registerOutputBattle from './register.service.js'
import updateOutputBattle from './update.service.js'

export default {
  registerOutputBattle,
  getByActivity,
  deleteOutputBattle,
  deleteByActivity,
  updateOutputBattle,
}
