import server from './src/server.js'
import { NODE_ENV, PORT } from './src/consts/index.consts.js'

server.listen(PORT, () => {
  console.log(`Server running by port ${PORT} in ${NODE_ENV} mode.`)
})
