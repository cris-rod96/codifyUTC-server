import express, { json } from 'express'
import cors from 'cors'
import logger from 'morgan'
import rootRouter from './routes/index.routes.js'

const server = express()

server.use(json({ limit: '50mb' }))
server.use(cors())
server.use(logger('dev'))
server.use('/api/v1', rootRouter)

export default server
