import { DataTypes } from 'sequelize'

const OptionQuizzModel = (sequelize) => {
  sequelize.define(
    'OptionQuizz',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      option: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isCorrect: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      QuestionQuizzId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'QuestionQuizzs',
          key: 'id',
        },
      },
    },
    {
      timestamps: false,
    }
  )
}

export default OptionQuizzModel
