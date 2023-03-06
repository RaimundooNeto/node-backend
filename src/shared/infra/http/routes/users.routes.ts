import { Router } from 'express'
import multer from 'multer'

import uploadConfig from '@config/upload'

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
import { UpdateAvatarController } from '@modules/accounts/useCases/updateUserAvatar/UpdateAvatarController'
import { CreateUserController } from '@modules/accounts/useCases/createUser/CreateUserController'
import { UpdateIsOnlineController } from '@modules/accounts/useCases/updateIsOnline/UpdateIsOnlineControllet'

const usersRoutes = Router()

const uploadAvatar = multer(uploadConfig.upload('./tmp/avatar'))

const createUserController = new CreateUserController()
const updateUserAvatarController = new UpdateAvatarController()
const updateUserIsOnlineController = new UpdateIsOnlineController()

usersRoutes.post('/', createUserController.handle)

usersRoutes.patch(
  '/avatar',
  ensureAuthenticated,
  uploadAvatar.single('avatar'),
  updateUserAvatarController.handle,
)

usersRoutes.patch(
  '/is-online',
  ensureAuthenticated,
  updateUserIsOnlineController.handle,
)

export { usersRoutes }
