import { DataTypes } from 'sequelize'

const OutputBattleModel = (sequelize) => {
  sequelize.define(
    'OutputBattle',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      problem: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      code: {
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

      expected_output: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      feedback: {
        type: DataTypes.STRING,
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

export default OutputBattleModel
