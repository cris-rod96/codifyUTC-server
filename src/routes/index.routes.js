import { Router } from 'express'
import userRouter from './user/index.route.js'
import courseRouter from './course/index.route.js'

const rootRouter = Router()

rootRouter.use('/users', userRouter)
rootRouter.use('/courses', courseRouter)
export default rootRouter
