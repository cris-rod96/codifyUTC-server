import { Router } from 'express'
import { classController } from '../../controllers/index.controllers.js'

const classRouter = Router()

classRouter.get('/', classController.getAll)
classRouter.get('/course/:course_id', classController.getByCourse)
classRouter.get('/search', classController.getByKey)
classRouter.get('/deleted', classController.getDeletedClasses)
classRouter.post('/', classController.registerClass)
classRouter.put('/:id', classController.updateClass)
classRouter.delete('/:id', classController.deleteClass)

export default classRouter
