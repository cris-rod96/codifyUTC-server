import { classService } from '../../services/index.services.js'

const getAll = async (req, res) => {
  try {
    const { code, classes } = await classService.getAll()
    return res.status(code).json({ classes })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      message: 'Error interno. Verifique los datos e intente de nuevo.',
    })
  }
}

const getByCourse = async (req, res) => {
  try {
    const { course_id } = req.params
    const { code, message, classes } = await classService.getByCourse(course_id)
    return res.status(code).json(message ? { message } : { classes })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno. Verifique los datos e intente de nuevo.',
    })
  }
}
const getByKey = async (req, res) => {
  try {
    const { key, value } = req.query
    const { code, message, classFound } = await classService.getByKey(
      key,
      value
    )

    return res.status(code).json(message ? { message } : { classFound })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno. Verifique los datos e intente de nuevo.',
    })
  }
}

const getDeletedClasses = async (req, res) => {
  try {
    const { code, classes } = await classService.getDeletedClasses()
    return res.status(code).json({ classes })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      message: 'Error interno. Verifique los datos e intente de nuevo.',
    })
  }
}

export { getAll, getByCourse, getDeletedClasses, getByKey }
