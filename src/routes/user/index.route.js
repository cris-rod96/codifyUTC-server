import { Router } from 'express'
import { userController } from '../../controllers/index.controllers.js'

const userRouter = Router()

userRouter.post('/', userController.registerUser)
userRouter.get('/all', userController.getAllUsers)
userRouter.get('/search', userController.getUserByKey)
userRouter.get('/active/:isActive', userController.getUsersByActive)
userRouter.get('/roles', userController.getUsersByRole)
userRouter.get('/deleted', userController.getUsersDeleted)

export default userRouter
