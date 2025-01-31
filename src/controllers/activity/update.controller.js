import { activityService } from '../../services/index.services.js'

const updateActivity = async (req, res) => {
  try {
    const { activity_id } = req.params
    const data = req.body
    const { code, message } = await activityService.updateActivity(
      activity_id,
      data
    )
    return res.status(code).json({ message })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno. Intente más tarde.',
    })
  }
}

export default updateActivity
