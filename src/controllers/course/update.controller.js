import { cloudinaryHelper } from '../../helpers/index.helpers.js'
import { courseService } from '../../services/index.services.js'

const updateCourse = async (req, res) => {
  try {
    const { id } = req.params
    const data = req.body

    const { code, message } = await courseService.updateCourse(id, data)
    return res.status(code).json({
      message,
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno. Verifique los datos e intente de nuevo.',
    })
  }
}

const updateWithImage = async (req, res) => {
  try {
    const { id } = req.params
    const data = req.body
    const poster_course = req.file

    const poster = await cloudinaryHelper.uploadImage(
      'courses',
      poster_course.buffer,
      poster_course.originalname
    )

    const { code, message } = await courseService.updateCourse(id, {
      ...data,
      poster,
    })

    return res.status(code).json({ message })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno. Verifique los datos e intente de nuevo.',
    })
  }
}

export { updateCourse, updateWithImage }
