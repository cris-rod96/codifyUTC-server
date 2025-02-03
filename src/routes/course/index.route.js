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

courseRouter.put(
  '/with-image/:id',
  multerHelper.upload.single('poster'),
  courseController.updateWithImage
)
courseRouter.put(
  '/withouth-image/:id',
  multerHelper.upload.none(),
  courseController.updateCourse
)

courseRouter.delete('/:id', courseController.deleteCourse)

// Obtener todos los cursos con sus estudiantes
courseRouter.get('/with_students', courseController.getAllCoursesWithStudents)

export default courseRouter
