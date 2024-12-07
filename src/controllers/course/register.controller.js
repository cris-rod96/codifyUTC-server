import { cloudinaryHelper } from '../../helpers/index.helpers.js'
import { courseService } from '../../services/index.services.js'

const registerCourse = async (req, res) => {
  try {
    const data = req.body
    const poster_course = req.file

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
