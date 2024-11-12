import { Sequelize } from 'sequelize'
import { CONNECTION } from '../config/database.config.js'
import { models } from '../models/index.models.js'

const sequelize = new Sequelize(CONNECTION.URI, CONNECTION.CONFIG)

models.forEach((model) => model(sequelize))

export { sequelize }
