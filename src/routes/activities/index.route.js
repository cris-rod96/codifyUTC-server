import { Router } from 'express'
import { activityController } from '../../controllers/index.controllers.js'
import { multerHelper } from '../../helpers/index.helpers.js'

const activityRouter = Router()

activityRouter.post(
  '/',
  multerHelper.upload.single('activity_poster'),
  activityController.createActivity
)

activityRouter.post(
  '/lightning',
  multerHelper.upload.none(),
  activityController.createLightningActivity
)
activityRouter.post(
  '/brain',
  multerHelper.upload.none(),
  activityController.createBrainBoostActivity
)

activityRouter.get('/class/:class_id', activityController.getByClass)
activityRouter.get('/teacher/:user_id', activityController.getByTeacher)
activityRouter.get('/:id', activityController.getById)

activityRouter.delete('/:activity_id', activityController.deleteActivity)
activityRouter.put('/:activity_id', activityController.updateActivity)
export default activityRouter
