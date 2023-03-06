import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { ListUsersOnlineUseCase } from './ListUsersOnlineUseCase'

class ListUsersOnlineController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listUsersOnlineUserCase = container.resolve(ListUsersOnlineUseCase)

    const users = await listUsersOnlineUserCase.execute()

    return response.json(users)
  }
}

export { ListUsersOnlineController }
