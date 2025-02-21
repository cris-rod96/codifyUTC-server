import { User } from '../../database/index.database.js'
import {
  cloudinaryHelper,
  nodemailerHelper,
} from '../../helpers/index.helpers.js'
import { courseService } from '../../services/index.services.js'

const registerCourse = async (req, res) => {
  try {
    const data = req.body
    const poster_course = req.file

    console.log(data)

    let poster = null
    if (poster_course) {
      poster = await cloudinaryHelper.uploadImage(
        'courses',
        poster_course.buffer,
        poster_course.originalname
      )
    }

    const { code, message } = await courseService.registerCourse({
      ...data,
      poster,
    })

    if (code === 201) {
      const user = await User.findOne({
        where: {
          id: data.TeacherId,
        },
      })

      if (data.TeacherId) {
        nodemailerHelper.courseAssigned(
          user.email,
          user.full_name,
          `${data.subject} - ${data.semester} Sistemas`,
          data.code
        )
      }
    }

    return res.status(code).json({ message })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message:
        'Error interno en el servidor. Verifique los datos e intente de nuevo.',
    })
  }
}

export default registerCourse
