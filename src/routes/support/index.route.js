import { Router } from 'express'
import { supportController } from '../../controllers/index.controllers.js'

const supportRouter = Router()

supportRouter.post('/', supportController.registerSupport)
supportRouter.get('/', supportController.getAll)
supportRouter.get('/:id', supportController.getById)
supportRouter.get('/user/:user_id', supportController.getByUser)
supportRouter.put('/:id', supportController.updateSupport)
supportRouter.delete('/:id', supportController.deleteSupport)

export default supportRouter
