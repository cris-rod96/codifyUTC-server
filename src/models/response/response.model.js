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

      time_taken: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      score_total: {
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

      completionDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      timestamps: false,
    }
  )
}

export default ResponseModel
