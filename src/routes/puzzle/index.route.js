import { Router } from 'express'
import { puzzleController } from '../../controllers/index.controllers.js'

const puzzleRouter = Router()

puzzleRouter.post('/', puzzleController.registerPuzzle)
puzzleRouter.get('/activity/:activity_id', puzzleController.getByActivity)

puzzleRouter.put('/:id', puzzleController.updatePuzzle)

puzzleRouter.delete('/:id', puzzleController.deletePuzzle)
puzzleRouter.delete('/activity/:activity_id', puzzleController.deleteByActivity)

export default puzzleRouter
