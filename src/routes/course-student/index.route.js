import { Router } from 'express'
import { courseStudentController } from '../../controllers/index.controllers.js'

const courseStudentRouter = Router()

courseStudentRouter.post('/', courseStudentController.registerCourseStudent)
courseStudentRouter.get('/', courseStudentController.getCourseStudentRecord)
courseStudentRouter.get(
  '/student/:student_id',
  courseStudentController.getCoursesByStudent
)
courseStudentRouter.get(
  '/course/:course_id',
  courseStudentController.getStudentsByCourse
)
courseStudentRouter.delete('/:id', courseStudentController.deleteCourseStudent)

export default courseStudentRouter
