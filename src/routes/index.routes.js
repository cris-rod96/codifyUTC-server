import { Router } from 'express'
import userRouter from './user/index.route.js'
import courseRouter from './course/index.route.js'
import authRouter from './auth/index.route.js'
import classRouter from './class/index.route.js'
import topicRouter from './topic/index.route.js'
import questionQuizzRouter from './question-quizz/index.route.js'
import optionQuizzRouter from './option-quizz/index.route.js'
import questionFlashRouter from './question-flash/index.route.js'
import optionFlashRouter from './option-flash/index.route.js'
import outputBattleRouter from './output-battle/index.route.js'
import puzzleRouter from './puzzle/index.route.js'
import pieceRouter from './piece/index.route.js'

const rootRouter = Router()

rootRouter.use('/auth', authRouter)
rootRouter.use('/users', userRouter)
rootRouter.use('/courses', courseRouter)
rootRouter.use('/classes', classRouter)
rootRouter.use('/option-flash', optionFlashRouter)
rootRouter.use('/option-quizz', optionQuizzRouter)
rootRouter.use('/output-battle', outputBattleRouter)
rootRouter.use('/pieces', pieceRouter)
rootRouter.use('/puzzles', puzzleRouter)
rootRouter.use('/topics', topicRouter)
rootRouter.use('/question-flash', questionFlashRouter)
rootRouter.use('/question-quizz', questionQuizzRouter)
export default rootRouter
