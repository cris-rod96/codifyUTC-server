import { DataTypes } from 'sequelize'

const UserModel = (sequelize) => {
  sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      full_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      dni: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: [10, 10],
        },
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },

      phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: [9, 12],
        },
      },

      nick_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      profile_picture: {
        type: DataTypes.STRING,
        // allowNull: false,
        // validate: {
        //   isUrl: true,
        // },
      },

      gender: {
        type: DataTypes.ENUM,
        values: ['Masculino', 'Femenino', 'Otro'],
        allowNull: false,
      },

      role: {
        type: DataTypes.ENUM,
        values: ['Administrador', 'Docente', 'Estudiante'],
        allowNull: true,
        defaultValue: null,
      },

      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },

      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },

      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      timestamps: false,
    }
  )
}

export default UserModel
