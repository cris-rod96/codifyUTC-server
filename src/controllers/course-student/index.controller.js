import { deleteCourseStudent, bannedStudent } from './delete.controller.js'
import {
  getCourseStudentRecord,
  getCoursesByStudent,
  getStudentsByCourse,
} from './list.controller.js'
import registerCourseStudent from './register.controller.js'

export default {
  getCourseStudentRecord,
  getCoursesByStudent,
  getStudentsByCourse,
  registerCourseStudent,
  deleteCourseStudent,
  bannedStudent,
}
