import { activityService } from '../../services/index.services.js'

const deleteActivity = async (req, res) => {
  try {
    const { activity_id } = req.params
    if (!activity_id)
      return res
        .status(400)
        .json({ message: 'El identificador de la actividad es obligatorio' })
    const { code, message } = await activityService.deleteActivity(activity_id)
    return res.status(code).json({ message })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      message: error.message,
    })
  }
}

export default deleteActivity
