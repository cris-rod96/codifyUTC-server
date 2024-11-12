import { DataTypes } from 'sequelize'

const PuzzleModel = (sequelize) => {
  sequelize.define(
    'Puzzle',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      code: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      time_limit: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      score: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      ActivityId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Activities',
          key: 'id',
        },
      },
    },
    {
      timestamps: false,
    }
  )
}

export default PuzzleModel
