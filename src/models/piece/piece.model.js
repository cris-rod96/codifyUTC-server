import { Sequelize, DataTypes, or } from 'sequelize'

const PieceModel = () => {
  new Sequelize().define(
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
          model: 'Puzzle',
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
