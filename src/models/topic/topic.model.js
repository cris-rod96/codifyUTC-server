import { DataTypes } from 'sequelize'

const TopicModel = (sequelize) => {
  sequelize.define(
    'Topic',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      external_resource: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
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

export default TopicModel
