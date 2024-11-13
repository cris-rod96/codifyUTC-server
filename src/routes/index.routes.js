import { Router } from 'express'
import userRouter from './user/index.route.js'
import courseRouter from './course/index.route.js'
import authRouter from './auth/index.route.js'
import classRouter from './class/index.route.js'

const rootRouter = Router()

rootRouter.use('/auth', authRouter)
rootRouter.use('/users', userRouter)
rootRouter.use('/courses', courseRouter)
rootRouter.use('/classes', classRouter)
export default rootRouter
