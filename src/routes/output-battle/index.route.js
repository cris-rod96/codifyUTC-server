import { Router } from 'express'
import { outputBattleController } from '../../controllers/index.controllers.js'

const outputBattleRouter = Router()

outputBattleRouter.post('/', outputBattleController.registerOutputBattle)
outputBattleRouter.get(
  '/activity/:activity_id',
  outputBattleController.getByActivity
)

outputBattleRouter.put('/:id', outputBattleController.updateOutputBattle)

outputBattleRouter.delete('/:id', outputBattleController.deleteOutputBattle)
outputBattleRouter.delete(
  '/activity/:activity_id',
  outputBattleController.deleteByActivity
)

export default outputBattleRouter
