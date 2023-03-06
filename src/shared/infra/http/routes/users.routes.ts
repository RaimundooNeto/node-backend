import { Router } from 'express'
import multer from 'multer'

import uploadConfig from '@config/upload'

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
import { UpdateAvatarController } from '@modules/accounts/useCases/updateUserAvatar/UpdateAvatarController'
import { CreateUserController } from '@modules/accounts/useCases/createUser/CreateUserController'
import { UpdateIsOnlineController } from '@modules/accounts/useCases/updateIsOnline/UpdateIsOnlineControllet'
import { ListUsersOnlineController } from '@modules/accounts/useCases/listUsersOnline/ListUsersOnlineControllet'

const usersRoutes = Router()

const uploadAvatar = multer(uploadConfig.upload('./tmp/avatar'))

const createUserController = new CreateUserController()
const updateUserAvatarController = new UpdateAvatarController()
const updateUserIsOnlineController = new UpdateIsOnlineController()
const listUsersOnlineController = new ListUsersOnlineController()

// Cria um novo usuário
usersRoutes.post('/', createUserController.handle)

// Altera a imagem de avatar de um usuário
usersRoutes.patch(
  '/avatar',
  ensureAuthenticated,
  uploadAvatar.single('avatar'),
  updateUserAvatarController.handle,
)

// Altera o status online de um usuário
usersRoutes.patch(
  '/is-online',
  ensureAuthenticated,
  updateUserIsOnlineController.handle,
)

// Lista todos os usuários online
usersRoutes.get(
  '/is-online',
  ensureAuthenticated,
  listUsersOnlineController.handle,
)

export { usersRoutes }
