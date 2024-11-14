import { Router } from 'express'
import { scoreController } from '../../controllers/index.controllers.js'

const scoreRouter = Router()

scoreRouter.post('/', scoreController.registerScore)
scoreRouter.get('/', scoreController.getAll)
scoreRouter.get('/activity/:activity_id', scoreController.getByActivity)
scoreRouter.get('/student/:student_id', scoreController.getByStudent)

export default scoreRouter
