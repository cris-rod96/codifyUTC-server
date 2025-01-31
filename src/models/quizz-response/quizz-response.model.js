import { DataTypes, Sequelize } from 'sequelize'

const QuizzResponseModel = (sequelize) => {
  sequelize.define('QuizzResponse', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },

    question: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    user_response: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    correct_response: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    time_taken: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    score_total: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    score_obtained: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    feedback: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    ResponseId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Responses',
        key: 'id',
      },
    },
  })
}

export default QuizzResponseModel
