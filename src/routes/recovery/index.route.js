import { Router } from 'express'
import { recoveryController } from '../../controllers/index.controllers.js'

const recoveryRouter = Router()

recoveryRouter.post('/recovery-password', recoveryController.recoveryPassword)

export default recoveryRouter
