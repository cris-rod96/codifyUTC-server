import { pieceService } from '../../services/index.services.js'

const updatePiece = async (req, res) => {
  try {
    const { id } = req.params
    const data = req.body

    const { code, message } = await pieceService.updatePiece(id, data)
    return res.status(code).json({ message })
  } catch (error) {
    return res.status(500).json({
      message:
        'Error interno en el servidor. Verifique los datos e intente de nuevo.',
    })
  }
}

export default updatePiece
