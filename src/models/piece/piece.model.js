import { DataTypes } from 'sequelize'

const PieceModel = (sequelize) => {
  sequelize.define(
    'Piece',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      fragment: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      order: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      PuzzleId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Puzzles',
          key: 'id',
        },
      },
    },
    {
      timestamps: false,
    }
  )
}

export default PieceModel
