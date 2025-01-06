import { DB_DEV, DB_PROD, NODE_ENV } from '../consts/index.consts.js'

export const CONNECTION = {
  URI: NODE_ENV === 'development' ? DB_DEV : DB_PROD,
  CONFIG:
    NODE_ENV !== 'development'
      ? {
          logging: false,
          native: false,
          dialect: 'postgres',
          dialectOptions: {
            ssl: {
              require: true,
              rejectUnauthorized: false,
            },
          },
        }
      : {
          logging: false,
          native: false,
          dialect: 'postgres',
        },
}
