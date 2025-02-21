import deleteCourse from './delete.controller.js'
import {
  getAllCourses,
  getAllDeletedCourses,
  getByTeacher,
  getByKey,
  getAllCoursesWithStudents,
  getCourses,
} from './list.controller.js'
import registerCourse from './register.controller.js'
import { updateCourse, updateWithImage } from './update.controller.js'

export default {
  deleteCourse,
  getCourses,
  getAllCourses,
  getAllDeletedCourses,
  getByTeacher,
  getByKey,
  registerCourse,
  updateCourse,
  updateWithImage,
  getAllCoursesWithStudents,
}
