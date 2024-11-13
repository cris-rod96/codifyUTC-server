import { Router } from 'express'
import { authController } from '../../controllers/index.controllers.js'

const authRouter = Router()

authRouter.post('/login', authController.login)

export default authRouter
