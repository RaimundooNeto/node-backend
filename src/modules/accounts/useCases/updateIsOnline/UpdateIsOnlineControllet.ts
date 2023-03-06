import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { UpdateIsOnlineUseCase } from './UpdateIsOnlineUseCase'

class UpdateIsOnlineController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user

    const updateIsOnlineUseCase = container.resolve(UpdateIsOnlineUseCase)

    await updateIsOnlineUseCase.excute({ user_id: id })

    return response.status(204).send()
  }
}

export { UpdateIsOnlineController }
