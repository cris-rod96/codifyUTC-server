import { DataTypes } from 'sequelize'

const ResponseModel = (sequelize) => {
  sequelize.define(
    'Response',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      response: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      time_taken: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      score: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      isCorrect: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },

      question: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      explanation: {
        type: DataTypes.TEXT,
        allowNull: true,
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

export default ResponseModel
