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
import courseStudentRouter from './course-student/index.route.js'
import responseRouter from './response/index.route.js'
import scoreRouter from './score/index.route.js'
import codeRouter from './code/index.route.js'
import recoveryRouter from './recovery/index.route.js'
import activityRouter from './activities/index.route.js'
import quizzResponseRouter from './quizz-response/index.route.js'
import lightningResponseRouter from './lightning-response/index.route.js'
const rootRouter = Router()

rootRouter.use('/activities', activityRouter)
rootRouter.use('/auth', authRouter)
rootRouter.use('/users', userRouter)
rootRouter.use('/codes', codeRouter)
rootRouter.use('/courses', courseRouter)
rootRouter.use('/course-students', courseStudentRouter)
rootRouter.use('/classes', classRouter)
rootRouter.use('/option-flash', optionFlashRouter)
rootRouter.use('/option-quizz', optionQuizzRouter)
rootRouter.use('/output-battle', outputBattleRouter)
rootRouter.use('/pieces', pieceRouter)
rootRouter.use('/puzzles', puzzleRouter)
rootRouter.use('/responses', responseRouter)
rootRouter.use('/topics', topicRouter)
rootRouter.use('/question-flash', questionFlashRouter)
rootRouter.use('/question-quizz', questionQuizzRouter)
rootRouter.use('/scores', scoreRouter)
rootRouter.use('/recover', recoveryRouter)
rootRouter.use('/quizz-response', quizzResponseRouter)
rootRouter.use('/lightning-response', lightningResponseRouter)
export default rootRouter
