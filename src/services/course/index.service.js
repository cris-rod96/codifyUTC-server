import deleteCourse from './delete.service.js'
import {
  getAllCourses,
  getAllDeletedCourses,
  getByKey,
  getByTeacher,
  getAllCoursesWithStudents,
  getCourses,
} from './list.service.js'
import registerCourse from './register.service.js'
import updateCourse from './update.service.js'

export default {
  deleteCourse,
  getCourses,
  getAllCourses,
  getAllDeletedCourses,
  getByKey,
  getByTeacher,
  registerCourse,
  updateCourse,
  getAllCoursesWithStudents,
}
