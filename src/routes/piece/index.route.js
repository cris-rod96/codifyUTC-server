import { Router } from 'express'
import { pieceController } from '../../controllers/index.controllers.js'

const pieceRouter = Router()

pieceRouter.post('/', pieceController.registerPiece)
pieceRouter.get('/puzzle/:puzzle_id', pieceController.getByPuzzle)

pieceRouter.put('/:id', pieceController.updatePiece)

pieceRouter.delete('/:id', pieceController.deletePiece)
pieceRouter.delete('/puzzle/:puzzle_id', pieceController.deleteByPuzzle)

export default pieceRouter
