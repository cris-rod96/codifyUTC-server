import { DataTypes } from 'sequelize'

const CourseStudentModel = (sequelize) => {
  sequelize.define(
    'CourseStudent',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      CourseId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Courses',
          key: 'id',
        },
      },

      StudentId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
    },
    {
      timestamps: false,
    }
  )
}

export default CourseStudentModel
