import { pieceService } from '../../services/index.services.js'

const getByPuzzle = async (req, res) => {
  try {
    const { puzzle_id } = req.params
    const { code, message, pieces } = await pieceService.getByPuzzle(puzzle_id)
    return res.status(code).json(message ? { pieces } : { options })
  } catch (error) {
    return res.status(500).json({
      message:
        'Error interno en el servidor. Verifique los datos e intente de nuevo.',
    })
  }
}

export default getByPuzzle
