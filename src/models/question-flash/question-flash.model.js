import { DataTypes } from 'sequelize'

const QuestionFlashModel = (sequelize) => {
  sequelize.define(
    'QuestionFlash',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      question: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      code: {
        type: DataTypes.STRING,
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

export default QuestionFlashModel
