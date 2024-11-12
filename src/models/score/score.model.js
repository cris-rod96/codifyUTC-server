import { DataTypes } from 'sequelize'

const ScoreModel = (sequelize) => {
  sequelize.define(
    'Score',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      final_score: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      total_time: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      StudentId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
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

export default ScoreModel
