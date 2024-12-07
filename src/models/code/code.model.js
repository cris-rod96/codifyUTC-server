import { Sequelize, DataTypes } from 'sequelize'

const CodeModel = (sequelize) => {
  sequelize.define(
    'Code',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      type: {
        type: DataTypes.ENUM,
        values: ['Activation', 'Recovery'],
        allowNull: false,
      },

      method: {
        type: DataTypes.ENUM,
        values: ['Email', 'SMS'],
        allowNull: false,
      },

      email: {
        type: DataTypes.STRING,
      },

      phone: {
        type: DataTypes.STRING,
      },

      code: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      used: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },

      creation_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      timestamps: false,
    }
  )
}

export default CodeModel
