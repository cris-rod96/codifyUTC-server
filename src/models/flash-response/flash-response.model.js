import { DataTypes } from 'sequelize'

const FlashResponseModel = (sequelize) => {
  sequelize.define('LightningResponse', {
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

export default FlashResponseModel
