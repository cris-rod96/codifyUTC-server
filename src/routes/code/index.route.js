import { Router } from 'express'
import { codeController } from '../../controllers/index.controllers.js'

const codeRouter = Router()

codeRouter.put('/activate-account', codeController.activateAccount)
codeRouter.put('/recovery-password', codeController.recoveryPassword)

// requestCode
codeRouter.get('/request/:email', codeController.requestCode)

// resendCode
codeRouter.patch('/resend', codeController.resendCode)

export default codeRouter
