import express, { json } from 'express'
import cors from 'cors'
import logger from 'morgan'

const server = express()

server.use(json({ limit: '50mb' }))
server.use(cors())
server.use(logger('dev'))

export default server
