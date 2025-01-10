import { DataTypes } from 'sequelize'

const QuestionQuizzModel = (sequelize) => {
  sequelize.define(
    'QuestionQuizz',
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
      time_limit: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      score: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      feedback: {
        type: DataTypes.TEXT,
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

export default QuestionQuizzModel
