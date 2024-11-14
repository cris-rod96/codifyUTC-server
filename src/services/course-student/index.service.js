import {
  getCourseStudentRecord,
  getCoursesByStudent,
  getStudentsByCourse,
} from './list.service.js'

import registerCourseStudent from './register.service.js'
import deleteCourseStudent from './delete.service.js'
import updateCourseStudent from './update.service.js'

export default {
  getCourseStudentRecord,
  getCoursesByStudent,
  getStudentsByCourse,
  registerCourseStudent,
  deleteCourseStudent,
  updateCourseStudent,
}
