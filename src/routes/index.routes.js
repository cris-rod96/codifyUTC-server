import { Router } from 'express'
import userRouter from './user/index.route.js'

const rootRouter = Router()

rootRouter.use('/users', userRouter)

export default rootRouter
