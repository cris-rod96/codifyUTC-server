import { DataTypes } from 'sequelize'

const CourseModel = (sequelize) => {
  sequelize.define(
    'Course',
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

      semester: {
        type: DataTypes.ENUM,
        values: [
          'Primero',
          'Segundo',
          'Tercero',
          'Cuarto',
          'Quinto',
          'Sexto',
          'Séptimo',
          'Octavo',
          'Noveno',
        ],
        allowNull: false,
      },
      subject: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      section: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ['Matutina', 'Vespertina', 'Nocturna'],
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },

      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },

      TeacherId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      access_code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  )
}

export default CourseModel
