import { activityService } from '../../services/index.services.js'

const getById = async (req, res) => {
  try {
    const { id } = req.params
    const { code, activity, message } = await activityService.getByID(id)
    return res.status(code).json(message ? { message } : { activity })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      message: 'Error interno. Verifique los datos e intente de nuevo.',
    })
  }
}

const getByClass = async (req, res) => {
  try {
    const { class_id } = req.params
    const { code, activities } = await activityService.getByClass(class_id)
    return res.status(code).json({ activities })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno. Verifique los datos e intente de nuevo.',
    })
  }
}

const getByTeacher = async (req, res) => {
  try {
    const { user_id: TeacherId } = req.params
    const { code, activities, message } = await activityService.getByTeacher(
      TeacherId
    )
    return res.status(code).json(message ? { message } : { activities })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      message: 'Error interno. Verifique los datos e intente de nuevo.',
    })
  }
}

export { getByClass, getByTeacher, getById }
