import deleteCourse from './delete.controller.js'
import {
  getAllCourses,
  getAllDeletedCourses,
  getByTeacher,
  getByKey,
  getAllCoursesWithStudents,
} from './list.controller.js'
import registerCourse from './register.controller.js'
import { updateCourse, updateWithImage } from './update.controller.js'

export default {
  deleteCourse,
  getAllCourses,
  getAllDeletedCourses,
  getByTeacher,
  getByKey,
  registerCourse,
  updateCourse,
  updateWithImage,
  getAllCoursesWithStudents,
}
