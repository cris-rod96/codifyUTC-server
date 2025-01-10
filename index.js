import server from './src/server.js'
import { NODE_ENV, PORT } from './src/consts/index.consts.js'
import { sequelize } from './src/database/index.database.js'

sequelize
  .sync({ logging: false, force: false, alter: true })
  .then(() => {
    console.log(`Base de datos conectada en modo ${NODE_ENV} correctamente.`)
    server.listen(PORT, () => {
      console.log(`Server running by port ${PORT} in ${NODE_ENV} mode.`)
    })
  })
  .catch((err) => {
    console.log(`Error al conectar a la base de datos: ${err.message}`)
  })
