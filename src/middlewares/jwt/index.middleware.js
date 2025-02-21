import { request, response } from 'express'
import { jwtUtl } from '../../utils/index.utils.js'
import { User } from '../../database/index.database.js'

const validateToken = async (req = request, res = response, next) => {
  try {
    const token = req.header('x-token')
    if (!token) {
      return res.status(401).json({
        message: 'Acceso denegado. Permisos insuficientes.',
      })
    }

    const { id } = jwtUtl.verifyToken(token)
    const user = await User.findByPk(id)
    if (user.role !== 'Administrador') {
      return res.status(401).json({
        message: 'Acción no permitida. Debes ser administrador.',
      })
    }

    next()
  } catch (error) {
    return res.status(401).json({
      message: `Acceso denegado. El token ingresado no es válido`,
    })
  }
}

export default { validateToken }
