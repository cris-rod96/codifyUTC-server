import { DataTypes } from 'sequelize'

const OptionFlashModel = (sequelize) => {
  sequelize.define(
    'OptionFlash',
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
      QuestionFlashId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'QuestionFlash',
          key: 'id',
        },
      },
    },
    {
      timestamps: false,
    }
  )
}

export default OptionFlashModel
