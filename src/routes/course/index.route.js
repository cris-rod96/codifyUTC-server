import { Router } from 'express'
import { courseController } from '../../controllers/index.controllers.js'
import { multerHelper } from '../../helpers/index.helpers.js'

const courseRouter = Router()

courseRouter.post(
  '/',
  multerHelper.upload.single('poster'),
  courseController.registerCourse
)
courseRouter.get('/all', courseController.getAllCourses)
courseRouter.get('/deleted', courseController.getAllDeletedCourses)
courseRouter.get('/teacher/:teacher_id', courseController.getByTeacher)
courseRouter.get('/search', courseController.getByKey)
courseRouter.put('/:id', courseController.updateCourse)
courseRouter.delete('/:id', courseController.deleteCourse)

export default courseRouter
