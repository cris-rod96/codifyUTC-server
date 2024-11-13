import { Router } from 'express'
import userRouter from './user/index.route.js'
import courseRouter from './course/index.route.js'
import authRouter from './auth/index.route.js'
import classRouter from './class/index.route.js'
import topicRouter from './topic/index.route.js'

const rootRouter = Router()

rootRouter.use('/auth', authRouter)
rootRouter.use('/users', userRouter)
rootRouter.use('/courses', courseRouter)
rootRouter.use('/classes', classRouter)
rootRouter.use('/topics', topicRouter)
export default rootRouter
