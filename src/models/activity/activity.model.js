import { DataTypes } from 'sequelize'

const ActivityModel = (sequelize) => {
  sequelize.define(
    'Activity',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      poster: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      created_at: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      due_date: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      status: {
        type: DataTypes.ENUM,
        values: ['Abierta', 'Cerrada', 'Cancelada'],
        defaultValue: 'Abierta',
      },

      activities_count: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      total_time: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      total_score: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      type: {
        type: DataTypes.ENUM,
        values: [
          'Quizz Code',
          'Lightning Code',
          'Puzzle Master',
          'Brain Boost',
        ],
        allowNull: false,
      },

      ClassId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Classes',
          key: 'id',
        },
      },
    },
    {
      timestamps: false,
    }
  )
}

export default ActivityModel
