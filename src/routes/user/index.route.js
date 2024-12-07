import { Router } from 'express'
import { userController } from '../../controllers/index.controllers.js'
import { multerHelper } from '../../helpers/index.helpers.js'
const userRouter = Router()

userRouter.post(
  '/',
  multerHelper.upload.single('profile_picture'),
  userController.registerUser
)
userRouter.get('/all', userController.getAllUsers)
userRouter.get('/search', userController.getUserByKey)
userRouter.get('/verify', userController.verfyUser)
userRouter.get('/active/:isActive', userController.getUsersByActive)
userRouter.get('/roles', userController.getUsersByRole)
userRouter.get('/deleted', userController.getUsersDeleted)
userRouter.put('/change-password', userController.changePassword)
userRouter.put('/:id', userController.updateUser)

export default userRouter
