import { DataTypes } from 'sequelize'

const ClassModel = (sequelize) => {
  sequelize.define(
    'Class',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      topic: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },

      isDeleted: {
        type: DataTypes.STRING,
        defaultValue: false,
      },

      CourseId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Courses',
          key: 'id',
        },
      },
    },
    {
      timestamps: false,
    }
  )
}

export default ClassModel
