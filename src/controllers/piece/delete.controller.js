import { pieceService } from '../../services/index.services.js'

const deletePiece = async (req, res) => {
  try {
    const { id } = req.params
    const { code, message } = await pieceService.deletePiece(id)
    return res.status(code).json({ message })
  } catch (error) {
    return res.status(500).json({
      message:
        'Error interno en el servidor. Verifique los datos e intente de nuevo.',
    })
  }
}

const deleteByPuzzle = async (req, res) => {
  try {
    const { question_id } = req.params
    const { code, message } = await pieceService.deleteByPuzzle(question_id)
    return res.status(code).json({ message })
  } catch (error) {
    return res.status(500).json({
      message:
        'Error interno en el servidor. Verifique los datos e intente de nuevo.',
    })
  }
}

export { deleteByPuzzle, deletePiece }
