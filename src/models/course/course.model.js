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
          'Primer',
          'Segundo',
          'Tercer',
          'Cuarto',
          'Quinto',
          'Sexto',
          'Séptimo',
          'Octavo',
          'Noveno',
          'Décimo',
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
        allowNull: true,
        references: {
          model: 'Users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
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
